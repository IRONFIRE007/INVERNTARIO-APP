const conexion = require("../database/db");
const producto = require("../model/producto");
const categoria = require("../model/categoria");
const proveedor = require("../model/proveedor");

//Productos
exports.indexProducto = (req, res) => {
  producto.obtener(conexion, function (err, dato) {
    categoria.obtener(conexion, function (err, info) {
      proveedor.obtener(conexion, function (err, date) {
        res.render("producto/index", {
          productos: dato,
          categorias: info,
          proveedores: date,
        });
      });
    });
  });
};

exports.crearProducto = (req, res) => {
  categoria.obtener(conexion, function (err, dato) {
    proveedor.obtener(conexion, function (err, info) {
      res.render("producto/crear", { categorias: dato, proveedores: info });
    });
  });
};

exports.guardarProducto = (req, res) => {
  producto.insertar(conexion, req.body, function (err) {
    res.redirect("/product");
  });
};

exports.eliminarProducto = (req, res) => {
  producto.borrar(conexion, req.params.id, function (err) {
    res.redirect("/product");
  });
};

exports.editarProducto = (req, res) => {
  producto.retornarDatosId(conexion, req.params.id, function (err, dato) {
    categoria.obtener(conexion, function (err, ca) {
      proveedor.obtener(conexion, function (err, pro) {
        res.render("producto/editar", {
          producto: dato[0],
          categorias: ca,
          proveedores: pro,
        });
      });
    });
  });
};

exports.actualizarProducto = (req, res) => {
  if (req.body.nombre) {
    producto.actualizar(conexion, req.body, function (err) {
      res.redirect("/product");
    });
  }
};
