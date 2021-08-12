import React ,{useEffect,useState}from "react";
import "./dashboard.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import Validate from '../../Validate'
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Dashboard(){

//logic---> fetch all the portfolios of the loggedIn user
   const[data,setData]=useState();
   const[loading,setLoading]=useState(true);
useEffect(()=>{
    Validate();
    const user_id=localStorage.getItem("userid");
    const token=localStorage.getItem("token")
    async function fetchData(){
      const response=await fetch("http://localhost:5000/portfolios/myportfolios",{
          method:"GET",
          headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`,
          "user_id":user_id
       }
      })
     // console.log(response)
      const realdata=await response.json();
      //console.log(realdata)
      setData(realdata)
      if(data!==null){
      setTimeout(()=>{
      setLoading(false)
      },1000)}
     // await setData(realdata)
     
  }
fetchData();


},[])

  return (
  <div class="dash-main">
    <div class="dash-nav-out">
    <div class="dash-nav-in">
        
    <div class="LOGO">
        {/* <img class="dash-logo-img" src="/img/b-r.png"></img> */}
        <p class="dash-logo-img"> Resumama</p>
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
            <li class="active"><a href="/changePassword">Change Password</a></li>
            <li class="active" onClick={()=>localStorage.clear()}><a href="/">Logout</a></li>
            
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
  {loading?<h1>Loading......</h1>:  
  
    data.map((item,index)=>
    <article>
      <img src="https://picsum.photos/600/400?image=1083" alt="Sample photo" />
      <div class="text">
        <p>{item.title}</p>
        <div class="bottom-bar">
         <div class="view bottom-bar-icon"><VisibilityIcon /></div>
         <div class="share bottom-bar-icon"><button onClick={(e)=>alert("Link to your portfolio: "+`localhost:3000/Template${item.template_no}/my_portfolio/${item._id}`)}><ShareIcon/></button></div>
         <div class="edit bottom-bar-icon"><EditIcon /></div>
        </div>
      </div>
    </article>)}
    <article class="createCard">
    <img src="/img/logo.png" alt="Sample photo" />
      <div class="text">
      <p>Create Portfolio</p>
      <div class="bottom-bar">
         <div class="add bottom-bar-icon"><button onClick={()=>window.location="/createPortfolio/create"}><AddToPhotosIcon /></button></div>
      </div>
      </div>
    </article>

  </main>
</div>

     </div>
       <div class="quotes">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec elit urna. Suspendisse a erat a nibh imperdiet fermentum. In eleifend ultricies massa, id pretium purus convallis nec.</div>
     </div>
       
    </div>
    {/* <div class="dash-foot">Copyright</div> */}

    <div className="dashfoot"> 
                  <div className="dashcontactIcons">
                    <MailOutlineIcon className="dashfootIcon"></MailOutlineIcon>
                  </div>
                  <div className="dashcopyright"> Copyright © Resumama.com</div>
                </div>
  </div>
  );
}



export default Dashboard;





// testing

