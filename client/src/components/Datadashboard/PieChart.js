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
                innerRadius: 0.7,
                label: "exercise 2"
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
            }
        ];


        return (
            <div className="chart col-lg-4 col-md-4 col-sm-8 m-5">
                <p>Muscle Balance History</p>
                <RadialChart data={myData} width={300} height={300} padAngle={0.05} showLabels={true} 
                onMouseEnter={(event) => {
                    const labelText = event.target.childNodes[1].childNodes[0];
                    console.log(labelText);
                    labelText.style.display = "inline";
                    }}
                onMouseLeave={(event) => {
                    const labelText = event.target.childNodes[1].childNodes[0];
                    console.log(labelText);
                    labelText.style.display = "none";
                }}
                />
            </div>
        );
    }
}

export default PieChart;