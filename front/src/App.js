import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import Paginado from './component/paginado/paginado';
// import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import Home from './component/Home/Home';
import LandingPage from './component/LandingPage/Landing';
import { CreateActivity } from './component/CreateActivity/createActivity';
import CountryDetail from './component/details/details'; 
function App(){


  return (           

    <Router>
      <div className="App">
      <Routes>
          <Route exact path="/" element={ <LandingPage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/activity" element={<CreateActivity/>} />
          <Route path="/countries/:id" element={<CountryDetail/>} />


          {/* <Route path="" element = {<details/>} /> */}
          
      </Routes>
      </div>
    </Router>   

  );
  // return (
  //   <div className='App'>
  //     <h1>
  //       Countries App
  //     </h1> 
  //     <Paginado/>
  //     <LandingPage/>
  //     <Home/>
     
  //   </div>
  // )
}
export default App;



// import React, { useEffect , useState}from 'react';
// import { connect } from 'react-redux';
// import Home from './component/Home/Home'; 
// import {Switch} from 'react-router-dom';
// //import Country from './component/Country/Country';
// // import './App.css';
// // import NavBar from './component/NavBar';
// import { getCountries } from './redux/acciones'; 
// import Countries from './component/Countries/Countries';

// function App() {
//   //{traerpaises}
//   // const datoBd = "http://localhost:3001/countries";
//   // const [country, setCountry] = useState();
//   // const fetchApi = async () =>{
//   //   const response = await fetch (datoBd)
//   //   console.log(response.status);
//   //   const responseJSON = await response.json();
//   //   setCountry (responseJSON); 
//   //   console.log(responseJSON);

//   // }
//   // useEffect(()=>{
//   //   traerpaises(); 
//   // }, [])
//   return (
//     <div className='App'>

//       Hola Mundo
      
//       <hr/>
//       <Home/>
//      </div>
//   )
 
// //   }
// //   const mapDispatchToProps = (dispatch) =>{
// //     return {
// //         traerpaises : () => dispatch(getCountries)
// //     }
// // }


// export default App;
// // export default connect(null, mapDispatchToProps) (App)
