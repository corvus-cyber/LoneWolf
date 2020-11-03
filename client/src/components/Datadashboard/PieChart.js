import React, { useEffect, useState } from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { RadialChart } from '../../../node_modules/react-vis';
import "./chartStyle.css";
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';

function PieChart() {

    const [chest, setChest] = useState(0);
    const [back, setBack] = useState(0);
    const [shoulders, setShoulders] = useState(0);
    const [biceps, setBiceps] = useState(0);
    const [triceps, setTriceps] = useState(0);
    const [quadriceps, setQuadriceps] = useState(0);
    const [hamstringsAndGlutes, setHamstringAndGlutes] = useState(0);
    const [abdominals, setAbdominals] = useState(0);

    let chestReps = [];
    let backReps = [];
    let shouldersReps = [];
    let bicepsReps = [];
    let tricepsReps = [];
    let quadricepsReps = [];
    let hamstringsAndGlutesReps = [];
    let abdominalsReps = [];

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
                let currentWeekData = [];
                function calculateTimePassed(date) {
                    return (new Date().getTime() - new Date(date).getTime()) / (1000 * 3600 * 24);
                }

                currentWeekData = loginUserStats.filter(data => {
                    switch (currentDay) {
                        case 0:
                            return calculateTimePassed(data.date) < 1;
                        case 1:
                            return calculateTimePassed(data.date) < 2;
                        case 2:
                            return calculateTimePassed(data.date) < 3;
                        case 3:
                            return calculateTimePassed(data.date) < 4;
                        case 4:
                            return calculateTimePassed(data.date) < 5;
                        case 5:
                            return calculateTimePassed(data.date) < 6;
                        case 6:
                            return calculateTimePassed(data.date) < 7;
                    }
                })

                //   console.log(currentWeekData);

                currentWeekData.filter(data => {
                    switch (data.muscleGroup) {
                        case "Chest":
                            chestReps.push(data.reps)
                            break;
                        case "Back":
                            backReps.push(data.reps)
                            break;
                        case "Shoulders":
                            shouldersReps.push(data.reps)
                            break;
                        case "Triceps":
                            tricepsReps.push(data.reps)
                            break;
                        case "Biceps":
                            bicepsReps.push(data.reps)
                            break;
                        case "Quadriceps":
                            quadricepsReps.push(data.reps)
                            break;
                        case "Hamstrings and Glutes":
                            hamstringsAndGlutesReps.push(data.reps)
                            break;
                        case "Abs":
                            abdominalsReps.push(data.reps)
                    }
                })

            }).then(() => {
                let totalReps;
                function determineReps(array) {
                    totalReps = array.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                }
                
                if (abdominalsReps.length > 0) {
                    determineReps(abdominalsReps);
                    setAbdominals(totalReps);
                  };
                  if (backReps.length > 0) {
                    determineReps(backReps);
                    setBack(totalReps);
                  };
                  if (chestReps.length > 0) {
                    determineReps(chestReps);
                    setChest(totalReps);
                  };
                  if (shouldersReps.length > 0) {
                    determineReps(shouldersReps);
                    setShoulders(totalReps);
                  };
                  if (tricepsReps.length > 0) {
                    determineReps(tricepsReps);
                    setTriceps(totalReps);
                  };
                  if (bicepsReps.length > 0) {
                    determineReps(bicepsReps);
                    setBiceps(totalReps);
                  };
                  if (quadricepsReps.length > 0) {
                    determineReps(quadricepsReps);
                    setQuadriceps(totalReps);
                  };
                  if (hamstringsAndGlutesReps.length > 0) {
                    determineReps(hamstringsAndGlutesReps);
                    setHamstringAndGlutes(totalReps)
                  };
            })
            .catch(err => console.log(err));
    }

    const totalRepsAll = chest + back + shoulders + triceps + biceps + quadriceps + hamstringsAndGlutes + abdominals
    
    const myData = [
        {
            angle: chest/totalRepsAll * 360,
            innerRadius: 0.7,
            label: "Chest"
        },
        {
            angle: back/totalRepsAll * 360,
            innerRadius: 0.7,
            label: "Back"
        },
        {
            angle: shoulders/totalRepsAll * 360,
            innerRadius: 0.7,
            label: "Shoulders"
        },
        {
            angle: triceps/totalRepsAll * 360,
            innerRadius: 0.7,
            label: "Triceps"

        },
        {
            angle: biceps/totalRepsAll * 360,
            innerRadius: 0.7,
            label: "Biceps"
        },
        {
            angle: quadriceps/totalRepsAll * 360,
            innerRadius: 0.7,
            label: "Quadriceps"
        },
        {
            angle: hamstringsAndGlutes/totalRepsAll * 360,
            innerRadius: 0.7,
            label: "Hamstrings and Glutes"
        },
        {
            angle: abdominals/totalRepsAll * 360,
            innerRadius: 0.7,
            label: "Abs"
        }
    ];

    // if (chest == 0 && back == 0 && shoulders == 0 && triceps !== 0 && biceps !== 0 && quadriceps !== 0 && hamstringsAndGlutes !== 0 && abdominals !== 0){}}

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