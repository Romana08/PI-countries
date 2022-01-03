import React, { useEffect, useState } from 'react'
import { getCountries, postActivity } from '../../redux/acciones'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './style.css';

export function CreateActivity() {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  const [activities, setActivities] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: [],
  })
  const [error, setError] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: [],
  })

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  function handleSubmit(e) {
    console.log(activities);
    dispatch(postActivity(activities))
    setActivities(
        { name: '',  difficulty: '', duration: '', season: '', countries: [],}
    )
        alert('Su actividad se agregó correctamente')
  }
  function handleChange(e) {
    let name = e.target.name
    let value = e.target.value
    if (value === '') {
      setError({ ...error, [name]: 'No se admite campo vacio' })
    }
     else if (
         (name === 'name' || name === 'season') && /\d/.test(value)) 
    {setError({ ...error, [name]: 'Solo se admiten letras' }
    )
    } else if (
        name !== 'season' && name !== 'name' && isNaN(value))
      setError(
          { ...error, [name]: 'Solo se admiten numeros' })
    setActivities({
      ...activities,
      [e.target.name]: e.target.value,
    })
  }

  const [country, setCountry] = useState([]);

  function handleDelete(id){
    setActivities({
      ...activities,
      countries: activities.countries.filter (el => el !== id)
    })
    let filtered = country.filter(el => el.id !== id);
        setCountry(filtered);
  }

  function handleSelect(e) {
    setActivities({
      ...activities,
      countries: [...activities.countries, e.target.value],
    })
  }

  return (

    <div className='head'>
      <section>
        <div className='entorno'>
        <form>
          <h2>Agregar actividad</h2>
          <div className='form'>
            <label htmlFor="name">Nombre de la Actividad: </label>
            <input
              className='botForm'
              onChange={handleChange}
              value={activities.name}
              name="name"
              type="text"
              placeholder="Agregue el nombre..."
            ></input>
            <br></br>
          </div>

          <div className='season'>
            <label htmlFor="season">Temporadad de Actividad: </label>
            <select
            className='botForm'
              onChange={handleChange}
              key={activities.season}
              // value={activity.season}
              id="season"
              type="text"
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

          <div className='duration'>
            <label>Tiempo de Duración: </label>
            <input
            className='botForm'
              onChange={handleChange}
              value={activities.duration}
              id="duration"
              type="text"
              name="duration"
              placeholder="tiempo en min"
              required="required"
            ></input>
            <br></br>
          </div>

          <div>
            <label htmlFor="difficulty">Nivel de dificultad </label>
            <select
            className='botForm'
              onChange={handleChange}
              key={activities.difficulty}
              // value={activity.difficulty}
              id="difficulty"
              type="text"
              name="difficulty"
              required="required"
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

          <div className='Act_Coun'>
            <label onChange={handleChange}>Actividad por País: </label>
            <select
            className='botForm'
              onChange={handleSelect}
              key={activities.countries}
              // value={activity.countries}
              id="countries"
              type="text"
              name="countries"
              placeholder="Agregue su actividad"
              required="required"
            >
              {console.log(countries)}
              <option value="All">Escoja un País</option>

              {countries.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <br></br>
          </div>
          <ul>
            <li>
              {activities.countries.map(c => `${c} 🚩`)}
            </li>
          </ul>
          <div>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <button className='botForm'>Back to Home</button>
            </Link>
            {error.name || error.season ? (
              <span>Se ha detectado un error</span>
            ) : null}
            <button onClick={handleSubmit} className='botForm'>Agregar Actividad</button>
          </div>
       
            {activities.countries.map(el=>
              <div className='country'>
                <p>{el} {el.flag}</p>
                <img  src={el.flag} alt="flag" />
                <button onClick= {() => handleDelete(el.id) }>x</button>
              
              </div>
              )}
        </form>
              </div>
      </section>
   
      
    </div>
  )
}



