const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(comment) {
    return this.connection.query(
      `insert into ${this.table} (lastname, firstname, mail, comment, picture, date ) values (?, ?, ?, ?, ?, ?)`,
      [
        comment.lastname,
        comment.firstname,
        comment.mail,
        comment.comment,
        comment.picture,
        comment.date,
      ]
    );
  }
}
module.exports = CommentManager;
