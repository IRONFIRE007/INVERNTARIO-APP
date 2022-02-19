const conexion = require("../database/db");
var cliente = require("../model/cliente");

//Clientes
exports.indexCliente = (req, res) => {
  cliente.obtener(conexion, function (err, dato) {
    res.render("cliente/index", { clientes: dato });
  });
};

exports.crearCliente = (req, res) => {
  res.render("cliente/crear");
};

exports.guardarCliente = (req, res) => {
  cliente.insertar(conexion, req.body, function (err) {
    res.redirect("/cliente");
  });
};

exports.eliminarCliente = (req, res) => {
  proveedor.borrar(conexion, req.params.id, function (err) {
    res.redirect("/cliente");
  });
};

exports.editarCliente = (req, res) => {
  cliente.retornarDatosId(conexion, req.params.id, function (err, dato) {
    res.render("cliente/editar", { cliente: dato[0] });
  });
};

exports.actualizarCliente = (req, res) => {
  if (req.body.nombre) {
    cliente.actualizar(conexion, req.body, function (err) {
      res.redirect("/cliente");
    });
  }
};
