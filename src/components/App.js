import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  
  
  const URL='http://localhost:3001/pets'
  function onChangeType(type){
    setFilters({ type: type })
  }

  function fetchOnClick(){
     const newUrl=filters.type!=="all"?`${URL}?type=${filters.type}`:URL 
    setPets([])
    fetch(newUrl)
    .then(res=>res.json())
    .then(j=>setPets(j))
  }
  function isAdaptChange(Id){
   const filterPet=pets.map((e)=>{
    return e.id===Id?{...e,isAdopted: true }:e})
   setPets(filterPet)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={fetchOnClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser  pets={pets} onAdoptPet={isAdaptChange}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
