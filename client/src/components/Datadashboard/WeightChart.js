import React, { useEffect, useState } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { XYPlot, VerticalGridLines, HorizontalGridLines, LineSeries, XAxis, YAxis } from 'react-vis/dist';
import "./chartStyle.css";
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';


function WeightChart() {
  const [weightData, setWeightData] = useState();
  const [leanBodyMassData, setLeanBodyMassData] = useState();

  useEffect(() => {
    loadStats()
  }, [])

  const { user } = useAuth0()

  let currentUserToken = user.sub;

  function loadStats() {
    let statsData = [];
    let loginUserWeight = [];
    let loginUserLeanBodyMass = [];
  
    API.getWeightStats()
      .then(res => {
        //all user stats
        statsData = res.data;
        //grab only the stats of the logged-in user
        let loginUserStats = statsData.filter(data => data.token === currentUserToken);
        console.log(loginUserStats)
        //save weight information into loginUserWeight Array
        loginUserStats.filter(data => data.weight)
        .forEach(data => {
          const coordinate =
          { "x": data.date, "y": data.weight }
          loginUserWeight.push(coordinate)
        });
         //save lean body mass information into loginUserLeanBodyMass Array 
         loginUserStats.filter( data => data.leanBodyMass)
          .forEach(data => {
          const coordinate =
          { "x": data.date, "y": data.leanBodyMass }
          loginUserLeanBodyMass.push(coordinate)
        });
      }).then(() => { 

        if (loginUserWeight.length === 0) {
          setWeightData([{x: 0, y: 0}])
        } else if (loginUserWeight.length > 0) {
          setWeightData(loginUserWeight);
        }

        if (loginUserLeanBodyMass.length === 0) {
          setLeanBodyMassData([{x: 0, y: 0}])
        } else if (loginUserLeanBodyMass.length > 0) {
          setLeanBodyMassData(loginUserLeanBodyMass);
        }
      })

      .catch(err => console.log(err));
  }

  return (
    <div className="chart col-lg-4 col-md-4 col-sm-8 m-5">
      <p>Weight and Lean Body Mass Chart</p>
      <XYPlot height={300} width={300} xDomain={[0, 30]} yDomain={[70, 300]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="dates" />
        <YAxis title="lbs" />
        <LineSeries data={weightData} stroke="red" />
        <LineSeries data={leanBodyMassData} />
      </XYPlot>
    </div>
  );
}

export default WeightChart;
