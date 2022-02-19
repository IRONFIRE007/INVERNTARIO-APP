const res = require("express/lib/response");
const bcrypt = require("bcryptjs");

module.exports = {
  insertar: async (conexion) => {
    await conexion.query(
      'SELECT * FROM usuarios WHERE  nombreUsuario = "Admin"',
      async (err, result) => {
        if (result.length === 0) {
          let contrasenia = await bcrypt.hash("innerjoin", 8);

          conexion.query(
            "INSERT INTO `usuarios` (`id`, `nombreUsuario`, `correo`, `contrasenia`) VALUES (NULL, 'Admin', 'AngelicaCuello@gmail.com', ?)",
            contrasenia,
            (err) => {
              if (err) return console.error(err);
            }
          );
        } else {
          return;
        }
      }
    );
  },
};



