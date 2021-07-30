import React, { useState,useEffect } from "react";
import "./template2.css";
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
import $ from "jquery";

function Template1(){
      
    

    function phoneview(){                             //for navbar
    console.log("sdsjfhjf");
    $('.Temp1navItem').toggleClass("show");
    }
    //states
    const[load,setLoad]=useState(true)
    const [data,setData]=useState();
    const id="60c4f510f975641cb4ab4866"; //to be fetched from url..
    useEffect(()=>{
        async function fetchData(){
        const response=await fetch("http://localhost:5000/portfolios/portfolio.me",{
            method:"GET",
            headers:{
            "Content-Type":"application/json",
            "portfolio_id":id
         }
        })
        
        const realdata=await response.json();
        console.log(realdata[0])
        setData(realdata[0])
        if(data!==null){
        setTimeout(()=>{
        setLoad(false)
        },1000)
    }

     }
    // fetchData();
    
       
    },[])

    return (
        
      
        <div className="temp1outer">
            {load?<h1>Loading...</h1>:
            <div className="temp1Inner">
                <div className="temp1head canvasBox">                 
                <nav className="temp1nav" >
                    <ul >
    <li class="Temp1Logo">Sonia</li>
                        <li className="Temp1navItem"> <a href="#t1head">About</a></li>
                        <li className="Temp1navItem"> <a href="#t1skill">Skills</a></li>
                        <li className="Temp1navItem"> <a href="#t1project">Projects</a></li>
                        <li className="Temp1navItem"> <a href="#t1experience">Experience</a></li>
                        <li className="Temp1navItem"> <a href="#t1contact">Contact</a></li>
                        <li className="menuIcon" onClick={phoneview}><a href="#"><MenuIcon/></a></li>
                    </ul>
                </nav>
                <div class="temp1main" id="t1head">
                    <div class="contentdiv">
    <h1>{data.name}</h1>
                        <div className="aboutcontent">{data.about}</div>
                        <div className="hireme">Hire Me!</div>
                    </div>
                    <div class="photodiv">   
                    <div class="squareframe"> 
                    <div class="bluesquare"></div>
                    <div class="rwhitesquare"></div>
                    <div class="lwhitesquare"></div>
                    <div class="greensquare"></div>
                    <div class="imgholder">
                     <img src="https://drive.google.com/uc?export=view&id=1SKXpCCo4OANHOlBcXNJyyPuLcNRQGIWq" />
                    </div>
                  </div>
                </div>
                </div>
                </div>

                <div className="temp1skill" id="t1skill"> 
                <div className="skilldiv">
                <div className="skilltag">Skills</div> 
                <div className="Grid-div">
                <div className="Grid">
                    {data.skills[0].split(',').map((item,index)=>
                    <div className="Grid-item">
                        <h1>{item}</h1>
                    </div>
                    )}
                    
                    </div>
                    </div>
                 </div>
                                
                </div>

                <div className="temp1proj" id="t1project"> 
        
                <div className="projdiv">
                <div className="projtag">Projects</div> 
                      

                <div className="proj-Grid-div">
                <div className="proj-Grid">
                    {data.projects.map((item,index)=>
                                    <div className="proj-card">
                        <div className="proj-card-img-container">
                        
                        </div>
                        <div className="proj-card-content">
                        
                         <h1>{item.title}</h1>
                        <p className="proj-excerpt">{item.description}</p>
                        
                        </div>
                    </div>
                    )}
                   
                    
                    </div>
                </div>
                
               
                 </div>

                </div>

                <div className="temp1experience" id="t1experience">            
                    <div className="expdiv">
                    <div className="exptag">Experience</div>

                    <div className="container">

   
                    {
                   data.experience.map((item,index)=>{                     
                         return(
                        <div className={`timeline-block timeline-block-${index%2==0?`right`:`left`}`}>
                            <div className="marker"></div>
                            <div className="timeline-content">
                         <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>)
                    
                   })}
                        </div>
                        </div>
                
                </div>

                <div className="temp1foot" id="t1contact"> 
                  <div className="contactIcons">
                  <PhoneIcon className="footIcon"></PhoneIcon>
                  <LinkedInIcon className="footIcon"><a href={data.social_links.linkedIn}></a></LinkedInIcon>
                  <GitHubIcon className="footIcon"><a href={data.social_links.github}></a></GitHubIcon>
                  <MailOutlineIcon className="footIcon"></MailOutlineIcon>
                  </div>
                  <div className="copyright"> ©Copyright SoniaVerma.com</div>
                </div>
            </div>}
                </div>
    )

}

export default Template1;