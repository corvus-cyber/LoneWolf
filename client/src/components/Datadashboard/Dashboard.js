import '../node_modules/react-vis/dist/style.css';
import React, { Component } from 'react';
import TestChart from "./PieChart"

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <TestChart/>
            </div>
        )
    }
}
