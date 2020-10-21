import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import Exercises from "./pages/Chooseexercises"
import Muscles from "./pages/Choosemuscles"
import Workouts from "./pages/Createworkout"
import Dashboard from "./pages/Datadashboard"
import Stats from "./pages/Enterstats"
import Login from "./pages/Login"
function App() {
  
  return (
    <HashRouter basename='/'>
    <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/stats" component={Stats}/>
          <Route exact path="/build" component={Muscles}/>
          <Route exact path="/exercises" component={Exercises}/>
          <Route exact path="/workouts" component={Workouts}/>
    </div>
  </HashRouter>

  );
}

export default App;
