const models = require("../models");

const add = (req, res) => {
  const comment = req.body;

  // TODO validations (length, format...)

  models.comment
    .insert(comment)
    .then(([result]) => {
      res.location(`/comments/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
};
