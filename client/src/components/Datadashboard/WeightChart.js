import React, { useEffect, useState } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { XYPlot, VerticalGridLines, HorizontalGridLines, LineSeries, XAxis, YAxis } from 'react-vis/dist';
import "./chartStyle.css";
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';


function WeightChart() {
  const [weightData, setWeightData] = useState();

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
        //save weight information into loginUserWeightArray
        loginUserStats.forEach(data => {
          const coordinate =
          { "x": data.date, "y": data.weight }
          loginUserWeight.push(coordinate)
        });
        console.log(loginUserWeight)
        //save lean body mass information into loginUserLeanBodyMass Array
        loginUserStats.forEach(data => loginUserLeanBodyMass.push(data.leanBodyMass));
      }).then(() => { setWeightData(loginUserWeight)})
      .catch(err => console.log(err));
  }

  const LeanBodyMassdata = [
    { x: 0, y: 161 },
    { x: 7, y: 162 },
    { x: 14, y: 166 },
    { x: 21, y: 168 },
    { x: 28, y: 170 }
  ];

  return (
    <div className="chart col-lg-4 col-md-4 col-sm-8 m-5">
      <p>Weight and Lean Body Mass Chart</p>
      <XYPlot height={300} width={300} xDomain={[0, 30]} yDomain={[70, 300]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="dates" />
        <YAxis title="lbs" />
        <LineSeries data={weightData} stroke="red" />
        <LineSeries data={LeanBodyMassdata} />
      </XYPlot>
    </div>
  );
}

export default WeightChart;
