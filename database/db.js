const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

conexion.connect((err) => {
  if (err) {
    console.error("Error de conexion" + err);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = conexion;
