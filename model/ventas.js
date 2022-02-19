module.exports = {
  obtener: (conexion, funcion) => {
    conexion.query("SELECT  *  FROM venta", funcion);
  },
  insertar: (conexion, dato, funcion) => {
    fecha = new Date();
    conexion.query(
      "INSERT INTO `venta` (`id`, `clientes_id`, `producto_id`, `cantidad`, `descripcion`, `fecha`) VALUES (?,?,?,?,?,?) ",
      [
        null,
        dato.cliente_id,
        dato.producto_id,
        dato.cantidad,
        dato.descripcion,
        fecha,
      ],
      funcion
    );
  },
  retornarDatosId: (conexion, id, funcion) => {
    conexion.query("SELECT * FROM venta WHERE id=?", [id], funcion);
  },

  borrar: (conexion, id, funcion) => {
    conexion.query("DELETE  FROM venta WHERE id=?", [id], funcion);
  },
};
