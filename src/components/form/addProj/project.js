import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Project(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1 class="formh1">{props.title}</h1>
      <p>{props.desc}</p>
      <p>{props.img}</p>
      <button onClick={handleClick}><DeleteIcon className="deleteIcon" /></button>
    </div>
  );
}

export default Project;
