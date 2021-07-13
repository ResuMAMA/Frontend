import React from "react";
import "./dashboard.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Dashboard(){
return (
<div class="dashb">

    <div class="dash-n-div">
          <div class="main-n-div">
            <div class="dash-logo-div">
              <div class="dash-img-container">
              <img class="dash-logo-img" src="/img/b-r.png"></img>
              </div>
            </div>

          <div class="line"></div>

          <div class="sec-n-div">
              <div class="d-nav-list">
                <li class="d-nav-list-item">
                  <div class="d-nav-list-item-div">
                    <span class="writtendash">Dashboard</span>
                  </div>
                </li>
              </div>
          </div>
            
          </div>
          
          <div class="d-sign-div">
            <div class="d-sign-container">
              <button class="d-sign-btn">
                <i class="material-icons"><AccountCircleIcon className="accnt"/></i>
                <span>Account Settings</span>
                <ul class="dropdown">
                  <li><a href="#">Change Password</a></li>
                  <li><a href="#">Log Out</a></li>
                </ul>
              </button>
            </div>
          </div>

    </div>
    <footer class="dfoot">
        <p>Copyright ⓒ </p>
      </footer>
</div>);
}
export default Dashboard;







