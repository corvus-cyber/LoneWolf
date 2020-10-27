import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Callback from './Callback';
import Home from './Home';
import Exercises from "./pages/Chooseexercises"
import Muscles from "./pages/Choosemuscles"
import Workouts from "./pages/Createworkout"
import Dashboard from "./pages/Datadashboard"
import Stats from "./pages/Enterstats"

function App() {
  return (
    <Router>
     
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/callback' component={Callback}/>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/stats" component={Stats} />
        <Route exact path="/build" component={Muscles} />
        <Route exact path="/exercises" component={Exercises} />
        <Route exact path="/workouts" component={Workouts} />
      </div>
      
    </Router>
  );
}

export default App;
