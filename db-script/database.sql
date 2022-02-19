CREATE TABLE usuarios (
  id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  nombreUsuario VARCHAR(255)  NOT NULL  ,
  correo VARCHAR(255)  NOT NULL  ,
  contrasenia VARCHAR(255)  NOT NULL    ,
PRIMARY KEY(id));



CREATE TABLE proveedor (
  id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  nombre VARCHAR(255)  NOT NULL  ,
  rut VARCHAR(255)  NOT NULL  ,
  correo VARCHAR(255)  NOT NULL    ,
PRIMARY KEY(id));



CREATE TABLE categoria (
  id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  nombre VARCHAR(255)  NOT NULL    ,
PRIMARY KEY(id));



CREATE TABLE clientes (
  id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  nombre VARCHAR(255)  NOT NULL  ,
  apellido VARCHAR(255)  NOT NULL  ,
  telefono VARCHAR(13)  NOT NULL    ,
PRIMARY KEY(id));



CREATE TABLE producto (
  id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  proveedor_id INTEGER UNSIGNED  NOT NULL  ,
  categoria_id INTEGER UNSIGNED  NOT NULL  ,
  nombre VARCHAR(45)  NOT NULL  ,
  descripcion TEXT  NOT NULL  ,
  precio FLOAT  NOT NULL    ,
PRIMARY KEY(id)  ,
INDEX producto_FKIndex1(categoria_id)  ,
INDEX producto_FKIndex2(proveedor_id),
  FOREIGN KEY(categoria_id)
    REFERENCES categoria(id)
      ON DELETE RESTRICT
      ON UPDATE CASCADE,
  FOREIGN KEY(proveedor_id)
    REFERENCES proveedor(id)
      ON DELETE RESTRICT
      ON UPDATE CASCADE);



CREATE TABLE venta (
  id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  clientes_id INTEGER UNSIGNED  NOT NULL  ,
  producto_id INTEGER UNSIGNED  NOT NULL  ,
  cantidad INTEGER UNSIGNED  NOT NULL  ,
  descripcion VARCHAR(255)  NOT NULL  ,
  fecha DATETIME  NOT NULL    ,
PRIMARY KEY(id, clientes_id, producto_id)  ,
INDEX cliente_has_producto_FKIndex1(clientes_id)  ,
INDEX cliente_has_producto_FKIndex2(producto_id),
  FOREIGN KEY(clientes_id)
    REFERENCES clientes(id)
      ON DELETE RESTRICT
      ON UPDATE CASCADE,
  FOREIGN KEY(producto_id)
    REFERENCES producto(id)
      ON DELETE RESTRICT
      ON UPDATE CASCADE);




