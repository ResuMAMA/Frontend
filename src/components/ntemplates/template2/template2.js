import React from "react";
import "./template2.css";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import ShareIcon from '@material-ui/icons/Share';
// import EditIcon from '@material-ui/icons/Edit';

import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
import $ from "jquery";

function Template1(){

    function phoneview(){
    // console.log("sdsjfhjf");
    // $('.Temp1navItem').toggleClass("show");
    }

    return (
        <div class="temp1outer">
            <div class="temp1Inner">
                <div class="temp1head canvasBox">                 
                <nav class="temp1nav" >
                    <ul >
                        <li class="Temp1Logo">Sonia</li>
                        <li class="Temp1navItem"> <a href="#">About</a></li>
                        <li class="Temp1navItem"> <a href="#">Skills</a></li>
                        <li class="Temp1navItem"> <a href="#">Projects</a></li>
                        <li class="Temp1navItem"> <a href="#">Experience</a></li>
                        <li class="Temp1navItem"> <a href="#">Contact</a></li>
                        <li class="menuIcon" onClick={phoneview}><a href="#"><MenuIcon/></a></li>
                    </ul>
                </nav>
                <div class="temp1main">
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

                <div class="temp1skill"> 
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

                <div class="temp1proj"> 
        
                
                </div>

                <div class="temp1experience">            
                

                
                </div>

                <div class="temp1foot"> 
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