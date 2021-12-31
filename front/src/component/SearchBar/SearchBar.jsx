import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getCountriesName} from '../../redux/acciones';

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name , setName] = useState("")

function handleInputChange(e){
    setName(e.target.value)
    console.log(name)
}
function handleOnClick(e){
    dispatch(getCountriesName(name))
}

return(
    <div>
        <input 
        type = "text"
        placeholder="Ingrese nombre del Pais..."
        onChange={(e) => handleInputChange(e) }
        />
        <button onClick = {(e) => handleOnClick(e)}>Buscar</button>
    </div>
)
}