import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
function CreateArea(props) {
  const [proj, setProj] = useState({
    title: "",
    description: "" ,
    img: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setProj(prevProj => {
      return {
        ...prevProj,
        [name]: value
      };
    });
  }

  function submitProj(event) {
    props.onAdd(proj);
    setProj({
      title: "",
      description: "" ,
      img: ""
    });
    event.preventDefault();
  }

  return (
    <div class="createArea">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={proj.title}
          placeholder="Title"
        />
        <textarea
          name="description"
          onChange={handleChange}
          value={proj.description}
          placeholder="Description..."
          rows="3"
        />
        <input
          name="img"
          onChange={handleChange}
          value={proj.img}
          placeholder="Image"
        />
        <button className="newBtn" onClick={submitProj}><AddIcon /></button>
        {/* <button onClick={submitExp}><AddIcon /></button> */}
      </form>
    </div>
  );
}

export default CreateArea;
