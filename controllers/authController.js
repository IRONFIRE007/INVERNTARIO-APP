const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const conexion = require("../database/db");
const { promisify } = require("util");

//Registro

exports.register = async (req, res) => {
  try {
    const { correo, nombreUsuario } = req.body;
    let contrasenia = await bcrypt.hash(req.body.contrasenia, 8);

    conexion.query(
      "INSERT INTO  usuarios SET ?",
      { nombreUsuario: nombreUsuario, correo: correo, contrasenia },
      (err, results) => {
        if (err) {
          console.log("No se pudo crear el usuario" + err);
        }
        res.redirect("/");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { nombreUsuario, contrasenia } = req.body;

    if (!nombreUsuario || !contrasenia) {
      res.render("login", {
        alert: true,
        alertTitle: "Advertencia",
        alertMessage: "Ingrese la informacion necesaria",
        alertIcon: "info",
        showConfirmButton: true,
        timer: 1200,
        ruta: "login",
      });
    } else {
      conexion.query(
        "SELECT * FROM usuarios WHERE  nombreUsuario = ?",
        [nombreUsuario],
        async (err, result) => {
          if (
            result.length == 0 ||
            !(await bcrypt.compare(contrasenia, result[0].contrasenia))
          ) {
            res.render("login", {
              alert: true,
              alertTitle: "Error",
              alertMessage: "Usuario o Password incorrectas",
              alertIcon: "error",
              showConfirmButton: true,
              timer: 1200,
              ruta: "login",
            });
          } else {
            //Incio de sesion
            const id = result[0].id;

            const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
              expiresIn: process.env.JWT_TIEMPO_EXPIRA,
            });

            const cookieOptions = {
              expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 1000
              ),
              httpOnly: true,
            };
            res.cookie("jwt", token, cookieOptions);
            res.render("login", {
              alert: true,
              alertTitle: "Conexión exitosa",
              alertMessage: "¡LOGIN CORRECTO!",
              alertIcon: "success",
              showConfirmButton: false,
              timer: 1000,
              ruta: "",
            });
          }
        }
      );
    }
  } catch (error) {
    console.log(err);
  }
};

exports.isAuthenticated = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decodificada = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRETO
      );

      conexion.query(
        "SELECT * FROM usuarios WHERE id = ?",
        [decodificada.id],
        (error, results) => {
          if (!results) {
            return next();
          }
          data = results[0];

          return next();
        }
      );
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    res.redirect("/login");
  }
};

exports.logout = (req, res) => {
  res.clearCookie("jwt");

  return res.redirect("/");
};
