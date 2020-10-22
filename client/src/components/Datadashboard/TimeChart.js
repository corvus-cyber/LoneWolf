import React, { Component } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { XYPlot, VerticalGridLines, HorizontalGridLines, LineSeries, XAxis, YAxis } from 'react-vis/dist';
import "./chartStyle.css"

export default class TimeChart extends Component {
  render() {
    const chest = [
      { x: 0, y: 1 },
      { x: 7, y: 1 },
      { x: 14, y: 2 },
      { x: 21, y: 2 },
      { x: 28, y: 3 }
    ];
    const back = [
      { x: 0, y: 2 },
      { x: 7, y: 2 },
      { x: 14, y: 3 },
      { x: 21, y: 3 },
      { x: 28, y: 4 }
    ];
    const shoulders = [
      { x: 0, y: 2 },
      { x: 7, y: 3 },
      { x: 14, y: 4 },
      { x: 21, y: 5 },
      { x: 28, y: 6 }
    ];
    const biceps = [
      { x: 0, y: 5 },
      { x: 7, y: 6 },
      { x: 14, y: 7 },
      { x: 21, y: 8 },
      { x: 28, y: 9 }
    ];
    const triceps = [
      { x: 0, y: 9 },
      { x: 7, y: 10 },
      { x: 14, y: 11 },
      { x: 21, y: 12 },
      { x: 28, y: 13 }
    ];
    const quadriceps = [
      { x: 0, y: 8 },
      { x: 7, y: 5 },
      { x: 14, y: 8 },
      { x: 21, y: 8 },
      { x: 28, y: 9 }
    ];
    const hamstringsAndGlutes = [
      { x: 0, y: 8 },
      { x: 7, y: 5 },
      { x: 14, y: 10 },
      { x: 21, y: 12 },
      { x: 28, y: 13 }
    ];
    const abdominals = [
      { x: 0, y: 10 },
      { x: 7, y: 5 },
      { x: 14, y: 19 },
      { x: 21, y: 12 },
      { x: 28, y: 16 }
    ];
    const conditioning = [
        { x: 0, y: 20 },
        { x: 7, y: 16 },
        { x: 14, y: 5 },
        { x: 21, y: 12 },
        { x: 28, y: 16 }
      ]
    //plug in the colors of the Line Series here:
    const myPalette = ["red", "blue", "#03fce7", "green", "orange", "purple", "black", "pink", "#8af542"]
    
    return (
      <div className="chart col-md-8 col-sm-8 m-5">
        <p>Cumulative Exercise Time Chart (Week Total)</p>

        {/* plug in the x and y range here */}
        <XYPlot height={300} width={700} xDomain={[0, 30]} yDomain={[0, 20]}
          colorType="category"
          colorDomain={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
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
          <LineSeries data={conditioning} color={8} />

          {/* plug in x and y axis title here */}
          <XAxis title="dates" />
          <YAxis title="mins" />
        </XYPlot>
      </div>
    );
  }
}