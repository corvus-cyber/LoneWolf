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

    const [label, setLabel] = useState("");

    let chestSets = [];
    let backSets = [];
    let shouldersSets = [];
    let bicepsSets = [];
    let tricepsSets = [];
    let quadricepsSets = [];
    let hamstringsAndGlutesSets = [];
    let abdominalsSets = [];

    useEffect(() => {
        loadStats()
    }, [])

    const { user } = useAuth0()

    function loadStats() {

        API.getRepsAndTime(user.sub)
            .then(res => {
                //grab only the stats of the logged-in user
                let loginUserStats = res.data;
                let currentDay = new Date().getDay();
                let currentWeekData = [];

                if (loginUserStats.length === 0){
                    setLabel("Add workouts to see your muscle balance.");
                    document.getElementsByClassName("rv-radial-chart")[0].style.display = "none";
                }

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


                currentWeekData.filter(data => {
                    switch (data.muscleGroup) {
                        case "Chest":
                            chestSets.push(data.sets)
                            break;
                        case "Back":
                            backSets.push(data.sets)
                            break;
                        case "Shoulders":
                            shouldersSets.push(data.sets)
                            break;
                        case "Triceps":
                            tricepsSets.push(data.sets)
                            break;
                        case "Biceps":
                            bicepsSets.push(data.sets)
                            break;
                        case "Quadriceps":
                            quadricepsSets.push(data.sets)
                            break;
                        case "Hamstrings and Glutes":
                            hamstringsAndGlutesSets.push(data.sets)
                            break;
                        case "Abs":
                            abdominalsSets.push(data.sets)
                    }
                })

            }).then(() => {
                let totalSetsSum;
                function determineSets(array) {
                    totalSetsSum = array.reduce(function (a, b) {
                        return a + b;
                    }, 0);
                }
                
                if (abdominalsSets.length > 0) {
                    determineSets(abdominalsSets);
                    setAbdominals(totalSetsSum);
                  };
                  if (backSets.length > 0) {
                    determineSets(backSets);
                    setBack(totalSetsSum);
                  };
                  if (chestSets.length > 0) {
                    determineSets(chestSets);
                    setChest(totalSetsSum);
                  };
                  if (shouldersSets.length > 0) {
                    determineSets(shouldersSets);
                    setShoulders(totalSetsSum);
                  };
                  if (tricepsSets.length > 0) {
                    determineSets(tricepsSets);
                    setTriceps(totalSetsSum);
                  };
                  if (bicepsSets.length > 0) {
                    determineSets(bicepsSets);
                    setBiceps(totalSetsSum);
                  };
                  if (quadricepsSets.length > 0) {
                    determineSets(quadricepsSets);
                    setQuadriceps(totalSetsSum);
                  };
                  if (hamstringsAndGlutesSets.length > 0) {
                    determineSets(hamstringsAndGlutesSets);
                    setHamstringAndGlutes(totalSetsSum)
                  };
            })
            .catch(err => console.log(err));
    }

    const totalSetsAll = chest + back + shoulders + triceps + biceps + quadriceps + hamstringsAndGlutes + abdominals
    
    const myData = [
        {
            angle: chest/totalSetsAll * 360,
            innerRadius: 0.7,
            label: "Chest"
        },
        {
            angle: back/totalSetsAll * 360,
            innerRadius: 0.7,
            label: "Back"
        },
        {
            angle: shoulders/totalSetsAll * 360,
            innerRadius: 0.7,
            label: "Shoulders"
        },
        {
            angle: triceps/totalSetsAll * 360,
            innerRadius: 0.7,
            label: "Triceps"

        },
        {
            angle: biceps/totalSetsAll * 360,
            innerRadius: 0.7,
            label: "Biceps"
        },
        {
            angle: quadriceps/totalSetsAll * 360,
            innerRadius: 0.7,
            label: "Quadriceps"
        },
        {
            angle: hamstringsAndGlutes/totalSetsAll * 360,
            innerRadius: 0.7,
            label: "Hamstrings and Glutes"
        },
        {
            angle: abdominals/totalSetsAll * 360,
            innerRadius: 0.7,
            label: "Abs"
        }
    ];

    // const myPalette = ["#cf352d", "#2e5cdb", "#81ebe2", "#67d676", "#dea833", "#9e0fab", "#e6f029", "#d6b6cf", "#04592d"]

    return (
        <div className="row pie-chart">
            <div className="chart col-md-8 col-sm-8 text-center">
                <p className="chart-title">Muscle Balance History This Week</p>
                <RadialChart 
                onValueClick={(event)=>{
                    setLabel(event.label)
                    }}
                    data={myData} width={300} height={300} padAngle={0.05}
                    ></RadialChart>
                <p className="pie-chart-label">{label}</p>
            </div>
        </div>
    );
}

export default PieChart;