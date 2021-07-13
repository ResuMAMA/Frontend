import React from "react";
import "./dashboard.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Dashboard(){
return (
<div class="dashb">

    <div class="dash-n-div">
          <div class="main-n-div">

            <div class="logo-div">
              <div class="img-container">
              <img class="logo-img" src="/img/b-r.png"></img>
              </div>
            </div>

          <div class="line"></div>

          <div class="sec-n-div">
              <ul class="d-nav-list">
                <li class="d-nav-list-item">
                  <div class="d-nav-list-item-div">
                    <a class="writtendash">Dashboard</a>
                  </div>
                </li>
              </ul>
          </div>
            
          </div>
          
          <div class="sign-div">
            <div class="sign-container">
              <button class="sign-btn">
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







