const AbstractManager = require("./AbstractManager");

class CityManager extends AbstractManager {
  constructor() {
    super({ table: "city" });
  }

  findWithLineId(id) {
    return this.connection.query(
      `select city_name from ${this.table} 
      inner join line_city on line_city.id_city=city.id
      inner join line on line_city.id_line=line.id WHERE line.id = ?`,
      [id]
    );
  }

  insert(city) {
    return this.connection.query(
      `insert into ${this.table} (city_name, description, picture) values (?, ?, ?)`,
      [city.city_name, city.description, city.picture]
    );
  }

  update(city) {
    return this.connection.query(
      `update ${this.table} set city_name = ?, descritpion = ?, picture = ? where id = ?`,
      [city.city_name, city.description, city.picture, city.id]
    );
  }
}

module.exports = CityManager;
