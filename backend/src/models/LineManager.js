const AbstractManager = require("./AbstractManager");

class LineManager extends AbstractManager {
  constructor() {
    super({ table: "line" });
  }

  insert(line) {
    return this.connection.query(
      `insert into ${this.table} (id_region, line_name, picture) values (?, ?, ?)`,
      [line.id_region, line.line_name, line.picture]
    );
  }

  update(line) {
    return this.connection.query(
      `update ${this.table} set id_region = ?, descritpion = ?, picture = ? where id = ?`,
      [line.id_region, line.line_name, line.picture, line.id]
    );
  }
}

module.exports = LineManager;
