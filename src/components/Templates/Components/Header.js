import React from 'react'
import  "./Header.css";
import {data} from '../Data/data';
function Header ()
{
  return(
         <div className="colorclass">
          <div className="container1">
            <div className="box1">
            <img src="https://drive.google.com/file/d/1SKXpCCo4OANHOlBcXNJyyPuLcNRQGIWq/view?usp=sharing" alt="pic"  className="image"/>
            </div>
            <div className="box2">
                 <h2>My name is <span className="name">{data[0].name}</span><br/><br/></h2>
                 <h3>I'm a {data[0].skills[0].skill}</h3>
            </div>
          </div>  
          <div className="container2">
          <div class="container2box1">
                  <p>Design For</p>
                  <p>Web & Mobile</p>
                  <hr/>
                </div>
                <div class="container2box2">
                  <p>Phone</p>
                  <p>+10 (67) 367-9034</p>
                  <hr/>
                </div>
                <div class="container2box3">
                  <p>Drop your Message</p>
                  <p>chirag@gmail.com</p>
                  <hr/>
                </div>
          </div> 
         </div> 
        );
}
export default Header;
