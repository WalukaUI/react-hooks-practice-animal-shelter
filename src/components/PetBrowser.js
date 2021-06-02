import React from "react";
import Pet from "./Pet";

function PetBrowser({pets,onAdoptPet}) {
  function setGender(Gender){
    return Gender==="male"?"♂":"♀"
  }
  const populatePets=pets.map((e)=>{
  return <Pet key={e.id} 
  Id={e.id} 
  Type={e.type} 
  Gender={e.gender} 
  Age={e.age} 
  Weight={e.weight} 
  Name={e.name} 
  setGender={setGender}
  Isadapted={e.isAdopted}
  onAdoptPet={onAdoptPet}
  />
  })

  
  return <div className="ui cards">{populatePets}</div>;
}

export default PetBrowser;
