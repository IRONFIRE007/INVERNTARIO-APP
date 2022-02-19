module.exports = {
  obtener: (conexion, funcion) => {
    conexion.query("SELECT * from clientes", funcion);
  },
  insertar: (conexion, dato, funcion) => {
    conexion.query(
      "INSERT INTO clientes (id,nombre,apellido,telefono) VALUES (?,?,?,?) ",
      [null, dato.nombre, dato.apellido, dato.telefono],
      funcion
    );
  },
  retornarDatosId: (conexion, id, funcion) => {
    conexion.query("SELECT * FROM clientes WHERE id=?", [id], funcion);
  },

  borrar: (conexion, id, funcion) => {
    conexion.query("DELETE  FROM clientes WHERE id=?", [id], funcion);
  },

  actualizar: (conexion, dato, funcion) => {
    conexion.query(
      "UPDATE `clientes` SET `nombre` =?, `apellido` =?, `telefono` =? WHERE `clientes`.`id`=?",
      [dato.nombre, dato.apellido, dato.telefono, dato.id],
      funcion
    );
  },
};
