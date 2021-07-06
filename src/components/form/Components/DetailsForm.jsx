import React ,{useState} from 'react'
import './form.css'
import SkillForm from '../addSkill/addSkillForm';
import ExperienceForm from '../addExp/addExpForm';
import ProjectForm from '../addProj/addProjForm';

function DetailsForm(){
    
const [experiences, setExp] = useState([]);
const [projects, setProj] = useState([]);
const [skills, setSkill] = useState([]);

return(
    <div className="maindiv">
        
   
   
    <h2>Basic Details</h2>
        <label>Name</label>
        <input placeholder="enter your name"></input><br></br><br></br>
        
        <label>LinkedIn Url</label>
        <input></input><br></br><br></br>
        
        <label>Github Url</label>
        <input></input><br></br><br></br>

       
        <SkillForm skills={skills} setSkill={setSkill}/>
        <ExperienceForm experiences={experiences} setExp={setExp}/>
        <ProjectForm projects={projects} setProj={setProj}/>
         <button onClick={(e)=>{console.log(experiences);}}>show</button>
         
      
            <h2>About</h2>
            <textarea placeholder="enter something abount you!"></textarea>
            
            
            
   
  
    </div>
)

}
export default DetailsForm