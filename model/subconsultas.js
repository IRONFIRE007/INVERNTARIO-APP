module.exports = {
    producto: (conexion, funcion) => {
      conexion.query("SELECT * FROM producto WHERE producto.id NOT IN (SELECT producto_id FROM venta)", funcion);
    },

   cliente: (conexion, funcion) => {
        conexion.query("SELECT * FROM clientes WHERE id NOT IN (SELECT clientes_id FROM venta)", funcion);
      },
    
      compra: (conexion, funcion) => {
        conexion.query("SELECT  * from venta WHERE fecha=(SELECT max(fecha) from venta )", funcion);
      }


}