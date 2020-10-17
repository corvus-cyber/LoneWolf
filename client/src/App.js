import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
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
          <Route exact path="/about" component={Dashboard}/>
          <Route exact path="/portfolio" component={Stats}/>
          <Route exact path="/contact" component={Muscles}/>
          <Route exact path="/workouts" component={Workouts}/>
    </div>
  </HashRouter>

  );
}

export default App;
