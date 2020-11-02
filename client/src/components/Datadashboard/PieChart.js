import React, { useEffect, useState } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { RadialChart } from '../../../node_modules/react-vis';
import "./chartStyle.css";
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';

function PieChart() {

    const [chest, setChest] = useState();
    const [back, setBack] = useState();
    const [shoulders, setShoulders] = useState();
    const [biceps, setBiceps] = useState();
    const [triceps, setTriceps] = useState();
    const [quadriceps, setQuadriceps] = useState();
    const [hamstringsAndGlutes, setHamstringAndGlutes] = useState();
    const [abdominals, setAbdominals] = useState();

    useEffect(() => {
        loadStats()
    }, [])

    const { user } = useAuth0()
    let currentUserToken = user.sub;

    function loadStats() {
        let statsData = [];

        API.getRepsAndTime()
            .then(res => {
                //all user stats
                statsData = res.data;
                //grab only the stats of the logged-in user
                let loginUserStats = statsData.filter(data => data.token === currentUserToken);
                let currentDay = new Date().getDay();
                let currentWeekData;
                // console.log(loginUserStats);
                //condense data to current weeks 

                let timePassed = (new Date().getTime() - new Date("Fri Oct 30 2020 00:00:00 GMT-0600").getTime()) / (1000 * 3600 * 24);
                console.log(timePassed);

                // function determineXCoordinate(data) {
                //     return (new Date(data.date).getTime() - firstDate) / (1000 * 3600 * 24)
                // }

            }).then(() => {
                // console.log(statsData);

            })

            .catch(err => console.log(err));
    }

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
        }
    ];


    return (
        <div className="row pie-chart">
        <div className="chart col-md-8 col-sm-8 text-center">
            <p className="chart-title">Muscle Balance History This Week</p>
            <RadialChart data={myData} width={300} height={300} padAngle={0.05} />
        </div>
        </div>
    );
}

export default PieChart;