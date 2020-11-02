import React, { useEffect, useState } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import {LineSeries, XAxis, YAxis, FlexibleWidthXYPlot, Highlight, MarkSeries, Hint } from 'react-vis/dist';
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
  const [conditioning, setConditioning] = useState([{ x: 0, y: 0 }]);

  const [lastDrawLocation, setLastDrawLocation] = useState(null);
  const [hoverCoord, setHoverCoord] = useState({});

  const ITEMS = [
    'Chest',
    'Back',
    'Shoulders',
    'Biceps',
    'Triceps',
    "Quadriceps",
    "Hamstrings And Glutes",
    "Abdominals",
    "Conditioning"
  ];

  useEffect(() => {
    loadStats()
  }, [])

  const { user } = useAuth0()
  let currentUserToken = user.sub;

  function loadStats() {
    let statsData = [];
    let chestCoord = [];
    let backCoord = [];
    let shouldersCoord = [];
    let bicepsCoord = [];
    let tricepsCoord = [];
    let quadricepsCoord = [];
    let hamstringsAndGlutesCoord = [];
    let abdominalsCoord = [];
    let conditioningCoord = [];

    API.getRepsAndTime()
      .then(res => {
        //all user stats
        statsData = res.data;
        //grab only the stats of the logged-in user
        let loginUserStats = statsData.filter(data => data.token === currentUserToken);

        //if user has data saved, find date of first workout
        let firstDate;
        if (loginUserStats[0]) {
          firstDate = new Date(loginUserStats[0].date).getTime();
        }

        function determineXCoordinate(data) {
          return (Math.ceil((new Date(data.date).getTime() - firstDate) / (1000 * 3600 * 24)))
        }

        //generate the arrays of different muscle groups
        loginUserStats.filter(data => {
          switch (data.muscleGroup) {
            case "Chest":
              chestCoord.push({ "x": determineXCoordinate(data), "y": data.reps });
              break;
            case "Back":
              backCoord.push({ "x": determineXCoordinate(data), "y": data.reps });
              break;
            case "Shoulders":
              shouldersCoord.push({ "x": determineXCoordinate(data), "y": data.reps });
              break;
            case "Triceps":
              tricepsCoord.push({ "x": determineXCoordinate(data), "y": data.reps });
              break;
            case "Biceps":
              bicepsCoord.push({ "x": determineXCoordinate(data), "y": data.reps });
              break;
            case "Quadriceps":
              quadricepsCoord.push({ "x": determineXCoordinate(data), "y": data.reps });
              break;
            case "Hamstrings and Glutes":
              hamstringsAndGlutesCoord.push({ "x": determineXCoordinate(data), "y": data.reps });
              break;
            case "Abs":
              abdominalsCoord.push({ "x": determineXCoordinate(data), "y": data.reps });
              break;
            case "Conditioning":
              conditioningCoord.push({ "x": determineXCoordinate(data), "y": data.reps });
            }
        })
      }).then(() => {
        if (abdominalsCoord.length > 0) {
          setAbdominals(abdominalsCoord)
        };
        if (backCoord.length > 0) {
          setBack(backCoord);
        };
        if (chestCoord.length > 0) {
          setChest(chestCoord)
        };
        if (shouldersCoord.length > 0) {
          setShoulders(shouldersCoord);
        };
        if (tricepsCoord.length > 0) {
          setTriceps(tricepsCoord)
        };
        if (bicepsCoord.length > 0) {
          setBiceps(bicepsCoord)
        };
        if (quadricepsCoord.length > 0) {
          setQuadriceps(quadricepsCoord)
        };
        if (hamstringsAndGlutesCoord.length > 0) {
          setHamstringAndGlutes(hamstringsAndGlutesCoord)
        };
        if (conditioningCoord.length > 0) {
          setConditioning(conditioningCoord)
        }
    })
      .catch(err => console.log(err));
  }
  //plug in the colors of the Line Series here:
  const myPalette = ["red", "blue", "#03fce7", "green", "orange", "purple", "blue", "pink", "#e9b7ed"]

  return (

    <div className="row reps-chart">
      <div className="chart col-sm-10">
        <p className="chart-title">Exercise Reps by Muscle Group</p>
      </div>
      <div className="chart col-sm-11 mb-4">
        <DiscreteColorLegend orientation="horizontal" colors={myPalette} items={ITEMS} />
      </div>
      <div className="chart col-sm-9">
        {/* plug in the x and y range here */}
        <FlexibleWidthXYPlot height={300}
          xDomain={lastDrawLocation && [
            lastDrawLocation.left,
            lastDrawLocation.right
          ]}
          yDomain={lastDrawLocation && [
            lastDrawLocation.bottom,
            lastDrawLocation.top
          ]}
          colorType="category"
          colorDomain={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
          colorRange={myPalette}>

          {/* colors are according to index numbers within the myPalette array */}
          <LineSeries data={chest} color={0} />
          <LineSeries data={back} color={1} />
          <LineSeries      onValueMouseOver={() => setHoverCoord(shoulders.x)}
          onValueMouseOut={() => setHoverCoord(null)} data={shoulders} color={2} />
          <LineSeries data={biceps} color={3} />
          <LineSeries data={triceps} color={4} />
          <LineSeries data={quadriceps} color={5} />
          <LineSeries data={hamstringsAndGlutes} color={6} />
          <LineSeries data={abdominals} color={7} />
          <LineSeries data={conditioning} color={8} />
          <Highlight
            onBrushEnd={area => setLastDrawLocation(area)}
            onDrag={area => {
              setLastDrawLocation({
                bottom: lastDrawLocation.bottom + (area.top - area.bottom),
                left: lastDrawLocation.left - (area.right - area.left),
                right: lastDrawLocation.right - (area.right - area.left),
                top: lastDrawLocation.top + (area.top - area.bottom)
              })

            }}
          />
          <XAxis title="days" />
          <YAxis title="reps" />
        {hoverCoord ? <Hint value={hoverCoord} /> : null}
        </FlexibleWidthXYPlot>
        <button
          className="showcase-button btn btn-sm"
          onClick={() => setLastDrawLocation(null)}
        >
          Reset Zoom
        </button>
      </div>
    </div>
  );
}

export default RepsChart;