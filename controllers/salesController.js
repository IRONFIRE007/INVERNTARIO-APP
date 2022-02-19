const conexion = require("../database/db");
var ventas = require("../model/ventas");
var producto = require("../model/producto");
var cliente = require("../model/cliente");

//Ventas
exports.indexVenta = (req, res) => {
  ventas.obtener(conexion, function (err, dato) {
    producto.obtener(conexion, function (err, product) {
      cliente.obtener(conexion, function (err, client) {
        res.render("ventas/index", {
          ventas: dato,
          productos: product,
          clientes: client,
        });
      });
    });
  });
};

exports.crearVenta = (req, res) => {
  ventas.obtener(conexion, function (err, dato) {
    producto.obtener(conexion, function (err, product) {
      cliente.obtener(conexion, function (err, client) {
        res.render("ventas/crear", {
          ventas: dato,
          productos: product,
          clientes: client,
        });
      });
    });
  });
};

exports.guardarVenta = (req, res) => {
  ventas.insertar(conexion, req.body, function (err) {
    res.redirect("/venta");
  });
};

exports.eliminarVenta = (req, res) => {
  ventas.borrar(conexion, req.params.id, function (err) {
    res.redirect("/venta");
  });
};
