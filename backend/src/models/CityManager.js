const AbstractManager = require("./AbstractManager");

class CityManager extends AbstractManager {
  constructor() {
    super({ table: "city" });
  }

  findWithLineId(id) {
    return this.connection.query(
      `select c.id, c.city_name, c.picture from ${this.table} as c
      inner join line_city on line_city.id_city=c.id
      inner join line as l on line_city.id_line=l.id WHERE l.id = ?`,

      [id]
    );
  }

  findCityLogo(id) {
    return this.connection.query(
      `SELECT DISTINCT c.city_name, t.id, t.theme_name, t.image FROM ${this.table} AS c
  INNER JOIN activity AS a ON c.id=a.id_city
  INNER JOIN theme AS t ON a.id_theme=t.id where c.id = ?`,

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
