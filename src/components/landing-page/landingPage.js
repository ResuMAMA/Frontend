import React from 'react';
import "./landing.css";
import Login from "../landing-page/Landingcompoments/login";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import $ from 'jquery';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import MenuIcon from '@material-ui/icons/Menu';


function LandingPage() {
        
         /*---------------Navbar logic------------*/ 
        function callogin(){
          const element = document.getElementById("myNav");
          element.style.width = "100%";
        }

        $(document).ready(function() {
          // Transition effect for navbar 
          $(window).scroll(function() {
            // checks if window is scrolled more than 500px, adds/removes solid class
            if($(this).scrollTop() > 500) { 
                $('.Head-div').addClass('solid');
            } else {
                $('.Head-div').removeClass('solid');
            }
          });
        });
         

        function phoneview(){                             //for navbar
          console.log("sdsjfhjf");
          $('.sign-div').toggleClass("show");
          $('.sec-div').toggleClass("show");


          }



         



  return (<div>
      {/* ------------------------------------------------------------------Navbar---------------------------------------------------------- */}
         
          
       
        {/* ------------------------------------------------------------------Login---------------------------------------------------------- */}
        <Login />
        {/* ------------------------------------------------------------------Home---------------------------------------------------------- */}
          
        <div class="Home-home" id="homediv">
       
       
       
       
       
        <div class="Head-div">
        <div class="logo-div">
        <p>Resumama </p>
        <a class="hamburger" href="#" onClick={phoneview}><MenuIcon/></a>
        </div>
       
        
          <div class="sec-div">
            <ul class="nav-list">
              <li class="nav-list-item"><a href="#homediv">Home</a></li>
              <li class="nav-list-item"><a href="#aboutdiv">About</a></li>
              <li class="nav-list-item"><a href="#directiondiv">Direction</a></li>
              <li class="nav-list-item con-item"><a href="#landcontact">Contact</a></li>              
            </ul>
         </div>
        
      
      <div class="sign-div">
   
        <div class="sign-content" onClick={callogin}>
        Sign-up
        <LockOpenIcon className="lock" />
        </div>

      </div>
    </div>
       
       
       
       
       
       
        <div class="Home-main">
          <div class="Home-content">
            <h3 class="job-ready">Job ready?</h3>
            <h1 class="get">GET YOUR PORTFOLIO WEBSITE 
            
                READY IN MINUTES </h1>
                <p>without writing a single line of code!</p>
        <div class="get-s-div-ext">
        <a href="../dashboard/dashboard">Get Started </a>
        <ArrowForwardOutlinedIcon style={{color: "yellow"}}/>
        </div>          
      
          </div>
        </div>
      </div>


        {/* ------------------------------------------------------------------About---------------------------------------------------------- */}
                  <div class="Container_style" id="aboutdiv">

          <div class="template-content">
              <h1>Professionally Designed <br /> Portfolio Templates</h1>
              <h4>choose from a variety of templates and create <br />a portfolio website that <span> speaks for you</span></h4>
          </div>
         
               
            <div className="temp-Grid">
                <div className="temp-card">
                   <div  className="temp-card-img-container">
                   {/* <img src="/img/sonia.jpg"></img> */}
                   </div>
                   <div className="temp-card-content">Classy and Elegant</div>
                </div>
                <div className="temp-card">
                   <div  className="temp-card-img-container">
                   {/* <img src="/img/sonia.jpg"></img> */}
                   </div>
                   <div className="temp-card-content">That wow factor</div>
                </div>                     
                    
            </div>
          


          
          <div class="more">
              more exciting templates 
              <br />coming soon....
              <br />
              <ArrowForwardOutlinedIcon style={{color: "#576DF8"}}/>
          </div>
          
          </div>
          
            
        {/* ------------------------------------------------------------------Responsive---------------------------------------------------------- */}

        <div class="response-main" id="responsediv">
        {/* <div class="response-text"><p>RESPONSIVE</p></div>
        <div class="animation"><p>ANIMATION</p></div> */}
      </div>
             
        
        {/* ------------------------------------------------------------------Directions---------------------------------------------------------- */}
            
                    <div class="direction_style" id="directiondiv" >

            <div class="direction-content">
                <h1>Directions</h1>
                <h4>follow these steps to create your <span>portfolio website</span></h4>
            </div>

            <div class="direction-steps">
            <div class="d-container">

<div class="d-timeline-block d-timeline-block-right">
   <div class="d-marker"></div>
   <div class="d-timeline-content">
      <h3>Sign-up/Sign-In</h3> 
     <span>Top right corner of this page.</span>
   </div>
</div>
<div class="d-timeline-block d-timeline-block-left">
   <div class="d-marker"></div>
   <div class="d-timeline-content">
      <h3>Choose a template for portfolio</h3>
     <span>After sign-in, click the create portfolio button on dashboard to reach the template gallery</span>
      </div>
</div>

<div class="d-timeline-block d-timeline-block-right">
   <div class="d-marker"></div>
   <div class="d-timeline-content">
      <h3>Fill details for the portfolio</h3>
     <span>After choosing a template , you will be redirected to the details form. Fill the details you want on your portfolio like - projects, experience.</span>
    </div>
</div>

<div class="d-timeline-block d-timeline-block-left">
   <div class="d-marker"></div>
   <div class="d-timeline-content">
      <h3>Submit Form</h3>
      <span>On submission you will be redirected to dashboard where you will see all your portfolios, get a shareable link of your portfolio from there</span>
            </div>
</div>

<div class="d-timeline-block d-timeline-block-right">
   <div class="d-marker"></div>
   <div class="d-timeline-content">
      <h3>Portfolio Ready!</h3>
      <span>You get an amazing portfolio website without worrying about the code.</span>
      </div>
</div>
</div>
            </div>

            </div>

        {/* ------------------------------------------------------------------Contact---------------------------------------------------------- */}
         
        <div className="landfoot" id="landcontact"> 
                  <div className="landcontactIcons">
                    <MailOutlineIcon className="landfootIcon"></MailOutlineIcon>
                  </div>
                  <div className="landcopyright"> Copyright © Resumama.com</div>
                </div>

     
  </div>);
}

export default LandingPage;
