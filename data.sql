CREATE DATABASE proyectofinal;

\c proyectofinal

CREATE TABLE "users" (
  id serial PRIMARY KEY,
  nombre varchar(200) NOT NULL,
  apellido varchar(200) NOT NULL,
  rut varchar(150) UNIQUE NOT NULL,
  correo varchar(200) NOT NULL,
  contraseña INT NOT NULL,
  rol varchar(100) NOT NULL
);

CREATE TABLE "products" (
  id serial PRIMARY KEY,
  titulo varchar (200) NOT NULL,
  reseña varchar (200) NOT NULL,
  cantidadpersonas INT NOT NULL,
  valorpaquete INT NOT NULL,
  valorpersona INT NOT NULL,
  fecha varchar(200) NOT NULL,
  duracion varchar(100),
  incluye varchar(250),
  noincluye varchar(250),
  puntoencuentro varchar(200),
  quellevar varchar(250),
  restricciones varchar(250),
  clima varchar(200),
  anulacionreprogramacion varchar(200)
);

SELECT * FROM users
SELECT * FROM products

INSERT INTO "users" 
values  (1, 'Franco', 'Vargas', '11111111-1', 'test@test.cl', '12345', 'admin'),
        (2, 'Gustavo', 'Morales', '2222222-2', 'test@test2,cl', '23456', 'usuario'),
        (3, 'Jorge', 'Molina', '3333333-3', 'test@test3.cl', '34567', 'admin');

INSERT INTO "products"
values  (1, 'Viaje al cajon del Maipo', 'Viaje expedicion', 5, 100000, 25000, '20 de Febrero 2023', '8 horas', 'Incluye equipamiento de escalada', 'No incluye almuerzo', 'Metro plaza puente alto', 'Llevar comida, agua, bloqueador solar', 'Persona asmaticas, discapacitadas', 'Se realiza en cualquier condicion meteorologica', 'Hasta 24 hrs'),
        (2, 'Viaje a cerro nevado', 'Viaje en ski', 10, 500000, 65000, '21 de Marzo 2023', '12 horas', 'incluye equipamiento de ski', 'No incluye almuerzo', 'Metro Escuela Militar', 'Llevar comida, agua y protector solar', 'Menores de edad', 'Se realiza con cualquier condicion meteoroligica', 'Hasta 24 hrs');

