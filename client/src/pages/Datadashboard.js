import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import StatsLink from "../components/Dashboardlinks/Dashboardlinks"
import React from 'react';
import PieChart from "../components/Datadashboard/PieChart";
import WeightChart from "../components/Datadashboard/WeightChart";
import RepsChart from "../components/Datadashboard/RepsChart";

function Dashboard() {

  return (
    <div>
      <Navbar />
      <Wrapper>
        <StatsLink />
        <div className="container">
          <div className="row justify-content-center">
            <PieChart />
            <WeightChart />
          </div>
          <div className="row justify-content-center">
            <RepsChart />
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Dashboard;