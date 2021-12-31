import React from "react";
 

function Country({ name, flag, region }){
  return (
    <div>
      <div >
        {/* <Link to={`/detail/${id}`}>
          <img src={flag} alt={`Bandera ${name}`} />
        </Link> */}
        <div>
          <h2>{name}</h2>
          <p>Continente : {region}</p>
          <div className="image-container">
          <img src= {flag} alt= {name + "flag"} className="image" width="180px" height="100px"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country; 