import React from "react";
import "./create.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Create(){
return (
  <div>

<div class="create">
 <div class="templates">
 <h1>Step 1 -> Select a template! </h1> 
 <div class="album"> 
<Carousel autoPlay="false"  centerMode="false" >
    <div>
      <img alt="" src="/img/temprem.png"/>
      {/* src="/img/temprem.png"  */}
      <p className="legend">Template 1</p>
    </div>
    <div>
      <img alt="" src="/img/blue.png" />
      <p className="legend">Template 2</p>
    </div>
    <div>
      <img alt="" src="/img/temprem.png" />
      <p className="legend">Template 3</p>
    </div>
    <div>
      <img alt="" src="/img/blue.png" />
      <p className="legend">Template 4</p>
    </div>
    <div>
      <img alt="" src="/img/temprem.png" />
      <p className="legend">Template 5</p>
    </div>
    <div>
      <img alt="" src="/img/blue.png" />
      <p className="legend">Template 6</p>
    </div>
    <div>
      <img alt="" src="/img/temprem.png" />
      <p className="legend">Template 7</p>
    </div>
    <div>
      <img alt="" src="/img/blue.png" />
      <p className="legend">Template 8</p>
    </div>
  </Carousel>
  </div>
  </div>


  {/* form */}

  <div class="templates">
 <h1>Step 2 -> Fill in the Schema! </h1> 
 <div class="album"> 
<img class="form-img" src="/img/form.png"></img>
  </div>
  </div>

<div>

<button class="fourth"> Generate </button>

</div>







      </div>

  </div>

      );
}
export default Create;