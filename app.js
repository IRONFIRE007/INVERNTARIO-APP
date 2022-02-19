const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const app = express();

//Setter del motor de plantilla
app.set("view engine", "ejs");

//Setter de la carpeta public para archivos staticos
app.use(express.static("public"));

//Para procesar datos enviados desde formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Setter de las variables de entorno
dotenv.config({ path: "./env/.env" });

//Setter de las cookies
app.use(cookieParser());

app.listen(3000, () => {
  console.log("listening on port 3000");
});

//Routes

app.use("/", require("./routes/router"));

app.use((req, res, next) => {
  if (!req.user)
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  next();
});
