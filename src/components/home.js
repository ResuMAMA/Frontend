import React from "react";
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import { Element } from 'react-scroll'

function Home(){
return (
<Element id="home" name='home'>
<div class="Home-home" >
        <div class="Home-main">
          <div class="Home-content">
            <h3 class="job-ready">Job ready?</h3>
            <h1 class="get">GET YOUR PORTFOLIO WEBSITE 
            <br />
                READY IN MINUTES </h1>
                
        <div class="get-s-div-ext">
        <a>Get Started </a>
        <ArrowForwardOutlinedIcon style={{color: "yellow"}}/>
        </div>          
      
          </div>
        </div>
      </div>
      </Element>);
}
export default Home;