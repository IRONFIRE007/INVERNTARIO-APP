const conexion = require("../database/db");
const categoria = require("../model/categoria");

//Categorias

exports.index = (req, res) => {
  categoria.obtener(conexion, function (err, dato) {
    res.render("categoria/index", { categorias: dato });
  });
};

exports.crear = (req, res) => {
  res.render("categoria/crear");
};

exports.guardar = (req, res) => {
  categoria.insertar(conexion, req.body, function (err) {
    res.redirect("/category");
  });
};

exports.eliminar = (req, res) => {
  categoria.borrar(conexion, req.params.id, function (err) {
    res.redirect("/category");
  });
};

exports.editar = (req, res) => {
  categoria.retornarDatosId(conexion, req.params.id, function (err, dato) {
    res.render("categoria/editar", { categoria: dato[0] });
  });
};

exports.actualizar = (req, res) => {
  if (req.body.nombre) {
    categoria.actualizar(conexion, req.body, function (err) {
      res.redirect("/category");
    });
  }
};
