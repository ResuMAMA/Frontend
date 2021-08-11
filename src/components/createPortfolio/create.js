import React ,{useState} from "react";
import "./create.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import DetailsForm from '../form/DetailsForm'
function Create(){

//states
const [temp_no,setTemp_no]=useState(1);
const [go,setgo]=useState(false)
return (
  <div>
{go?<DetailsForm temp_no={temp_no}/>:

  <div class="portfolioAlbumPage">
    <div class="portfolioAlbumPage-Container_style" id="portfolioAlbumPage-aboutdiv">
      <div class="portfolioAlbumPage-template-content">
          <h4>Step 1.<span> Select a Template!</span></h4>
      </div>
      <div className="portfolioAlbumPage-temp-Grid">
        <div className="portfolioAlbumPage-temp-card">
          <div  className="portfolioAlbumPage-temp-card-img-container">
          {/* <img src="/img/sonia.jpg"></img> */}
          </div>
          <div className="portfolioAlbumPage-temp-card-content">1.Classy and Elegant</div>
        </div>
      <div className="portfolioAlbumPage-temp-card">
          <div  className="portfolioAlbumPage-temp-card-img-container">
            {/* <img src="/img/sonia.jpg"></img> */}
          </div>
          <div className="portfolioAlbumPage-temp-card-content">2.That wow factor</div>
      </div>              
  </div>
  <div class="portfolioAlbumPage-template-content">  
          <h3>Enter Number of the Template You want to select!<br /><input placeholder="Template number"
           onChange={(e)=>setTemp_no(e.target.value)}
          ></input></h3>
      </div>

      <div class="portfolioAlbumPage-template-content">  
          <h4>Step 2.<span> Fill the Details Form</span></h4>
          <button onClick={()=>{
              setgo(true);
          }}>Go to Form </button>
      </div>
  

  {/* <div class="portfolioAlbumPage-more">
      more exciting templates 
      <br />coming soon....
      <br />
      <ArrowForwardOutlinedIcon style={{color: "#576DF8"}}/>
  </div> */}

</div>


  </div>}
</div>
      );
}
export default Create;
































/*----------------------------------carousel for fututre------------------------------------------------*/


{/* <div class="create">
 <div class="templates">
 <h1>Step 1  Select a template! </h1> 
 <div class="album"> 
<Carousel autoPlay="false"  centerMode="false" >
    <div>
      <img alt="" src="/img/temprem.png"/>
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

//   <div class="templates">
//  <h1>Step 2  Fill in the Schema! </h1> 
//  <div class="album"> 
// <img class="form-img" src="/img/form.png"></img>
//   </div>
//   </div>
// <div>
// <button class="fourth"> Generate </button>
// </div>
//     </div> */}