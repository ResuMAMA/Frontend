import React from "react";
import ReactCardCarousel from "react-card-carousel";
function Directions(){
  return (
   
    <div class="Container_style" id="directions">

        <div class="template-content">
            <h1>Directions</h1>
            <h4>follow these steps to create your portfolio</h4>
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
    
    
  );
}
export default Directions;