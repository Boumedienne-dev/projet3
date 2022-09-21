const AbstractManager = require("./AbstractManager");

class CityManager extends AbstractManager {
  constructor() {
    super({ table: "city" });
  }

  findWithLineId(id) {
    return this.connection.query(
      `select line_name, city_name from ${this.table} 
      inner join line_city on line_city.id_city=city.id
      inner join line on line_city.id_line=line.id WHERE line.id = ?`,
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

module.exports = CityManager;
