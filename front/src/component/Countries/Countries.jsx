import React from "react";
import { useState } from "react";
import {connect} from 'react-redux';


function Countries ({ countries }){
    const [estadoActual , setEstadoActual] = useState([])
    const PaisesXPag = 10
    const paginas = Math.ceil(countries.length / PaisesXPag)


    
return(
    <>
    <div>
        <div>
            <h2> App Countries</h2>
            <button>""</button>
        </div>
    </div>
    
    
    </>
)

}


const mapStateToProps = (state) =>{
    return {
        countries: state.countries
    }
}

export default connect(mapStateToProps, null) (Countries)