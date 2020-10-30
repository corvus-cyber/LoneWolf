import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Home from './Home';
import Muscles from "./pages/Choosemuscles"
import Workouts from "./pages/Createworkout"
import Dashboard from "./pages/Datadashboard"
import Stats from "./pages/Enterstats"

function App() {
  return (
    <Router>
     
      <div>
        <Route exact path='/' component={Home}/>
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/stats" component={Stats} />
        <ProtectedRoute exact path="/build" component={Muscles} />
        <ProtectedRoute exact path="/workouts" component={Workouts} />
      </div>
      
    </Router>
  );
}

export default App;
