const AbstractManager = require("./AbstractManager");

class LineManager extends AbstractManager {
  constructor() {
    super({ table: "line" });
  }

  findAllWithRegionId() {
    return this.connection.query(
      `select * from  ${this.table} join region ON region.id=line.id_region`
    );
  }

  findWithRegionId(id) {
    return this.connection.query(
      `select l.id, l.line_name,  l.picture from  ${this.table} as l join region as r on r.id=l.id_region WHERE r.id = ?`,
      [id]
    );
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
