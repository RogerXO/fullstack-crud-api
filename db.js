import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "100H@cker",
  database: "fullstack-crud",
})
