import React from 'react';
import {Link} from 'react-router-dom'; 
import '../LandingPage/LandingPage.css'



export default function LandingPage(){
    return (
        <div className='Landing'>

            <h1 className='saludo'>Bienvenidos</h1>
            <div className='contein'>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <button className='boton'>Ingresar</button>
            </Link>
        </div>
        </div>
    )
}