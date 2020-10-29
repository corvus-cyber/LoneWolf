import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import StatsLink from "../components/Dashboardlinks/Dashboardlinks"
import React from 'react';
import PieChart from "../components/Datadashboard/PieChart";
import WeightChart from "../components/Datadashboard/WeightChart";
import RepsChart from "../components/Datadashboard/RepsChart";
import TimeChart from "../components/Datadashboard/TimeChart";
import { useAuth0 } from '@auth0/auth0-react';


function Dashboard() {
  const {isAuthenticated, user} = useAuth0();
  
  console.log(user);
  console.log(isAuthenticated)
 
  return (
    <div>
      <Navbar />
      <Wrapper>      
          <div className="row justify-content-center">
            <PieChart />
            <WeightChart />
          </div>
          <div className="row justify-content-center">
            <RepsChart />
          </div>
          <div className="row justify-content-center">
            <TimeChart />
          </div>
          <StatsLink />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Dashboard;