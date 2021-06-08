import React from 'react';
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Responsive from "./components/responsive";
import Mode from "./components/mode";
import Contact from "./components/contact";
import Directions from "./components/directions";
import { Domain } from '@material-ui/icons';

function App() {
  return (<div>
       <Navbar />
       <Home />
       <About />
      <Responsive />
      <Mode />
      <Directions />
      <Contact />
      
  </div>);
}

export default App;
