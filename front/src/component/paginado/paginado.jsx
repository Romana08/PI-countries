/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./paginado.css"

export default function Paginado ({countriesForPage, todosLosPaises, paginado}) {
    let pagNum = []

    for(let i = 0;  i<=Math.ceil(todosLosPaises / countriesForPage); i++){
        pagNum.push(i+1)
    }
    return (
        <nav className="barraNav">
            <div className= "container">
            <ul className="paginado">
                {pagNum && pagNum.map( (number) => (
                    <ul className="number" key= {number}>
                    <a href= "#/" onClick={()=> paginado(number)}>{number}</a>
                    </ul>
                ))}
            </ul>
            </div>
        </nav>
    )
}