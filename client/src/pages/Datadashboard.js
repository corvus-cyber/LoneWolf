import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import StatsLink from "../components/Dashboardlinks/Dashboardlinks"
import React, { useState } from 'react';
import PieChart from "../components/Datadashboard/PieChart";
import WeightChart from "../components/Datadashboard/WeightChart";
import RepsChart from "../components/Datadashboard/RepsChart";
import TimeChart from "../components/Datadashboard/TimeChart";
import { useAuth0 } from '@auth0/auth0-react';
import "./style.css"


function Dashboard() {
  const { user } = useAuth0();
  let username;
  if (user.given_name) {
    username = user.given_name;
  } else {
    username = user.nickname;
  }


  return (
    <div>
      <Navbar />
      <Wrapper>      
            <p className="username">Hello, <span>{username}</span></p>
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