module.exports = {
  obtener: (conexion, funcion) => {
    conexion.query("SELECT  * FROM categoria", funcion);
  },
  insertar: (conexion, dato, funcion) => {
    conexion.query(
      "INSERT INTO categoria (id,nombre) VALUES (?,?) ",
      [null, dato.nombre],
      funcion
    );
  },
  retornarDatosId: (conexion, id, funcion) => {
    conexion.query("SELECT * FROM categoria WHERE id=?", [id], funcion);
  },

  borrar: (conexion, id, funcion) => {
    conexion.query("DELETE  FROM categoria WHERE id=?", [id], funcion);
  },

  actualizar: (conexion, dato, funcion) => {
    conexion.query(
      "UPDATE categoria SET nombre=? WHERE id=?",
      [dato.nombre, dato.id],
      funcion
    );
  },
};
