import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
function CreateArea(props) {
  const [skill, setSkill] = useState("");

  function handleChange(event) {
    const { value } = event.target;

    setSkill(value);
  }

  function submitSkill(event) {
    props.onAdd(skill);
    setSkill("");
    event.preventDefault();
  }

  return (
    <div class="createArea">
      <form>
        <input
          name="skill"
          onChange={handleChange}
          value={skill}
          placeholder="Skill"
        />
        <button className="newBtn" onClick={submitSkill}><AddIcon /></button>
        {/* <button onClick={submitExp}><AddIcon /></button> */}
      </form>
    </div>
  );
}

export default CreateArea;
