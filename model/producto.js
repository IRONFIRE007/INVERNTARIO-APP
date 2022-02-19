module.exports = {
  obtener: (conexion, funcion) => {
    conexion.query("SELECT  *  FROM producto", funcion);
  },
  insertar: (conexion, dato, funcion) => {
    conexion.query(
      "INSERT INTO `producto` (`id`, `proveedor_id`, `categoria_id`, `nombre`, `descripcion`, `precio`) VALUES (?,?,?,?,?,?) ",
      [
        null,
        dato.proveedor,
        dato.categoria,
        dato.nombre,
        dato.descripcion,
        dato.precio,
      ],
      funcion
    );
  },
  retornarDatosId: (conexion, id, funcion) => {
    conexion.query("SELECT * FROM producto WHERE id=?", [id], funcion);
  },

  borrar: (conexion, id, funcion) => {
    conexion.query("DELETE  FROM producto WHERE id=?", [id], funcion);
  },

  actualizar: (conexion, dato, funcion) => {
    conexion.query(
      "UPDATE `producto` SET `proveedor_id` = ?, `categoria_id` = ?, `nombre` = ?, `descripcion` = ?, `precio` = ? WHERE `producto`.`id` = ?",
      [
        dato.proveedor,
        dato.categoria,
        dato.nombre,
        dato.descripcion,
        dato.precio,
        dato.id,
      ],
      funcion
    );
  },
};
