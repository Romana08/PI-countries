
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getCountriesDetail} from '../../redux/acciones';
import { useEffect } from "react";

export default function CountryDetail(){
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect (() =>{
        dispatch(getCountriesDetail(id));
        
    },[dispatch, id])

    const myDetails = useSelector ((state) => state.detail)


    return (
        <div>
       
          
                <div>
                    <h3> {myDetails.name}({myDetails.id})</h3>
                    <img src = {myDetails.flag} alt="image_flag"/>
                    <h4><b>Capital:</b>{myDetails.capital} </h4>
                    <h4><b>Continente:</b> {myDetails.region}</h4>
                    <h4><b>Subregion:</b>{myDetails.subregion ? ' ' + myDetails.subregion : '---'} </h4>
                    <h4><b>Área:</b>{myDetails.area} km2 </h4>
                    <h4><b>Actvidad Turistica:</b></h4>
        
                
                    {
                    myDetails.activities.map(el => (
                        <p key ={el.id}>
                            <li>Nombre : {el.name}</li>
                            <li>Season : {el.season}</li>
                            <li>Duracion : {el.duration}</li>
                            <li>Dificultad : {el.difficulty}</li>
                        </p>
                    ))} 
                </div> : <p>Cargando...</p>
            <Link to= "/home">
                <button>Volver</button>
            </Link>

        </div>
    )

}