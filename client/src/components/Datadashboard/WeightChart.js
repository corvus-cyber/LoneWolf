import React, {useEffect} from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { XYPlot, VerticalGridLines, HorizontalGridLines, LineSeries, XAxis, YAxis } from 'react-vis/dist';
import "./chartStyle.css";
import API from "../../utils/API";
import auth0Client from '../../Auth';

function WeightChart () {
  useEffect(() => {
    loadStats()
  }, [])

  function loadStats() {
    API.getStats()
      .then(res => 
        {console.log(res)}
      )
      .catch(err => console.log(err));
  }

    const weightData = [
      { x: 0, y: 200},
      { x: 7, y: 190 },
      { x: 14, y: 180 },
      { x: 21, y: 186 },
      { x: 28, y: 180 },
    ];
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
          <XAxis title="dates"/>
          <YAxis title="lbs"/>
          <LineSeries data={weightData} stroke="red"/>
          <LineSeries data={LeanBodyMassdata} />
        </XYPlot>
      </div>
    );
}

export default WeightChart;
