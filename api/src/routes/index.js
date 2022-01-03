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


router.get('/countries/:id', async function (req, res)  {
  console.log( "empieza")
    let { id } = req.params;
    console.log( id)
    // Country.findByPk((idPais, {include: {model: Activities}}))ç
    const countries = await Country.findOne({
      where: {
        id: id.toUpperCase()
      },
      include:[Activity]
    
    });
    console.log( countries)
    res.json(countries);

    });

router.get('/activity', async (req, res, next) => {
  try {
        let allActivity = await Activity.findAll()
        console.log(allActivity)
        res.json(allActivity)
      } catch (error) {
        next(error)
      }
    })

router.post('/activity', async function (req, res){
  const { name, difficulty, duration, season, population, countries } = req.body; 
  console.log( "-------Empieza-----")
try {
   const actividad = await Activity.create({
    name, difficulty, duration, season, population
  })
  console.log( "-------Parte 1-----")
  let paisOb = await Country.findAll({
    where:{
      id: countries 
    }
  })
  // paisOb = paisOb[0].dataValues
  console.log( "-------Parte 2-----")

  await actividad.addCountry(paisOb)
  // paisOb.addActivity(actividad); 
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