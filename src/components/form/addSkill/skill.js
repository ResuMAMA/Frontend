import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Skill(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.skill}</h1>
      <button onClick={handleClick}><DeleteIcon className="deleteIcon" /></button>
    </div>
  );
}

export default Skill;
