import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  
  function onFindPets(e) {
    e.preventDefault()
    onChangeType(e.target.value)

  }
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" onChange={(e) => onFindPets(e)}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={onFindPetsClick}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
