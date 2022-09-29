const AbstractManager = require("./AbstractManager");

class ActivityManager extends AbstractManager {
  constructor() {
    super({ table: "activity" });
  }

  findActivityWithCityId(id) {
    return this.connection.query(
      // 1 select dans la table activity puis dans la table theme From de la table activity AS alias a
      // INNER JOIN ce joint a city alias c ON a condition que city.id= activity.id_city
      // INNER JOIN ce joint a theme AS alias t ON a condition que t.id=a.id_theme WHERE quand l'id de city = ?

      /* `select c.id, a.id, a.activity_name, a.adress, a.description, a.picture, t.theme_name, t.image FROM ${this.table} AS a
    INNER JOIN city AS c ON c.id=a.id_city
    INNER JOIN theme AS t ON t.id=a.id_theme WHERE c.id=?`,
      [id] */

      `SELECT a.id, a.activity_name, a.adress, a.description, 
      a.picture, t.theme_name, t.image FROM city AS c 
      INNER JOIN ${this.table} AS a ON a.id_city=c.id 
      INNER JOIN theme AS t ON t.id=a.id_theme WHERE c.id=?;`,
      [id]
    );
  }

  insert(activity) {
    return this.connection.query(
      `insert into ${this.table} (id_city, id_theme, activity_name, adress, description, picture) values (?, ?, ?, ?, ?, ?)`,
      [
        activity.city,
        activity.theme,
        activity.name,
        activity.adress,
        activity.description,
        activity.picture,
      ]
    );
  }

  update(activity) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [activity.title, activity.id]
    );
  }
}

module.exports = ActivityManager;
