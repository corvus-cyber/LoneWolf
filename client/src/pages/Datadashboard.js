import React from 'react';
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import StatsLink from "../components/Dashboardlinks/Dashboardlinks"
function Dashboard() {
  
    return (
      <div>
        <Navbar /> 
        <Wrapper>
            <StatsLink/>
        </Wrapper>
        <Footer />
      </div>
    );
  }
  
  export default Dashboard;