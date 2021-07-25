import React from "react";
import "./template2.css";
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
import $ from "jquery";

function Template1(){
      
    const arr=[{Title:"first",Des:"jhdgjghjghg"},{Title:"second",Des:"jhdgjghjghg"},{Title:"third",Des:"jhdgjghjghg"},{Title:"fourth",Des:"jhdgjghjghg"}]

    function phoneview(){                             //for navbar
    console.log("sdsjfhjf");
    $('.Temp1navItem').toggleClass("show");
    }

    return (
        <div class="temp1outer">
            <div class="temp1Inner">
                <div class="temp1head canvasBox">                 
                <nav class="temp1nav" >
                    <ul >
                        <li class="Temp1Logo">Sonia</li>
                        <li class="Temp1navItem"> <a href="#t1head">About</a></li>
                        <li class="Temp1navItem"> <a href="#t1skill">Skills</a></li>
                        <li class="Temp1navItem"> <a href="#t1project">Projects</a></li>
                        <li class="Temp1navItem"> <a href="#t1experience">Experience</a></li>
                        <li class="Temp1navItem"> <a href="#t1contact">Contact</a></li>
                        <li class="menuIcon" onClick={phoneview}><a href="#"><MenuIcon/></a></li>
                    </ul>
                </nav>
                <div class="temp1main" id="t1head">
                    <div class="contentdiv">
                        <h1> Sonia Verma Suhasini</h1>
                        <div class="aboutcontent">I am an awesome Swimming Instructor. The ocean is my freedom! 
                        It is a long established fact that a reader will be distracted by the readable content of a 
                        page when looking at its layout. </div>
                        <div class="hireme">Hire Me!</div>
                    </div>
                    <div class="photodiv">   
                    <div class="squareframe"> 
                    <div class="bluesquare"></div>
                    <div class="rwhitesquare"></div>
                    <div class="lwhitesquare"></div>
                    <div class="greensquare"></div>
                    <div class="imgholder">
                     <img src="/img/sonia.jpg" />
                    </div>
                  </div>
                </div>
                </div>
                </div>

                <div class="temp1skill" id="t1skill"> 
                <div class="skilldiv">
                <div class="skilltag">Skills</div> 
                <div class="Grid-div">
                <div class="Grid">
                    <div class="Grid-item">
                        <h1>Javascript</h1>
                    </div>
                    <div class="Grid-item">
                    <h1>Javascript</h1>
                    </div>
                    <div class="Grid-item">
                        <h1>video editting</h1>
                    </div>
                    <div class="Grid-item">
                        <h1>music</h1>
                    </div>
                    <div class="Grid-item">
                        <h1>c++</h1>
                    </div>
                    <div class="Grid-item">
                        <h1>fjksdkf</h1>
                    </div>
                    <div class="Grid-item">
                        <h1>dvvdf</h1>
                    </div>
                    <div class="Grid-item">
                        <h1>dgfg</h1>
                    </div>
                    <div class="Grid-item">
                        <h1>gfddd</h1>
                    </div>
                    <div class="Grid-item">
                        <h1>fg</h1>
                    </div>
                    <div class="Grid-item">
                        <h1>hrml</h1>
                    </div>
                    <div class="Grid-item">
                        <h1>node</h1>
                    </div>
                    <div class="Grid-item">
                        <h1>blufff</h1>
                    </div>
                    <div class="Grid-item">
                        <h1>Soniaa</h1>
                    </div>
                    
                    </div>
                    </div>
                 </div>
                                
                </div>

                <div class="temp1proj" id="t1project"> 
        
                <div class="projdiv">
                <div class="projtag">Projects</div> 
                      

                <div class="proj-Grid-div">
                <div class="proj-Grid">
                                    <div class="proj-card">
                        <div class="proj-card-img-container">
                        
                        </div>
                        <div class="proj-card-content">
                        
                        <h1>From the Other Side of the World</h1>
                        <p class="proj-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        
                        </div>
                    </div>
                    <div class="proj-card">
                    <div class="proj-card-img-container">
                    
                    </div>
                    <div class="proj-card-content">
                    
                    <h1>From the Other Side of the World</h1>
                    <p class="proj-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    
                    </div>
                </div>
                <div class="proj-card">
                    <div class="proj-card-img-container">
                    
                    </div>
                    <div class="proj-card-content">
                    
                    <h1>From the Other Side of the World</h1>
                    <p class="proj-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    
                    </div>
                </div>
                <div class="proj-card">
                    <div class="proj-card-img-container">
                    
                    </div>
                    <div class="proj-card-content">
                    
                    <h1>From the Other Side of the World</h1>
                    <p class="proj-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    
                    </div>
                </div>
                <div class="proj-card">
                    <div class="proj-card-img-container">
                    
                    </div>
                    <div class="proj-card-content">
                    
                    <h1>From the Other Side of the World</h1>
                    <p class="proj-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    
                    </div>
                </div>
                    
                    </div>
                    </div>



                 </div>

                </div>

                <div class="temp1experience" id="t1experience">            
                    <div class="expdiv">
                    <div class="exptag">Experience</div>

                    <div class="container">

   
                    {
                    arr.map((item,index)=>{                     
                         return(
                        <div class={`timeline-block timeline-block-${index%2==0?`right`:`left`}`}>
                            <div class="marker"></div>
                            <div class="timeline-content">
                         <h3>{item.Title}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>)
                    
                   })}   

                        <div class="timeline-block timeline-block-left">
                            <div class="marker"></div>
                            <div class="timeline-content">
                                <h3>Seconed Year</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>

                        <div class="timeline-block timeline-block-right">
                            <div class="marker"></div>
                            <div class="timeline-content">
                                <h3>Third Year</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>

                        <div class="timeline-block timeline-block-left">
                            <div class="marker"></div>
                            <div class="timeline-content">
                                <h3>Fourth Year</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>

                        <div class="timeline-block timeline-block-right">
                            <div class="marker"></div>
                            <div class="timeline-content">
                                <h3>Fifth Year</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>
                        </div>
                        </div>
                
                </div>

                <div class="temp1foot" id="t1contact"> 
                  <div class="contactIcons">
                  <PhoneIcon className="footIcon"></PhoneIcon>
                  <LinkedInIcon className="footIcon"></LinkedInIcon>
                  <GitHubIcon className="footIcon"></GitHubIcon>
                  <MailOutlineIcon className="footIcon"></MailOutlineIcon>
                  </div>
                  <div class="copyright"> ©Copyright SoniaVerma.com</div>
                </div>
            </div>
        </div>
    );

}

export default Template1;