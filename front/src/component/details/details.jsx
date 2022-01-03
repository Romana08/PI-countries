import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getCountriesDetail} from '../../redux/acciones';
import { useEffect } from "react";
import './details.css';

export default function CountryDetail(){
    const dispatch = useDispatch()
    const { id } = useParams()

    console.log("___________________id_________", id);

    useEffect (() =>{
        dispatch(getCountriesDetail(id));
        
    },[dispatch, id])

    const myDetails = useSelector ((state) => state.detail)
    console.log("333333333333333333333333", myDetails.activities, "333333333333333333333333");


    return (
        
        <div className="fondo">
               <p>Cargando...</p>
            <Link to= "/home">
                <button>Volver</button>
            </Link>
        
                 <div className="boxx">
                 {/* {myDetails.name} */}
                    <h3>({myDetails.id}) </h3>
                    <img src = {myDetails.flag} alt="image_flag" className="image" width="180px" height="100px"/>
                    <h4><b>Capital:</b>{myDetails.capital} </h4>
                    <h4><b>Continente:</b> {myDetails.region}</h4>
                    <h4><b>Subregion:</b> {myDetails.subregion ? ' ' + myDetails.subregion : '---'} </h4>
                    <h4><b>Población:</b> {myDetails.population} habitantes </h4>
                    <h4><b>Área:</b> {myDetails.area} km2 </h4>
                    <h4><b>Actvidad Turistica:</b></h4>
                        {myDetails.activities &&
                    myDetails.activities.map(el => (
                        <p key ={el.id}>
                            <li>Nombre : {el.name}</li>
                            <li>Season : {el.season}</li>
                            <li>Duracion : {el.duration}</li>
                            <li>Dificultad : {el.difficulty}</li>
                        </p>
                    ))
                } <p> Lo siento! 
                    No se encuentran cargadas
                     Actividades en este País</p>
                </div> 

        
     
        </div>
    )

 }