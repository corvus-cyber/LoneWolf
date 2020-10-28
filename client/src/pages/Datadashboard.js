import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Wrapper from "../components/Wrapper/Wrapper"
import StatsLink from "../components/Dashboardlinks/Dashboardlinks"
import React, {useEffect} from 'react';
import PieChart from "../components/Datadashboard/PieChart";
import WeightChart from "../components/Datadashboard/WeightChart";
import RepsChart from "../components/Datadashboard/RepsChart";
import TimeChart from "../components/Datadashboard/TimeChart";
import auth0Client from '../Auth';
import { useAuth0 } from '@auth0/auth0-react';


function Dashboard() {
  const {loginWithRedirect, isAuthenticated, user} = useAuth0();
  console.log(user.sub);

  console.log(isAuthenticated)


// useEffect(() => {
//   if (!auth0Client.isAuthenticated()) {
//     auth0Client.signIn();
// }
// console.log(auth0Client.getProfile())
// localStorage.setItem("token", auth0Client.getProfile().aud)

//   return () => {
//   }
// }, []) 
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
          <div className="row justify-content-center">
            <TimeChart />
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Dashboard;