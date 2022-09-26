const models = require("../models");

const getAll = (req, res) => {
  models.theme
    .findAll()
    .then(([rows]) => {
      const themes = [];
      rows.map((row) =>
        themes.push({
          value: row.id,
          label: row.theme_name,
        })
      );
      res.send(themes);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getById = (req, res) => {
  models.theme
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const update = (req, res) => {
  const theme = req.body;

  // TODO validations (length, format...)

  theme.id = parseInt(req.params.id, 10);

  models.theme
    .update(theme)
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

const post = (req, res) => {
  const theme = req.body;

  // TODO validations (length, format...)

  models.theme
    .insert(theme)
    .then(([result]) => {
      res.location(`/theme/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.theme
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

module.exports = {
  getAll,
  getById,
  update,
  post,
  destroy,
};
