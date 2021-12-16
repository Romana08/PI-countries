const { Router } = require('express');
const { Country, conn, Activity } = require ('../db');
const { Op } = require("sequelize");

const router = Router();

router.get('/countries', async function(req, res, next) {
  const {name} = req.query; 
  if(!name){
    const countries = await Country.findAll();
    res.json(countries)
  } 
  const allCountries = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`
      }
    }
  })
  res.json(allCountries);
});


router.get('/countries/:idPais', async function (req, res)  {
  console.log( "empieza")
    let { idPais } = req.params;
    console.log( idPais)
    // Country.findByPk((idPais, {include: {model: Activities}}))ç
    const countries = await Country.findOne({
      where: {
        id: idPais.toUpperCase()
      },
      include:[Activity]
    
    });
    console.log( countries)
    res.json(countries);

    });

router.post('/activity', async function (req, res){
  const { id, name, dificultad, duracion, temporada, Pais } = req.body; 
  console.log( "-------Empieza-----")
try {
   const actividad = await Activity.create({
    id, name, dificultad, duracion, temporada
  })
  console.log( "-------Parte 1-----")
  let paisOb = await Country.findAll({
    where:{
      id: Pais 
    }
  })
  // paisOb = paisOb[0].dataValues
  console.log( "-------Parte 2-----")
  paisOb.addActivity(actividad); 
   res.json("Actividad guardada")
  console.log("333333333333333333333333333333333")
  return res.status(200).json( "Actividad Guardada", (Activity));
  
  //actividad.addpaisOb(Activity);
  
  
} catch (error) {
  console.log("no funcionoooooo", error);
}
})
// POST:Recibe los datos recolectados desde el formulario
// controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos
// router.post('/activity:$activity$', async (req, res)=>{
// })

module.exports = router;