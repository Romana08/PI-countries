import React, { Fragment } from "react";
import { useEffect, useState  } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, filterCountriesByRegion, filterCreated , getActivities} from "../../redux/acciones";
import Country from "../Country/Country";
import SearchBar from '../SearchBar/SearchBar';
import Paginado from "../paginado/paginado";

export default function Home(){
    const dispatch = useDispatch()
    const todosLosPaises = useSelector ((state)=> state.countries)
    const activities = useSelector ((state)=> state.activities)

    //creo estados locales. 1º un estado con la pag actual y un stado que me setee esa pag- seteo en 1
    const [currentPage, setCurrentPage] = useState(1)
    //paises por pag, que setee los paises xpag
    const [countriesForPage, setCountriesForPage ] = useState (10)
    //indice del ultimo pais / 
    const indexOfLastCountries = currentPage * countriesForPage //10
    //indice del 1º pais
    const indexOffirestCountries = indexOfLastCountries - countriesForPage //
    //paises de la pag actual = corto el array de todos los paises con el slice
    const currentCountries = todosLosPaises.slice(indexOffirestCountries, indexOfLastCountries)

    const paginado = (NumPag) =>{
        setCurrentPage(NumPag)
    }

    useEffect (() =>{
        dispatch(getCountries());
        dispatch(getActivities())
    }, [dispatch])
//funcion del boton "volver"
    function handlerClick (e){
      e.preventDefault();
      dispatch(getCountries())
   }
    function handleFilterRegion(e) {
        dispatch (filterCountriesByRegion(e.target.value))
    }
   
    ////////////////////
    // function handlerClickAct (e){
    //     e.preventDefault();
    //     dispatch(getActivities())
    //  }


    function handleFilterActivities(e){
        dispatch (filterCreated(e.target.value))
    }

   
    return (
        <div>
            <Link to= '/countries'>Ingrese el País</Link>
            <h1> Mi App Countries</h1>
            <button onClick={handlerClick}>
                volver a cargar todos los Paises
            </button>
            <div> 
                <select>
                    <option value = "asc">Ascendent</option>
                    <option value = "des">Descendent</option>
                </select>
                <select  onChange = {e => handleFilterRegion(e)}>
                    <option value = "region">Todos los Continentes</option>
                    <option value = "Americas">America</option>
                    <option value = "Asia"> Asia</option>
                    <option value = "Europe"> Europa</option>
                    <option value = "Africa"> Africa</option>
                    <option value = "Oceania"> Oceania</option>
                    <option value = "Antarctic"> Antarctic</option>
                </select>
                {/* //onClick={handlerClickAct} */}
                <button>
                Actividades Paises
            </button>
                <select onChange = {e => handleFilterActivities(e)}> 
                    {
                        activities.map(e => <option value = {e.name} key ={e.id} >{e.name} </option>)
                    }
                    
                </select>
                <Paginado
                countriesForPage = {countriesForPage}
                todosLosPaises={todosLosPaises.length}
                paginado={paginado}/>

             <SearchBar/>

                { currentCountries &&
       currentCountries.map((el) => {
            return(
                <Fragment>
                    <Country name= {el.name} flag={el.flag} region= {el.region} />
                 </Fragment>
            )
            })
        }
        </div>
            </div>
    )
}