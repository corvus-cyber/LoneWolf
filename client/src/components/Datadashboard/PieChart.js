import React, { Component } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { RadialChart } from '../../../node_modules/react-vis';
import "./chartStyle.css"

class PieChart extends Component {
    render() {
        const myData = [
            {
                angle: 40,
                innerRadius: 0.7,
                label: "exercise 1"
            },
            {
                angle: 40,
                innerRadius: 0.7,
                label: "exercise 2"
            },
            {
                angle: 40,
                innerRadius: 0.7,
                label: "exercise 3"
            },
            {
                angle: 40,
                innerRadius: 0.7,
                label: "exercise 4"

            },
            {
                angle: 40,
                innerRadius: 0.7,
                label: "exercise 5"
            },
            {
                angle: 40,
                innerRadius: 0.7,
                label: "exercise 6"
            },
            {
                angle: 40,
                innerRadius: 0.7,
                label: "exercise 7"
            },
            {
                angle: 40,
                innerRadius: 0.7,
                label: "exercise 8"
            },
            {
                angle: 40,
                innerRadius: 0.7,
                label: "exercise 7"
            }
        ];


        return (
            <div className="chart col-lg-4 col-md-4 col-sm-8 m-5">
                <p>Muscle Balance History</p>
                <RadialChart data={myData} width={300} height={300} padAngle={0.05}/>
            </div>
        );
    }
}

export default PieChart;