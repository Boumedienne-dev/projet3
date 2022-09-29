const mailer = require("./mailer");

// Fonction qui envoie le mail
const mailRecover = (data) => {
  // Rend le token compatible parametre react
  const tokenModified = data.token.split(".").join("$");
  mailer.sendMail(
    {
      from: "a.jeanne01@sncf.fr",
      to: data.mail,
      subject: "Reset du mot de passe de SNCF Exploration",
      text: "Voici le lien pour reset le mot de passe",
      html: `<p>Voici le lien pour reset le mot de passe </p><a href="http://localhost:3000/modification/${tokenModified}">ResetPassword</a>`,
    },
    (err, info) => {
      if (err) console.error(err);
      else console.warn(info);
    }
  );
};
module.exports = {
  mailRecover,
};
