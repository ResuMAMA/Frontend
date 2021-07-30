import React ,{useState, useEffect} from 'react';
import './form.css';
import SkillForm from '../form/addSkill/addSkillForm';
import ExperienceForm from '../form/addExp/addExpForm';
import ProjectForm from '../form/addProj/addProjForm';
import Validate from '../../Validate';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function DetailsForm(){
useEffect(()=>{
     Validate();
     },[])


const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [mob,setMob]=useState("");
const [linkedIn,setLinkedIn]=useState("");
const [github,setGithub]=useState("");
const [about,setAbout]=useState("");
const [experiences, setExp] = useState([]);
const [projects, setProj] = useState([]);
const [skills, setSkill] = useState([]);

const user_id=localStorage.getItem("userid");
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
   console.log(portfolio);
   const response=await fetch("http://localhost:5000/portfolios/create_new",{
    method:"POST",
    headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
    },
body:JSON.stringify(
    portfolio
    )
})
   console.log(response)   
}

return(
   <div class="form-div-external">
   <div class="formdiv-internal">
     <div class="form-main-div">


      <div class="basicdetails">
           
      <h2 class="bline">Basic Details</h2>
        <div class="basicdetailsdiv">
        <input placeholder="Name....."  onChange={(e)=>setName(e.target.value)}></input>
        <input placeholder="Email....." onChange={(e)=>setEmail(e.target.value)}></input>
        <input placeholder="Contact....." onChange={(e)=>setMob(e.target.value)}></input>
        <input placeholder={"LinkedIn....."} onChange={(e)=>setLinkedIn(e.target.value)}></input>
        <input placeholder="Github....." onChange={(e)=>setGithub(e.target.value)}></input>
        
      </div>       

      </div>     
        

      <div class="aboutdetails">
           
           <h2 class="bline">About Yourself</h2>
            <textarea placeholder="About....." onChange={(e)=>setAbout(e.target.value)} rows="5" ></textarea>
           </div>


       

        <SkillForm skills={skills} setSkill={setSkill}/>
        <ProjectForm projects={projects} setProj={setProj}/>
        <ExperienceForm experiences={experiences} setExp={setExp}/>
        
     </div>
        
         
    </div>
    <button onClick={handleSubmit}> submit</button>
    <div class="formfooter">
    Copyright © Resumama
    </div>
   </div> 
    
)

}
export default DetailsForm