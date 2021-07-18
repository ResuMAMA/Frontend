import React from "react";
import "./Navbar.css" ; 
function Navbar()
{
  return ( 
<div class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="temp.html">
    <span  class="logoname">Calvino</span>
    </a>     
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" id="a" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="b" href="#abtus">My skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="c" href="#first">About us</a>
        </li>
     </ul>
   </div>
</div>
);


}

export default Navbar;