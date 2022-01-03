
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  County = sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      defaultValue: 'https://upload.wikimedia.org/wikiversity/ru/thumb/1/19/Unknown_flag.svg/1280px-Unknown_flag.svg.png',
    },
    capital: {
      type: DataTypes.STRING,
      defaultValue: 'Unknown',
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    subregion: {
      type: DataTypes.STRING,
      defaultValue: "Subregion no encontrada", 
    },
    area: {
      type: DataTypes.INTEGER,
    }, 
    population : {
      type: DataTypes.INTEGER,
    },   
  }, {
    timestamps: false,
})

};