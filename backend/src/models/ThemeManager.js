const AbstractManager = require("./AbstractManager");

class ThemeManager extends AbstractManager {
  constructor() {
    super({ table: "theme" });
  }

  insert(theme) {
    return this.connection.query(
      `insert into ${this.table} (theme_name) values (?)`,
      [theme.theme_name]
    );
  }

  update(theme) {
    return this.connection.query(
      `update ${this.table} set theme_name = ? where id = ?`,
      [theme.theme_name, theme.id]
    );
  }
}

module.exports = ThemeManager;
