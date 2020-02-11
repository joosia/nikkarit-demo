import React from 'react';
import { VictoryLine, VictoryAxis, VictoryBar, VictoryLabel, VictoryScatter } from 'victory';

const App = ({ arrivalsData, accommodationData }) => {

   const getTickValues = data => {
      let values = []
      data.forEach(obj => {
         values.push(obj.x)
      })
      return values
   }
   const tickValues = getTickValues(arrivalsData)

   return (
      <div>
         {/* {arrivalsData.length === 0 || accommodationData.length === 0 &&
            <div className="loader-container">
               <div className="lds-dual-ring"></div>
            </div>
         } */}
         {/* {arrivalsData.length > 0 && accommodationData.length > 0 && */}
            <svg viewBox="0 0 450 350">
               <VictoryLabel text="Kuukausittaiset yöpymiset" x={225} y={30} textAnchor="middle" />
               <VictoryLabel
                  x={25}
                  y={55}
                  style={{
                     fontFamily: "inherit",
                     fontSize: 8,
                     fontStyle: "italic"
                  }}
                  text={"Yöpymiset (lkm)"}
               />
               <VictoryLabel
                  x={425}
                  y={55}
                  text={"Majoitusmyynti (milj. €)"}
                  style={{
                     textAnchor: "end",
                     fontFamily: "inherit",
                     fontSize: 8,
                     fontStyle: "italic"
                  }}
               />
               <g transform={"translate(0, 30)"}>
                  {/* Independent axis – Majoitusmyynti */}
                  <VictoryAxis
                     dependentAxis
                     domain={{ y: [0, 150000000] }}
                     tickFormat={(num) => `${num / 1000000}`}
                     domainPadding={20}
                     orientation="right"
                     standalone={false}
                     style={{
                        axisLabel: { fontSize: 8, padding: 42 },
                        tickLabels: { fontSize: 8, padding: 5 },
                     }}
                     data={accommodationData}
                  />
                  <VictoryBar
                     style={{
                        data: { fill: "#EDEDED" },
                        labels: { fontSize: 8 }
                     }}
                     data={accommodationData}
                     y="yAccommodation"
                     scale={{ x: "time", y: "linear" }}
                     standalone={false}
                     // labels={({ datum }) => `Bar y: ${datum.y}`}
                     domainPadding={20}
                     domain={{ y: [0, 150000000] }}
                     barWidth={20}
                     animate={{
                        onLoad: { duration: 300 }
                     }}
                  />
                  {/* Independent axis – Yöpymiset */}
                  <VictoryAxis
                     dependentAxis
                     domain={{ y: [0, 5000000] }}
                     domainPadding={20}
                     orientation="left"
                     standalone={false}
                     style={{
                        axisLabel: { fontSize: 8, padding: 42 },
                        tickLabels: { fontSize: 8, padding: 5 },
                        // grid: { stroke: "lightgray", strokeDasharray: 10 }
                     }}
                  />
                  <VictoryLine
                     domainPadding={20}
                     interpolation={"natural"}
                     style={{
                        data: { stroke: "#093E78", strokeWidth: 1 }
                     }}
                     data={arrivalsData}
                     y="yArrivals"
                     // domain={{
                     //    x: tickValues,
                     //    y: [0, 5000000]
                     // }}
                     scale={{ x: "time", y: "linear" }}
                     standalone={false}
                     animate={{ onLoad: { duration: 300 } }}
                  />
                  <VictoryScatter
                     standalone={false}
                     // domain={{
                     //    x: tickValues,
                     //    y: [0, 5000000]
                     // }}
                     domainPadding={20}
                     bubbleProperty="amount"
                     maxBubbleSize={12}
                     minBubbleSize={5}
                     style={{
                        data: { fill: "#093E78" },
                        labels: { fontSize: 8 }
                     }}
                     data={arrivalsData}
                     y="yArrivals"
                     // labels={({ datum }) => `Scatter y: ${datum.y}`}
                     animate={{ onLoad: { duration: 300 } }}
                  />
                  {/* Shared independent axis */}
                  <VictoryAxis
                     domainPadding={20}
                     scale="time"
                     standalone={false}
                     tickValues={tickValues}
                     tickCount={12}
                     tickFormat={(t) => t.toLocaleString('fi-FI', { month: 'short' })}
                     style={{
                        tickLabels: { fontSize: 8, padding: 5 }
                     }}
                  />
               </g>
            </svg>
         {/* } */}
      </div>
   );
}

export default App;
