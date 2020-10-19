import React, { Component } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { RadialChart } from '../../../node_modules/react-vis';
import "./chartStyle.css"

class PieChart extends Component {
    render() {
        const myData = [
            {
                angle: 51,
                innerRadius: 0.7,
                label: "exercise 1"
            },
            {
                angle: 51,
                innerRadius: 0.7
            },
            {
                angle: 51,
                innerRadius: 0.7
            },
            {
                angle: 51,
                innerRadius: 0.7
            },
            {
                angle: 51,
                innerRadius: 0.7
            },
            {
                angle: 51,
                innerRadius: 0.7
            },
            {
                angle: 52,
                innerRadius: 0.7,
                color: "#8df542"
            }
        ];

        return (
            <div className="chart col-lg-4 col-md-4 col-sm-8 m-5">
                <p>Muscle Balance History</p>
                <RadialChart data={myData} width={300} height={300}/>
            </div>
        );
    }
}

export default PieChart;