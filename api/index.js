//                       oo0oo
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    _/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  _/-. /
//             _'. .'  /--.--\  `. .'_
//          ."" '<  `._\_<|>/__.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `.   \ _\ /_ _/   .-` /  /
//     =====`-._`._ \_/_.-`__.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const { Country } = require('./src/db.js');

const preloader = async () => {
  try {
    const countries = await axios.get('https://restcountries.com/v3/all');

    for (let country of countries.data) {

      let {cca3, name, flags, capital, region, subregion, area} = country;
      let [countryRes, created] = await Country.findOrCreate({
        where: {
          id: cca3,
        },
        defaults: {
          name: name.official,
          flag: flags ? flags[0] : null,
          region: region, 
          subregion: subregion? subregion : null, 
          capital: capital ? capital[0] : null,
          area,
        }  
      });
    }
  }
  catch (err) {
    console.error(err);
  }  
}


conn.sync({ force: true })
.then(() => {
  preloader();
  server.listen(3001, () => {
    console.log('%s listening at 3001');
  });
});


module.exports = {preloader};