import React, { useState } from "react";
import "./addExp.css";
import Experience from "./experience";
import CreateArea from "./createArea";

function ExperienceForm({experiences,setExp}) {
 // const [experiences, setExp] = useState([]);

  async function addExp(newExp) {
   
    await setExp(prevExps => {
      return [...prevExps, newExp];
    });
   // console.log(experiences)
  }

  function deleteExp(id) {
    setExp(prevExps => {
      return prevExps.filter((expItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <h1>Add Experience</h1>
       
      <div className="main_div">
        
        <div >
       
          <br />

      <CreateArea onAdd={addExp} />
      {experiences.map((expItem, index) => {
        return (
          <Experience
            key={index}
            id={index}
            title={expItem.title}
            desc={expItem.description}
            onDelete={deleteExp}
          />
        );
      })}
      </div>
      </div>
     </div>
  );
}

export default ExperienceForm;
