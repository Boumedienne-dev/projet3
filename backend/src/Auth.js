const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const { mailRecover } = require("./controllers/sendEmail");

// Options pour le hashage de Argon2
const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

// Fonction pour le hashage du mot de passe
const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      // Stock le hashedPassword dans le req.body
      req.body.hashedPassword = hashedPassword;
      // suppression de toute trace du mot de passe non hashé
      delete req.body.password;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Fonction pour vérifier le mot de passe
const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.hashedPassword, req.body.password)
    // Suite si le verify est correct entre le mot de passe que l'utilisateur rentre et celui hashé dans la BDD.
    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.user.id, isAdmin: req.user.isAdmin };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          // a changer en 1h il est en 1an pour developper sans devoir se reconnecter
          expiresIn: "365d",
        });

        delete req.user.hashedPassword;
        res.send({ token, user: req.user });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Vérifie que le token est généré côté back
const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }
    // Récupère le type d'authorization et le token qui suis.
    const [type, token] = authorizationHeader.split(" ");
    // Si le token n'est pas de type Bearer, ça ne continue pas.
    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }
    // Véreifie que le token a été écrit par le back
    req.payload = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

// Fonction pour la création d'un token spécifique pour la réinialisation du password
// eslint-disable-next-line no-unused-vars
const modifyPassword = (req, res) => {
  const payload = { sub: req.user.id, reset: "reset" };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
  // Envoie du mail avec différentes informations.
  const message = { token, mail: req.user.mail };
  mailRecover(message);
  delete req.user.hashedPassword;
  // req.send({ token, user: req.user });
};

const hashPasswordForReset = (req, res, next) => {
  // Récupère le token via le parametre d'url
  const { token } = req.params;
  const myToken = token.split("$").join(".");
  // Décodage du token
  req.payload = jwt.verify(myToken, process.env.JWT_SECRET);
  // Vérification que le payload est celui du reset
  if (req.payload.reset === "reset") {
    argon2
      .hash(req.body.password, hashingOptions)
      .then((hashedPassword) => {
        req.body.hashedPassword = hashedPassword;
        delete req.body.password;
        next();
      })
      .catch((err) => {
        console.error(err);
        res.sendStaus(500);
      });
  } else {
    res
      .status(401)
      .send(
        "Vous n'êtes pas le bon utilisateur pour modifier le mot de passe."
      );
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
  modifyPassword,
  hashPasswordForReset,
};
