import React from "react";
import {data} from "../Data/data";
import "./Body.css";  

function Body()
{
  return(
    <div className="top">
      <div className="containerNew">
        <div className="boxNew">
         <i class="far fa-edit fa-3x ic"></i>
         <br/><br/>
         <h2 className="bold">My skills</h2>
         <p>
          {data[0].skills[1]}
         </p>
        </div>
        <hr/>
        <div className="boxNew">
         <i class="fas fa-certificate fa-3x ic"></i>
         <br/><br/>
         <h2 className="bold">Experience</h2>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            vived not only five centuries.</p>
        </div>
        <hr/>
    </div>  
    <div className="containerNew2">
       <div class="boxNew2">
         <br/>
         <i class="fas fa-project-diagram fa-3x ic"></i>
         <br/><br/>
         <h2 className="bold">Projects</h2>
         <p>{data[0].projects[0].title}</p>
         <p>{data[0].projects[0].description}</p>
         <p></p>
       </div>
       <hr/>
       <div class="boxNew2">
         <br/>
         <i class="fas fa-user fa-3x ic"></i>
         <br/><br/>
         <h2 className="bold">Social Links</h2>
         <p>linkedIn :</p>
         <p>{data[0].social_links.linkedIn}</p>
         <i class="fab fa-github fa-2x ib" id="hov"></i>
         <i class="fab fa-linkedin fa-2x ib" id="hov"></i>
         <i class="fas fa-envelope fa-2x ib" id="hov"></i>
         <hr/>
        </div>
    </div> 
</div> 
   );
}
export default Body;