id INTEGER PRIMARY KEY,
 imagen VARBINARY (MAX),     
--create table 
CREATE TABLE paises(
    id INTEGER PRIMARY KEY,
    nombre VARCHAR (25),
    continente VARCHAR (25) NOT NULL,
    capital VARCHAR (25) NOT NULL,
    población FLOAT
);

CREATE TABLE actividad(
    id INTEGER PRIMARY KEY,
    nombre VARCHAR (10),
    dificultad VARCHAR (255),
    duración VARCHAR(200),
    temporada VARCHAR(25)

);