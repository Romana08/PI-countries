import React, { useEffect, useState } from "react";
import { getCountries, postActivity } from "../../redux/acciones";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

function validate(activities) {
  let error = {}
  if (!activities.name) {
    error.name = 'Name is required'
  }
  if (!activities.difficulty) {
    error.difficulty = 'Difficulty is required'
  }
  // if (!activities.duration) {
  //   error.duration = 'Duration is required'
  // }
  if (!activities.season) {
    error.season = 'Season is required'
  }
  if (!activities.countries) {
    error.countries = 'Country is required'
  }
  if (/^([0-9])*$/.test(activities.name)) {
    error.name = 'Error Name'
  }
  return error
}
//-----------------------------------------------------------

export function CreateActivity() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [activities, setActivities] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(getCountries());
  },[dispatch]);

//---------------------------------------------------------
  function handleSubmit(e) {
    e.preventDefault()
   setError(validate(error))
   if(Object.keys(error).length !== 0){
     alert("Debe llenar todos los campos")
   } else {
   dispatch(postActivity(activities))
    setActivities({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    })
           alert('Su actividad se agregó correctamente') 
             setError(
        validate({
      ...activities,
      [e.target.name] : e.target.value,
    }))
  }
}

  //creo una funcion que me vá a guardar lo que usuario le pase por los input
  function handleChange(e) {
    setActivities({
      ...activities,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...activities,
        [e.target.name]: e.target.value,
      })
    );
  }
//---------------------------------------------------------
  // const [country, setCountry] = useState([]);

  function handleDelete(id) {
    setActivities({
      ...activities,
      countries: activities.countries.filter((el) => el !== id),
    });
  }
//---------------------------------------------------------
  function handleSelect(e) {
    setActivities({
      ...activities,
      countries: [...activities.countries, e.target.value],
    });
  }

  return (
    <div className="head">
      <section>
        <div className="entorno">
        <form onSubmit={e => handleSubmit(e)}>
            <h2>Agregar actividad</h2>
            <div className="form" >
              <label htmlFor="name">Nombre de la Actividad: </label>
              <input
                className="botForm"
                onChange={(e) => handleChange(e)}
                value={activities.name}
                name="name"
                type="text"
                placeholder="Agregue el nombre..."
              ></input>
              {error.name && <p className="error">{error.name}</p>}
              {/* <br></br> */}
            </div>

            <div className="season">
              <label htmlFor="season">Temporadad de Actividad: </label>
              <select
                className="botForm"
                onChange={(e) => handleChange(e)}     
                key={activities.season}
                // value={activity.season}
                id="season"
                // type="text"
                name="season"
                required="required"
              >
                <option value="">Escoja la temporada</option>
                <option value="Summer">Verano</option>
                <option value="Autumn">Otoño</option>
                <option value="Winter">Invierno</option>
                <option value="Spring">Primavera</option>
              </select>
              <br></br>
            </div>

            <div className="duration">
              <label>Tiempo de Duración: </label>
              <input
                className="botForm"
                onChange={(e) => handleChange(e)}
                value={activities.duration}
                id="duration"
                type="text"
                name="duration"
                placeholder="tiempo en min"
                required="required"
              ></input>
              <br></br>
              {error.duration && <p className="error">{error.duration}</p>}
            </div>

            <div>
              <label htmlFor="difficulty">Nivel de dificultad </label>
              <select onChange={(e) => handleChange(e)} className="botForm" key={activities.difficulty} id="difficulty"
                type="text" name="difficulty" required="required"
              >
                <option value="">Escoga un Nivel</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br></br>
            </div>

            <div className="Act_Coun">
              <label onChange={handleChange}>
                Asigne el País a la Actividad:{" "}
              </label>
              <select
                // className="botForm"
                onChange={(e) => handleSelect(e)}
                key={activities.countries}
                // value={activity.countries}
                id="countries"
                type="text"
                name="countries"
                placeholder="Agregue su actividad"
                required="required"
              >
                <option value="All">Escoja un País</option>

                {countries.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <br></br>
            </div>
            {/* <ul>
              <li>{activities.countries.map((c) => `${c} 🚩`)}</li>
            </ul> */}
            <div>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <button className="botForm">Back to Home</button>
              </Link>
              {/* {error.name || error.season ? (
                <span>Se ha detectado un error</span>
              ) : null} */}
              <button onClick={handleSubmit} className="botForm">
                Agregar Actividad
              </button>
            </div>

            {activities.countries.map((el) => (
              // este map me vá a renderiza los paises seleccionados
              <div className="country">
                <p>{el}</p>
                <button onClick={() => handleDelete(el)}>x</button>
              </div>
            ))}
          </form>
        </div>
      </section>
    </div>
  );
}
