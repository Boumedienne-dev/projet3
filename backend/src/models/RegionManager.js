const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "region" });
  }

  insert(region) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [region.name]
    );
  }

  update(region) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [region.name, region.id]
    );
  }
}

module.exports = ItemManager;
