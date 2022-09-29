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

module.exports = {
  postUserActivity,
};
