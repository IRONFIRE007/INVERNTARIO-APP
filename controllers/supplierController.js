const conexion = require("../database/db");
var proveedor = require("../model/proveedor");

//Proveedor
exports.indexProveedor = (req, res) => {
  proveedor.obtener(conexion, function (err, dato) {
    res.render("proveedor/index", { proveedores: dato });
  });
};

exports.crearProveedor = (req, res) => {
  res.render("proveedor/crear");
};

exports.guardarProveedor = (req, res) => {
  proveedor.insertar(conexion, req.body, function (err) {
    res.redirect("/proveedor");
  });
};

exports.eliminarProveedor = (req, res) => {
  proveedor.borrar(conexion, req.params.id, function (err) {
    res.redirect("/proveedor");
  });
};

exports.editarProveedor = (req, res) => {
  proveedor.retornarDatosId(conexion, req.params.id, function (err, dato) {
    res.render("proveedor/editar", { proveedor: dato[0] });
  });
};

exports.actualizarProveedor = (req, res) => {
  if (req.body.nombre) {
    proveedor.actualizar(conexion, req.body, function (err) {
      res.redirect("/proveedor");
    });
  }
};
