import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";

const List = ({ar}) => {
const [item, setItem] = useState("");
const [newitem, setNewItem] = useState([]);
const itemEvent = (event) => {
setItem(event.target.value);
  };

  const listOfItems = () => {
    ar.push(item)
    setNewItem((prevValue) => {
     
      return [...prevValue,item];
});


    setItem("");


  };




  return (
    <div>
    <h1>Skills</h1>
      <div className="main_div">
        
        <div className="center_div">
       
          <br />


          <input type="text" value={item} placeholder="Add Skills" onChange={itemEvent}/><Button className="newBtn" onClick={listOfItems}>


            <AddIcon />   </Button><br /><ol>


            {newitem.map((val, index) => {


              return <ListCom key={index} text={val} ar={ar}/>;


            })}


          </ol>


          <br />


        </div>


      </div>

</div>
    


  );


};



//console.log(ar)
export {List};