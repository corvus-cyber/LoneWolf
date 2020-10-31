import React, { useEffect, useState } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { VerticalGridLines, HorizontalGridLines, LineSeries, XAxis, YAxis, FlexibleWidthXYPlot } from 'react-vis/dist';
import "./chartStyle.css";
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';
import DiscreteColorLegend from 'react-vis/dist/legends/discrete-color-legend';

function RepsChart() {
  const [chest, setChest] = useState([{ x: 0, y: 0 }]);
  const [back, setBack] = useState([{ x: 0, y: 0 }]);
  const [shoulders, setShoulders] = useState([{ x: 0, y: 0 }]);
  const [biceps, setBiceps] = useState([{ x: 0, y: 0 }]);
  const [triceps, setTriceps] = useState([{ x: 0, y: 0 }]);
  const [quadriceps, setQuadriceps] = useState([{ x: 0, y: 0 }]);
  const [hamstringsAndGlutes, setHamstringAndGlutes] = useState([{ x: 0, y: 0 }]);
  const [abdominals, setAbdominals] = useState([{ x: 0, y: 0 }]);

  const ITEMS = [
    'Chest',
    'Back',
    'Shoulders',
    'Biceps',
    'Triceps',
    "Quadriceps",
    "Hamstrings And Glutes",
    "Abdominals"
  ];

  useEffect(() => {
    loadStats()
  }, [])

  const { user } = useAuth0()
  let currentUserToken = user.sub;

  function loadStats() {
    let statsData = [];

    API.getRepsAndTime()
      .then(res => {
        //all user stats
        statsData = res.data;
        //grab only the stats of the logged-in user
        let loginUserStats = statsData.filter(data => data.token === currentUserToken);
        let firstDate;
        console.log(loginUserStats);
        if (loginUserStats[0]) {
          firstDate = new Date(loginUserStats[0].date).getTime();
        }

        function determineXCoordinate(data) {
          return (new Date(data.date).getTime() - firstDate) / (1000 * 3600 * 24)
        }

      }).then(() => {
        console.log(statsData);

      })

      .catch(err => console.log(err));
  }
  //plug in the colors of the Line Series here:
  const myPalette = ["red", "blue", "#03fce7", "green", "orange", "purple", "black", "pink"]

  return (
    <div className="row">
    <div className="chart col-sm-7 m-5 text-center">
      <p>Cumulative Exercise Reps Chart</p>
      {/* plug in the x and y range here */}
      <FlexibleWidthXYPlot height={300} xDomain={[0, 100]} yDomain={[0, 500]}
        colorType="category"
        colorDomain={[0, 1, 2, 3, 4, 5, 6, 7]}
        colorRange={myPalette}>
        <VerticalGridLines />
        <HorizontalGridLines />

        {/* colors are according to index numbers within the myPalette array */}
        <LineSeries data={chest} color={0} />
        <LineSeries data={back} color={1} />
        <LineSeries data={shoulders} color={2} />
        <LineSeries data={biceps} color={3} />
        <LineSeries data={triceps} color={4} />
        <LineSeries data={quadriceps} color={5} />
        <LineSeries data={hamstringsAndGlutes} color={6} />
        <LineSeries data={abdominals} color={7} />

        <XAxis title="days" />
        <YAxis title="reps" />
      </FlexibleWidthXYPlot>
    </div>
    <div className="chart col-sm-3 mt-5">
      <DiscreteColorLegend colors={myPalette} height={300} width={300} items={ITEMS} />
    </div>
    </div>
    );
}

export default RepsChart;