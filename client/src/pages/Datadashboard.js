import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import StatsLink from "../components/Dashboardlinks/Dashboardlinks"
import React from 'react';
import PieChart from "../components/Datadashboard/PieChart";
import WeightChart from "../components/Datadashboard/WeightChart";
import RepsChart from "../components/Datadashboard/RepsChart";
import TimeChart from "../components/Datadashboard/TimeChart";


function Dashboard() {
 
  return (
    <div>
      <Navbar />
      <Wrapper>      
            <PieChart />
            <WeightChart />
            <RepsChart />
            <TimeChart />
          <StatsLink />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Dashboard;