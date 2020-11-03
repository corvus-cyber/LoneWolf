import React, { useEffect, useState } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { FlexibleWidthXYPlot, LineSeries, XAxis, YAxis, Highlight } from 'react-vis/dist';
import "./chartStyle.css";
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';
import DiscreteColorLegend from 'react-vis/dist/legends/discrete-color-legend';
import _ from "lodash";


function TimeChart() {

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
    let chestData = [];
    let backData = [];
    let shouldersData = [];
    let bicepsData = [];
    let tricepsData = [];
    let quadricepsData = [];
    let hamstringsAndGlutesData = [];
    let abdominalsData = [];
    let conditioningData = [];

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
        let firstDate;
        // console.log(loginUserStats);
        if (loginUserStats[0]) {
          firstDate = new Date(loginUserStats[0].date).getTime();
        }

        function determineXCoordinate(data) {
          return (
            Math.ceil((new Date(data.date).getTime() - firstDate) / (1000 * 3600 * 24))
          )
        }

        let final = [];

        function aggregateData(rawData, muscleGroup) {
          final = [];
          // array for aggreated muscleGroup and date
          //array of one object per date per mu.scle group
          let evenTime = rawData.map(data => {
            let evenTimeArray = data;
            evenTimeArray.date = new Date(data.date).toISOString().substring(0, 10);
            return evenTimeArray;
          })
          let grouped = _.groupBy(evenTime, "date");
          // console.log("grouped: " + JSON.stringify(grouped));
          // return an array of keys in Object grouped (dates)
          let keys = Object.keys(grouped);

          for (let i = 0; i < keys.length; i++) {
            let item = grouped[keys[i]];
            //item has exercises sorted by dates, but includes all muscle groups
            let sortedDateAndGroup = item.filter(data => data.muscleGroup === muscleGroup)
            if (sortedDateAndGroup.length !== 0) {
              let total = 0;
              for (let x = 0; x < sortedDateAndGroup.length; x++) {
                if (sortedDateAndGroup[x].totalTime) {
                  total += sortedDateAndGroup[x].totalTime;
                }
              }
              let object = {
                date: sortedDateAndGroup[0].date,
                totalTime: total,
                muscleGroup: sortedDateAndGroup[0].muscleGroup
              }
              final.push(object);
            }
          }
        return final;       
}


        backData = aggregateData(loginUserStats, "Back");
        chestData = aggregateData(loginUserStats, "Chest");
        shouldersData = aggregateData(loginUserStats, "Shoulders");
        tricepsData = aggregateData(loginUserStats, "Triceps");
        bicepsData = aggregateData(loginUserStats, "Biceps");
        quadricepsData = aggregateData(loginUserStats, "Quadriceps");
        hamstringsAndGlutesData = aggregateData(loginUserStats, "Hamstrings And Glutes");
        abdominalsData = aggregateData(loginUserStats, "Abs");
        conditioningData = aggregateData(loginUserStats, "Conditioning");

        
        function generateCoords(array){
          array.forEach( data => {
            let coord = { "x": determineXCoordinate(data), "y": data.totalTime };
            switch (data.muscleGroup) {
              case "Back":
                backCoord.push(coord);
                break;
              case "Chest":
                chestCoord.push(coord);
                break;
              case "Shoulders":
                shouldersCoord.push(coord);
                break;
              case "Triceps":
                tricepsCoord.push(coord);
                break;
              case "Biceps":
                bicepsCoord.push(coord);
                break;
              case "Quadriceps":
                quadricepsCoord.push(coord);
                break;
              case "Hamstrings and Glutes":
                hamstringsAndGlutesCoord.push(coord);
                break;
              case "Abs":
                abdominalsCoord.push(coord);
                break;
              case "Conditioning":
                conditioningCoord.push(coord);
            }
          })
        }

        generateCoords(chestData);
        generateCoords(backData);
        generateCoords(shouldersData);
        generateCoords(bicepsData);
        generateCoords(tricepsData);
        generateCoords(quadricepsData);
        generateCoords(hamstringsAndGlutesData);
        generateCoords(abdominalsData);
        generateCoords(conditioningData);

      }).then(() => {
        // console.log(backCoord);
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
  const myPalette = ["red", "blue", "#03fce7", "green", "orange", "purple", "white", "pink", "#8af542"]

  return (
    <div className="row time-chart">
      <div className="chart col-sm-10">
        <p className="chart-title">Exercise Time by Muscle Group</p>
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
          <LineSeries data={shoulders} color={2} />
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

          {/* plug in x and y axis title here */}
          <XAxis title="days" />
          <YAxis title="secs" />
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

export default TimeChart;