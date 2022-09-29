const AbstractManager = require("./AbstractManager");

class userControllers extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findActivityWithUserId(id) {
    return this.connection.query(
      `SELECT a.activity_name, a.description, a.adress, a.picture FROM ${this.table} AS u 
      INNER JOIN user_activity ON user_activity.id_user=u.id 
      INNER JOIN activity AS a ON a.id=user_activity.id_activity WHERE u.id = ?`,
      [id]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (last_name, first_name, mail, hashedPassword, picture) values (?,?,?,?,?)`,
      [
        user.last_name,
        user.first_name,
        user.mail,
        user.hashedPassword,
        user.picture,
      ]
    );
  }

  updateWithoutPassword(user) {
    return this.connection.query(
      `update ${this.table} set last_name = ?, first_name = ?, mail = ?, hashedPassword = ?, picture = ? where id = ?`,
      [
        user.last_name,
        user.first_name,
        user.mail,
        user.hashedPassword,
        user.picture,
        user.id,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set last_name = ?, first_name = ?, mail = ?, hashedPassword = ?, picture = ? where id = ?`,
      [
        user.last_name,
        user.first_name,
        user.mail,
        user.hashedPassword,
        user.picture,
      ]
    );
  }

  findUserByEmail(mail) {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE mail = ?`, [
      [mail],
    ]);
  }

  updatePassword(user, id) {
    return this.connection.query(
      `update ${this.table} set hashedPassword = ? where id = ?`,
      [user.hashedPassword, id]
    );
  }
}

module.exports = userControllers;
