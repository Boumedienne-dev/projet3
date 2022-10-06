const AbstractManager = require("./AbstractManager");

class ThemeManager extends AbstractManager {
  constructor() {
    super({ table: "theme" });
  }

  insert(theme) {
    return this.connection.query(
      `insert into ${this.table} (theme_name, image) values (?,?)`,
      [theme.theme_name, theme.image]
    );
  }

  update(theme) {
    return this.connection.query(
      `update ${this.table} set theme_name = ?, image = ? where id = ?`,
      [theme.theme_name, theme.image, theme.id]
    );
  }
}

module.exports = ThemeManager;
