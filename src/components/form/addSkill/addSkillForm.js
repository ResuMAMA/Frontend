import React, { useState } from "react";
import "./addSkill.css";
import Skill from "./skill";
import CreateArea from "./createArea";

function SkillForm({skills,setSkill}) {
   async function addSkill(newSkill) {
   
    await setSkill(prevSkills => {
      return [...prevSkills, newSkill];
    });
   
  }

  function deleteSkill(id) {
    setSkill(prevSkills => {
      return prevSkills.filter((skillItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <h1>Add Skills</h1>
       
      <div className="main_div">
        
        <div >
       
          <br />

      <CreateArea onAdd={addSkill} />
      {skills.map((skillItem, index) => {
        return (
          <Skill
            key={index}
            id={index}
            skill={skillItem}
            onDelete={deleteSkill}
          />
        );
      })}
      </div>
      </div>
     </div>
  );
}

export default SkillForm;
