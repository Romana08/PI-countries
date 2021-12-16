
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
    Activity = sequelize.define('activity',{
    id:{    
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING , 
    },
    dificultad:{
        type: DataTypes.ENUM,
        values: ["1", "2", "3", "4", "5"],
    },
    duracion:{
        type:DataTypes.DECIMAL,
    },
    temporada:{
        type: DataTypes.ENUM,
        values: ["Verano", "Otoño", "Invierno", "Primavera"],
    },
  });
};