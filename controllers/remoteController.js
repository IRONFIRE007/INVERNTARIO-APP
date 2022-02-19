const conexion = require("../database/db");
const config = require("../model/config");
const subconsultas = require("../model/subconsultas");

exports.crearAdmin = (req, res) => {
  config.insertar(conexion);
  res.render("login", { alert: false });
};

exports.subconsultas = (req, res) => {
  subconsultas.producto(conexion, function (err, p) {
    subconsultas.cliente(conexion, function (err, c) {
      subconsultas.compra(conexion, function (err, com) {
        res.render("consultas", { productos: p, clientes: c, compra: com[0] });
      });
    });
  });
};
