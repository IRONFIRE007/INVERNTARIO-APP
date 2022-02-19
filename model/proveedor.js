module.exports = {
  obtener: (conexion, funcion) => {
    conexion.query("SELECT * FROM proveedor", funcion);
  },
  insertar: (conexion, dato, funcion) => {
    conexion.query(
      "INSERT INTO proveedor (id,nombre,rut,correo) VALUES (?,?,?,?) ",
      [null, dato.nombre, dato.rut, dato.correo],
      funcion
    );
  },
  retornarDatosId: (conexion, id, funcion) => {
    conexion.query("SELECT * FROM proveedor WHERE id=?", [id], funcion);
  },

  borrar: (conexion, id, funcion) => {
    conexion.query("DELETE  FROM proveedor WHERE id=?", [id], funcion);
  },

  actualizar: (conexion, dato, funcion) => {
    conexion.query(
      "UPDATE `proveedor` SET `nombre` = ?, `rut` = ?, `correo` = ? WHERE `proveedor`.`id`=?",
      [dato.nombre, dato.rut, dato.correo, dato.id],
      funcion
    );
  },
};
