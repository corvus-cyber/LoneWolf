import React, { useEffect, useState } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { RadialChart } from '../../../node_modules/react-vis';
import "./chartStyle.css";
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';

function PieChart() {

    const [chest, setChest] = useState([{ x: 0, y: 0 }]);
    const [back, setBack] = useState([{ x: 0, y: 0 }]);
    const [shoulders, setShoulders] = useState([{ x: 0, y: 0 }]);
    const [biceps, setBiceps] = useState([{ x: 0, y: 0 }]);
    const [triceps, setTriceps] = useState([{ x: 0, y: 0 }]);
    const [quadriceps, setQuadriceps] = useState([{ x: 0, y: 0 }]);
    const [hamstringsAndGlutes, setHamstringAndGlutes] = useState([{ x: 0, y: 0 }]);
    const [abdominals, setAbdominals] = useState([{ x: 0, y: 0 }]);

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
                let firstDate;
                // console.log(loginUserStats);
                if (loginUserStats[0]) {
                    firstDate = new Date(loginUserStats[0].date).getTime();
                }

                function determineXCoordinate(data) {
                    return (new Date(data.date).getTime() - firstDate) / (1000 * 3600 * 24)
                }

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