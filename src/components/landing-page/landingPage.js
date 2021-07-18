import React from 'react';
import "./landing.css";
import Navbar from "../landing-page/Landingcompoments/navbar";
import Home from "../landing-page/Landingcompoments/home";
import About from "../landing-page/Landingcompoments/about";
import Responsive from "../landing-page/Landingcompoments/responsive";
import Mode from "../landing-page/Landingcompoments/mode";
import Contact from "../landing-page/Landingcompoments/contact";
import Directions from "../landing-page/Landingcompoments/directions";
import Login from "../landing-page/Landingcompoments/login";

function LandingPage() {
  return (<div>
       <Navbar />
       <Login />
       <Home />
       <About />
      <Responsive />
      <Mode />
      <Directions />
      <Contact />
      
      
  </div>);
}

export default LandingPage;
