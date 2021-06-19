import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Element } from 'react-scroll'

  function About() {
    return (
      <Element id="about" name='about'>
      <div class="Container_style" >

          <div class="template-content">
              <h1>Professionally Designed <br /> Website Templates</h1>
              <h4>choose from a variety of customizable templates and create the appropriate portfolio</h4>
          </div>

          <div class="template-cards">
              <ReactCardCarousel autoplay={false}>
                <div class ="Card_style" >First Card</div>
                <div class ="Card_style" >Second Card</div>
                <div class ="Card_style" >Third Card</div>
                <div class ="Card_style" >Fourth Card</div>
                <div class ="Card_style" >Fifth Card</div>
              </ReactCardCarousel>
          </div>
       
      </div>
      </Element>
      
    );
  }


export default About;