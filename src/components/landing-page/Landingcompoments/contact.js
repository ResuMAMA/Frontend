import React from "react";
import { Element } from 'react-scroll'
/* <div class="footer-above"> 
      <h2 className="imp">Calvino</h2>
      <h3 className="imp1">In the mean time shall soon find out the cause of this:<br/>What was the epicurus towards their children.</h3>
   </div>
*/

function Contact(){
return (
<Element id="contact" name='contact'>  
   <div class="footer_intro">
    <center>
       <br/>
	    <img class="logo-img" src="/img/white.png"></img>
	 </center>
    
    <div className="footer_main">
          <div class="footer_mainbox1">
                <i class="fas fa-file-code fa-2x ie"></i>
                 <br/>
                 <br/>
                  <p>Hire Us :</p>
                  <p>We provide Website Services</p>
                  <center><hr className="footer_mainhr"/></center>
                </div>
                <div class="footer_mainbox2">
                <i class="fas fa-headset fa-2x ie"></i>
                  <br/>
                  <br/>
                  <p>Call Us :</p>
                  <p>+10 (67) 367-9034</p>
                  <center><hr className="footer_mainhr"/></center>
                </div>
                <div class="footer_mainbox3">
                  <i class="fas fa-envelope fa-2x ie"></i> 
                  <br/>
                  <br/>
                  <p>Drop your Queries :</p>
                  <p>chirag@gmail.com</p>
                  <center><hr className="footer_mainhr"/></center>
                </div>
          </div>
    
  <center>
  <h5 class="footer_down">Follow Us On</h5>
    <a href="https://www.linkedin.com/in/aayushmaan-rawat-a199621b1/" class="buttn buttn-sm" ><i class="fab fa-linkedin-in ib linked"></i></a>
    <a href="https://twitter.com/Ayushmaan_Rawat" class="buttn buttn-sm"><i class="fab fa-twitter ib twitter"></i></a>
    <a href="https://www.instagram.com/aayushmaan_rawat/" class="buttn buttn-sm"><i class="fab fa-instagram ib insta"></i></a>
    <a href="https://www.facebook.com/aayushmaan.rawat.14" class="buttn  buttn-sm"><i class="fab fa-facebook-f ib facebook"></i></a>
    <hr id ="lastline"/>
  <h6 class="footer_down">Copyright © 2020.India.All Rights Reserved.</h6>
  <div>
   <span class="footer_down"><a href=""> TERMS </a>|</span>
   <span class="footer_down"><a href=""> PRIVACY </a>|</span>
   <span class="footer_down"><a href=""> FAQ</a></span>
   </div>
  </center> 
 </div> 
</Element>
);
}
export default Contact;