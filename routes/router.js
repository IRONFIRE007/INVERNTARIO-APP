const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const categoryController = require("../controllers/categoryController");
const productController = require("../controllers/productController");
const supplierController = require("../controllers/supplierController");
const clientController = require("../controllers/clientController");
const ventasController = require("../controllers/salesController");
const remoteController = require("../controllers/remoteController");

const { isAuthenticated, register, login, logout } = authController;
const { index, crear, guardar, eliminar, editar, actualizar } =
  categoryController;
const {
  indexProducto,
  crearProducto,
  guardarProducto,
  eliminarProducto,
  editarProducto,
  actualizarProducto,
} = productController;
const {
  indexProveedor,
  crearProveedor,
  guardarProveedor,
  eliminarProveedor,
  editarProveedor,
  actualizarProveedor,
} = supplierController;
const {
  indexCliente,
  crearCliente,
  guardarCliente,
  eliminarCliente,
  editarCliente,
  actualizarCliente,
} = clientController;
const { indexVenta, crearVenta, guardarVenta, eliminarVenta } =
  ventasController;

const { crearAdmin,subconsultas } = remoteController;

//---------------------------CONTROLLERS---------------------------//

router.get("/", isAuthenticated, (req, res) => {
  res.render("index", { user: data });
});
//Auth Routes
router.get("/register", isAuthenticated, (req, res) => {
  res.render("register");
});

router.get("/login", crearAdmin);

router.get("/inventario", isAuthenticated, (req, res) => {
  res.render("inventario", { user: data });
});
router.get("/ventas", isAuthenticated, (req, res) => {
  res.render("ventas", { user: data });
});

//Routes controllers
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

//Categoria Controller
router.get("/category", isAuthenticated, index);
router.get("/category/crear", isAuthenticated, crear);
router.post("/category/crear", isAuthenticated, guardar);
router.post("/category/eliminar/:id", eliminar);
router.get("/category/editar/:id", isAuthenticated, editar);
router.post("/category/actualizar", isAuthenticated, actualizar);

//Producto Controller
router.get("/product", isAuthenticated, indexProducto);
router.get("/product/crear", isAuthenticated, crearProducto);
router.post("/product/crear", isAuthenticated, guardarProducto);
router.post("/product/eliminar/:id", isAuthenticated, eliminarProducto);
router.get("/product/editar/:id", isAuthenticated, editarProducto);
router.post("/product/actualizar", isAuthenticated, actualizarProducto);

//Proveedor Controller
router.get("/proveedor", isAuthenticated, indexProveedor);
router.get("/proveedor/crear", isAuthenticated, crearProveedor);
router.post("/proveedor/crear", isAuthenticated, guardarProveedor);
router.post("/proveedor/eliminar/:id", isAuthenticated, eliminarProveedor);
router.get("/proveedor/editar/:id", isAuthenticated, editarProveedor);
router.post("/proveedor/actualizar", actualizarProveedor);

//Cliente Controller
router.get("/cliente", isAuthenticated, indexCliente);
router.get("/cliente/crear", isAuthenticated, crearCliente);
router.post("/cliente/crear", isAuthenticated, guardarCliente);
router.post("/cliente/eliminar/:id", isAuthenticated, eliminarCliente);
router.get("/cliente/editar/:id", isAuthenticated, editarCliente);
router.post("/cliente/actualizar", isAuthenticated, actualizarCliente);

//Ventas Controller
router.get("/venta", isAuthenticated, indexVenta);
router.get("/ventas/crear", isAuthenticated, crearVenta);
router.post("/ventas/crear", isAuthenticated, guardarVenta);
router.post("/ventas/eliminar/:id", isAuthenticated, eliminarVenta);


router.get("/consultas",isAuthenticated,subconsultas);

module.exports = router;
