import React from 'react';
import { Route,Switch} from "react-router-dom";
import LandingPage from './components/landing-page/landingPage';
import Dashboard from './components/dashboard/dashboard';
import Create from './components/createPortfolio/create';
import Schema from './components/form/DetailsForm';
//import temp from './components/Templates/Template';
import Template1 from './components/ntemplates/template2/template2';

function App() {

  return (
    
      <Switch>
         <Route exact path="/" component={LandingPage}/>
         <Route path="/dashboard" component={Dashboard}/>
         <Route path="/createPortfolio" component={Create}/>
         <Route path="/form" component={Schema}/>
       
         <Route path="/Template1" component={Template1}/>
      </Switch>
    
  );
}

export default App;
