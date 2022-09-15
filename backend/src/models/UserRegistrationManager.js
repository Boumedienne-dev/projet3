const AbstractManager = require("./AbstractManager");

class userRegistrationControllers extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (last_name, first_name, mail, password, picture) values (?, ?, ?, ?, ?,)`,
      [user.last_name, user.first_name, user.mail, user.password, user.picture]
    );
  }
}

module.exports = userRegistrationControllers;
