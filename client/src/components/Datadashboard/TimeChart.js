import React, { useEffect, useState }from 'react';
import "../../../node_modules/react-vis/dist/style.css"
import { XYPlot, VerticalGridLines, HorizontalGridLines, LineSeries, XAxis, YAxis } from 'react-vis/dist';
import "./chartStyle.css";
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';


function TimeChart () {

  const [chest, setChest] = useState([{x: 0, y: 0}]);
  const [back, setBack] = useState([{x: 0, y: 0}]);
  const [shoulders, setShoulders] = useState([{x: 0, y: 0}]);
  const [biceps, setBiceps] = useState([{x: 0, y: 0}]);
  const [triceps, setTriceps] = useState([{x: 0, y: 0}]);
  const [quadriceps, setQuadriceps] = useState([{x: 0, y: 0}]);
  const [hamstringsAndGlutes, setHamstringAndGlutes] = useState([{x: 0, y: 0}]);
  const [abdominals, setAbdominals] = useState([{x: 0, y: 0}]);
  const [conditioning, setConditioning] = useState([{x: 0, y: 0}]);

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
        console.log(loginUserStats);
        if (loginUserStats[0]){
          firstDate = new Date(loginUserStats[0].date).getTime();
        }

        function determineXCoordinate(data){
          return (new Date(data.date).getTime() - firstDate)/ (1000 * 3600 * 24)
        }

      }).then(() => { 
        console.log(statsData);

      })

      .catch(err => console.log(err));
  }

    //plug in the colors of the Line Series here:
    const myPalette = ["red", "blue", "#03fce7", "green", "orange", "purple", "black", "pink", "#8af542"]
    
    return (
      <div className="chart col-lg-4 col-md-4 col-sm-8 m-5 text-center">
        <p>Cumulative Exercise Time Chart</p>

        {/* plug in the x and y range here */}
        <XYPlot height={300} width={300} xDomain={[0, 30]} yDomain={[0, 20]}
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
          <XAxis title="days" />
          <YAxis title="secs" />
        </XYPlot>
      </div>
    );
  
}

export default TimeChart;