const models = require("../models");

const postUserActivity = (req, res) => {
  const userActivity = req.body;

  // TODO validations (length, format...)

  models.user_activity
    .insertUserActivity(userActivity)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.user_activity
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyActivityWithIdUser = (req, res) => {
  const userActivity = req.body;

  models.user_activity
    .deleteActivityWithIdUser(userActivity)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  postUserActivity,
  destroy,
  destroyActivityWithIdUser,
};
