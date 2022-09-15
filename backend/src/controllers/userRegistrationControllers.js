const models = require("../models");

const add = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)
  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/lines/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
};
