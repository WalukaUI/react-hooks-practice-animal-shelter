import React from "react";

function Pet({Id,Type,Gender,Age,Weight,Name,setGender,Isadapted,onAdoptPet}) {


  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {Name}{setGender(Gender)}
        </span>
        <div className="meta">
          <span className="date">{Type}</span>
        </div>
        <div className="description">
          <p>Age: {Age}</p>
          <p>Weight: {Weight}</p>
        </div>
      </div>
      <div className="extra content">
      {Isadapted?(<button className="ui disabled button">Already adopted</button>):
        (<button className="ui primary button" onClick={()=>onAdoptPet(Id)}>Adopt pet</button>)}
      </div>
    </div>
  );
}

export default Pet;
