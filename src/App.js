import React from 'react';
import "./App.css";
import { Route,Switch} from "react-router-dom";
import LandingPage from './components/landingPage';
import Dashboard from './components/dashboard/dashboard';
import Create from './components/createPortfolio/create';
import Schema from './components/form/Components/DetailsForm'
function App() {

  return (
    
      <Switch>
         <Route exact path="/" component={LandingPage}/>
         <Route path="/dashboard" component={Dashboard}/>
         <Route path="/createPortfolio" component={Create}/>
         <Route path="/form" component={Schema}/>
      </Switch>
    
  );
}

export default App;
