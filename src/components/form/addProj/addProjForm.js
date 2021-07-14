import React, { useState } from "react";
import "./addProj.css";
import Project from "./project";
import CreateArea from "./createArea";

function ProjectForm({projects,setProj}) {
   async function addProj(newProj) {
   
    await setProj(prevProjs => {
      return [...prevProjs, newProj];
    });
   
  }

  function deleteProj(id) {
    setProj(prevProjs => {
      return prevProjs.filter((projItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <h1 class="formh1">Add Project</h1>
       
      <div className="main_div">
        
        <div >
       
          <br />

      <CreateArea onAdd={addProj} />
      {projects.map((projItem, index) => {
        return (
          <Project
            key={index}
            id={index}
            title={projItem.title}
            desc={projItem.description}
            img={projItem.img}
            onDelete={deleteProj}
          />
        );
      })}
      </div>
      </div>
     </div>
  );
}

export default ProjectForm;
