const AbstractManager = require("./AbstractManager");

class userRegistrationControllers extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (last_name, first_name, mail, password, picture) values (?,?,?,?,?)`,
      [user.last_name, user.first_name, user.mail, user.password, user.picture]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set last_name = ?, first_name = ?, mail = ?, password = ?, picture = ? where id = ?`,
      [user.last_name, user.first_name, user.mail, user.password, user.picture]
    );
  }
}

module.exports = userRegistrationControllers;
