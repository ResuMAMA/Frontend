import React from "react";
import "./dashboard.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';

function Dashboard(){
  return (
  <div class="dash-main">
    <div class="dash-nav-out">
    <div class="dash-nav-in">
        
    <div class="LOGO">
        <img class="dash-logo-img" src="/img/b-r.png"></img>
       <div className="chnglogo"> <PhoneIphoneIcon /> </div> 
    </div>

      <div class="dash-name-div">      
        <div class="dash-name">DASHBOARD</div>
      </div>
      
      <div class="accnt-div">
        <button class="accnt-btn">
          {/* <i class="material-icons"><AccountCircleIcon className="accnt"/></i> */}
          <AccountCircleIcon className="material-icons accnt"/>
          <span class="accnt-setting">Account Settings</span>
          <ul class="dropdown">
            <li class="active"><a href="#">Change Password</a></li>
            <li class="active"><a href="#">Log Out</a></li>
          </ul>
        </button>
      </div>
    </div>
      
    </div>

    <div class="dash-center-out">
    <div class="dash-center-in">
     <div class="temp-cards">

     <div class="dash-container">
  <main class="grid">
    <article>
      <img src="https://picsum.photos/600/400?image=1083" alt="Sample photo" />
      <div class="text">
        <p>Seamlessly visualize quality</p>
        <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><ShareIcon /></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1063" alt="Sample photo" />
      <div class="text">
      <p>Completely Synergize</p>
      <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><ShareIcon /></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1056" alt="Sample photo" />
      <div class="text">
      <p>Dynamically Procrastinate</p>
      <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><ShareIcon /></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1050" alt="Sample photo" />
      <div class="text">
      <p>Best in class</p>
      <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><ShareIcon /></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1041" alt="Sample photo" />
      <div class="text">
      <p>Dynamically innovate supply chains</p>
      <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><ShareIcon /></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1015" alt="Sample photo" />
      <div class="text">
      <p>Sanity check</p>
      <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><ShareIcon /></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1083" alt="Sample photo" />
      <div class="text">
        <p>Seamlessly visualize quality</p>
        <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><ShareIcon /></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1063" alt="Sample photo" />
      <div class="text">
      <p>Completely Synergize</p>
      <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><ShareIcon /></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1056" alt="Sample photo" />
      <div class="text">
      <p>Dynamically Procrastinate</p>
      <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><ShareIcon /></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1050" alt="Sample photo" />
      <div class="text">
      <p>Best in class</p>
      <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><ShareIcon /></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1041" alt="Sample photo" />
      <div class="text">
      <p>Dynamically innovate supply chains</p>
      <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><ShareIcon /></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>
    <article>
      <img src="https://picsum.photos/600/400?image=1015" alt="Sample photo" />
      <div class="text">
      <p>Sanity check</p>
      <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><ShareIcon /></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>
    
    <article class="createCard">
    <img src="/img/logo.png" alt="Sample photo" />
      <div class="text">
      <p>Create Portfolio</p>
      <div class="bottom-bar">
         <div class="add bottom-bar-icon"><AddToPhotosIcon /></div>
      </div>
      </div>
    </article>
  </main>
</div>

     </div>
       <div class="quotes">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec elit urna. Suspendisse a erat a nibh imperdiet fermentum. In eleifend ultricies massa, id pretium purus convallis nec.</div>
     </div>
       
    </div>
    <div class="dash-foot">Copyright</div>
  </div>
  );
}



export default Dashboard;







