import React, { useEffect, useState } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { FlexibleWidthXYPlot, LineSeries, XAxis, YAxis, Highlight } from 'react-vis/dist';
import "./chartStyle.css";
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';
import DiscreteColorLegend from 'react-vis/dist/legends/discrete-color-legend';


function WeightChart() {

  const [weightData, setWeightData] = useState();
  const [leanBodyMassData, setLeanBodyMassData] = useState();
  const [lastDrawLocation, setLastDrawLocation] = useState(null);

  const ITEMS = [
    "Weight",
    "Lean Body Mass"
  ];

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

        let firstDate;
        if (loginUserStats[0]) {
          firstDate = new Date(loginUserStats[0].date).getTime();
        }

        function determineXCoordinate(data) {
          return (Math.ceil((new Date(data.date).getTime() - firstDate) / (1000 * 3600 * 24)))
        }


        //save weight information into loginUserWeight Array
        loginUserStats.filter(data => data.weight)
          .forEach(data => {
            const coordinate =
              { "x": determineXCoordinate(data), "y": data.weight }
            loginUserWeight.push(coordinate);
          });
        //save lean body mass information into loginUserLeanBodyMass Array 
        loginUserStats.filter(data => data.leanBodyMass)
          .forEach(data => {
            const coordinate =
              { "x": determineXCoordinate(data), "y": data.leanBodyMass }
            loginUserLeanBodyMass.push(coordinate)
          });
      }).then(() => {

        if (loginUserWeight.length === 0) {
          setWeightData([{ x: 0, y: 0 }])
        } else if (loginUserWeight.length > 0) {
          setWeightData(loginUserWeight);
        }

        if (loginUserLeanBodyMass.length === 0) {
          setLeanBodyMassData([{ x: 0, y: 0 }])
        } else if (loginUserLeanBodyMass.length > 0) {
          setLeanBodyMassData(loginUserLeanBodyMass);
        }
      })

      .catch(err => console.log(err));
  }
  const myPalette = ["green", "pink"]

  return (
    <div className="row weight-chart">
      <div className="chart col-sm-10">
        <p className="chart-title" >Weight and Lean Body Mass Chart</p>
      </div>
      <div className="chart col-sm-4 mb-4">
        <DiscreteColorLegend className="mb-4" orientation="horizontal" colors={myPalette} width={300} items={ITEMS} />
      </div>
      <div className="chart col-sm-9">
        <FlexibleWidthXYPlot animation height={300}
          xDomain={lastDrawLocation && [
            lastDrawLocation.left,
            lastDrawLocation.right
          ]}
          yDomain={lastDrawLocation && [
            lastDrawLocation.bottom,
            lastDrawLocation.top
          ]}
          colorType="category"
          colorDomain={[0, 1, 2, 3, 4, 5, 6, 7]}
          colorRange={myPalette}>
          <XAxis title="days" />
          <YAxis title="lbs" />
          <LineSeries data={weightData} color={0} />
          <LineSeries data={leanBodyMassData} color={1} />
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
        </FlexibleWidthXYPlot>
        <button
          className="showcase-button"
          onClick={() => setLastDrawLocation(null)}
        >
          Reset Zoom
        </button>
      </div>
    </div>
  );
}

export default WeightChart;
