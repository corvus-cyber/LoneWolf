import React, { Component } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { XYPlot, LineSeries } from 'react-vis/dist';
import "./chartStyle.css"

export default class RepsChart extends Component {
    render() {
        const data = [
            {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
          ];
          return (
            <div className="chart col-md-8 col-sm-8 m-5">
              <p>Expercise Reps Chart</p>
              <XYPlot height={300} width={300}>
                <LineSeries data={data} />
              </XYPlot>
            </div>
          );
    }
}
