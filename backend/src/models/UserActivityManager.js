const AbstractManager = require("./AbstractManager");

class UserActivityManager extends AbstractManager {
  constructor() {
    super({ table: "user_activity" });
  }

  insertUserActivity(userActivity) {
    return this.connection.query(
      `INSERT INTO user_activity (id_user, id_activity) values (?, ?)`,
      [userActivity.id_user, userActivity.id_activity]
    );
  }
}

module.exports = UserActivityManager;
