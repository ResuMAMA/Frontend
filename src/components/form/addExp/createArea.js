import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
function CreateArea(props) {
  const [exp, setExp] = useState({
    title: "",
    description: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setExp(prevExp => {
      return {
        ...prevExp,
        [name]: value
      };
    });
  }

  function submitExp(event) {
    props.onAdd(exp);
    setExp({
      title: "",
      description: ""
    });
    event.preventDefault();
  }

  return (
    <div class="createArea">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={exp.title}
          placeholder="Title"
        />
        <textarea
          name="description"
          onChange={handleChange}
          value={exp.description}
          placeholder="Description..."
          rows="3"
        />
        <button className="newBtn" onClick={submitExp}><AddIcon /></button>
        {/* <button onClick={submitExp}><AddIcon /></button> */}
      </form>
    </div>
  );
}

export default CreateArea;
