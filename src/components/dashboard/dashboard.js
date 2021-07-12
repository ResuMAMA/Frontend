import React from "react";
import "./dashboard.css";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

function Dashboard(){
return (
<div class="dashb">

<div class="dash-n-div">
      <div class="main-n-div">
        <div class="logo-div">
        <div class="img-container">
        <img class="logo-img" src="/img/white.png"></img>
        </div>
        
        </div>
          <div class="sec-n-div">
            <ul class="d-nav-list">
              <li class="d-nav-list-item">
                <div class="d-nav-list-item-div">

                <a> Home<ArrowDropDownRoundedIcon /></a>

                </div>
              </li>
              
              
            </ul>
         </div>
        
      </div>
      <div class="sign-div">
   
        <div class="sign-content">
        Sign-in
        <LockOpenIcon />
        </div>

      </div>
    </div>


  <footer class="dfoot">
      <p>Copyright ⓒ </p>
    </footer>
</div>
      );
}
export default Dashboard;







