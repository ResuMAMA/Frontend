import React ,{useState, useEffect} from 'react'
import './form.css'
import SkillForm from '../addSkill/addSkillForm';
import ExperienceForm from '../addExp/addExpForm';
import ProjectForm from '../addProj/addProjForm';
import Validate from '../../../Validate'
function DetailsForm(){

useEffect(()=>{
     Validate();
})


const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [mob,setMob]=useState("");
const [linkedIn,setLinkedIn]=useState("");
const [github,setGithub]=useState("");
const [about,setAbout]=useState("");
const [experiences, setExp] = useState([]);
const [projects, setProj] = useState([]);
const [skills, setSkill] = useState([]);

const user_id=localStorage.getItem("userId");
const token=localStorage.getItem("token");

async function handleSubmit(){
  // e.preventDefault();

   const portfolio={
       user_id:user_id,
       name:name,
       email:email,
       mobile:mob,
       about:about,
       social_links:{
           linkedIn:linkedIn,
           github:github
       },
       skills:skills,
       experiences:experiences,
       projects:projects

   }
   const response=await fetch("http://localhost:8080/portfolios/create_new",{
    method:"POST",
    headers:{
    "Content-Type":"application/json",
    "authorization":`Bearer ${token}`
   },
body:JSON.stringify(
    portfolio
    )
})
   console.log(response)   
}

return(
    <div className="maindiv">
        <h2>Basic Details</h2>
        <label>Name</label>
        <input onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>

        <label>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>

        <label>Contact No.</label>
        <input onChange={(e)=>setMob(e.target.value)}></input><br></br><br></br>
        
        <label>LinkedIn Url</label>
        <input onChange={(e)=>setLinkedIn(e.target.value)}></input><br></br><br></br>
        
        <label>Github Url</label>
        <input onChange={(e)=>setGithub(e.target.value)}></input><br></br><br></br>

        <SkillForm skills={skills} setSkill={setSkill}/>
        <ExperienceForm experiences={experiences} setExp={setExp}/>
        <ProjectForm projects={projects} setProj={setProj}/>
         <button onClick={handleSubmit}>show</button>
           <h2>About</h2>
            <textarea placeholder="enter something abount you!" onChange={(e)=>setAbout(e.target.value)}></textarea>
            
            
            
   
  
    </div>
)

}
export default DetailsForm