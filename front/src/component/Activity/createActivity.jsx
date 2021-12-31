import { getCountries, postActivity } from '../../redux/acciones'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
  function handleDelete(el){
    setActivities({
      ...activities,
      countries: activities.countries.filter (country => country !== el)
    })

  }

  function handleSelect(e) {
    setActivities({
      ...activities,
      countries: [...activities.countries, e.target.value],
    })
  }

  return (
    <>
      
      <section>
        <form>
          <h2>Agregar actividad</h2>
          <div>
            <label htmlFor="name">Nombre de la Actividad: </label>
            <input
              onChange={handleChange}
              value={activities.name}
              name="name"
              type="text"
              placeholder="Agregue el nombre..."
            ></input>
            <br></br>
          </div>

          <div>
            <label htmlFor="season">Temporadad de Actividad: </label>
            <select
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

          <div>
            <label>Tiempo de Duración: </label>
            <input
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

          <div>
            <label onChange={handleChange}>Actividad por País: </label>
            <select
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
              <option value="All">Choose Activity Countries</option>

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
              {activities.countries.map(c => `${c} ✅`)}
            </li>
          </ul>
          <div>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <button>Back to Home</button>
            </Link>
            {error.name || error.season ? (
              <span>Se ha detectado un error</span>
            ) : null}
            <button onClick={handleSubmit}>Agregar Actividad</button>
          </div>
        </form>
            {activities.countries.map(el=>
              <div>
                <p>{el}</p>
                <button onClick= {() => handleDelete }>x</button>
              </div>)}


      </section>
    </>
  )
}



