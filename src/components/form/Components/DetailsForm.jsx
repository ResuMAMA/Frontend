import React from 'react'
import './form.css'
import {List} from '../SkillsTodo/List'
import ExperienceForm from '../addExp/addExpForm';
import '../SkillsTodo/style.css'
function DetailsForm(){
//console.log(ar);
let ar=new Array();
return(
    <div className="maindiv">
        
   
   
    <h2>Basic Details</h2>
        <label>Name</label>
        <input placeholder="enter your name"></input><br></br><br></br>
        
        <label>LinkedIn Url</label>
        <input></input><br></br><br></br>
        
        <label>Github Url</label>
        <input></input><br></br><br></br>

       
        <List ar={ar}/>
        <ExperienceForm />
         
         
      
            <h2>About</h2>
            <textarea placeholder="enter something abount you!"></textarea>
            
            
            <h2>Projects</h2>
   
  
    </div>
)

}
export default DetailsForm