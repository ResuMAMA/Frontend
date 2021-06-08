import React from "react";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import $ from 'jquery';
import {Link} from 'react-router-dom';

$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 500) { 
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
  });
});


function Navbar() {
  return (
    <div class="Head-div navbar">
      <div class="main-div">
        <div class="logo-div">
        <div class="img-container">
        <img class="logo-img" src="/img/white.png"></img>
        </div>
        
        </div>
          <div class="sec-div">
            <ul class="nav-list">
              <li class="nav-list-item">
                <div class="nav-list-item-div">

                 <a class="nav-list-content" href="#home"> Home</a>
                  <ArrowDropDownRoundedIcon />
                </div>
              </li>
              <li class="nav-list-item">
                <div class="nav-list-item-div">
                <a class="nav-list-content" href="#about"> About</a>
                 
                  <ArrowDropDownRoundedIcon />
                </div>
              </li>
              <li class="nav-list-item">
                <div class="nav-list-item-div">
                <a class="nav-list-content" href="#directions"> Directions</a>
                  <ArrowDropDownRoundedIcon />
                </div>
              </li>
              <li class="nav-list-item">
                <div class="nav-list-item-div">
                <a class="nav-list-content" href="#contact"> Contact</a>
                  <ArrowDropDownRoundedIcon />
                </div>
              </li>
              
            </ul>
         </div>
        
      </div>
      <div class="sign-div">
        <div class="sign-content">
        <a href="login.html">Sign-in </a>
        <LockOpenIcon />
        </div>          
      </div>
    </div>
  );
}

export default Navbar;
