import React, { useState } from "react";


import DeleteIcon from "@material-ui/icons/Delete";

const ListCom = (props) => {
 const [line, setLine] = useState(false);
 const cutIt = () => {


    setLine(true);
    for (var i = props.ar.length - 1; i >= 0; i--) {
      if (props.ar[i] === props.text) {
       props.ar.splice(i, 1);
      }
     }

  };




  return (


    <div className="todo_style">


      <span onClick={cutIt}>


        <DeleteIcon className="deleteIcon" />


      </span>


      <li style={{ textDecoration: line ? "line-through" : "none" }}>


        {props.text}


      </li>


    </div>


  );


};




export default ListCom;