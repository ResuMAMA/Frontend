import React from 'react';
import Navbar from "./landing-page/navbar";
import Home from "./landing-page/home";
import About from "./landing-page/about";
import Responsive from "./landing-page/responsive";
import Mode from "./landing-page/mode";
import Contact from "./landing-page/contact";
import Directions from "./landing-page/directions";
import Login from "./landing-page/login";

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
