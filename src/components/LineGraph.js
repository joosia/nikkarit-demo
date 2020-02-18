import React from 'react';
import { VictoryLine, VictoryAxis, VictoryBar, VictoryLabel, VictoryScatter, VictoryTooltip } from 'victory';

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
         <svg viewBox="0 0 450 350">
            <VictoryLabel />
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
                  domain={{ y: [0, 10000000] }}
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
                  // labels={({ datum }) => datum.yAccommodation}
                  style={{
                     data: { fill: "#EDEDED" },
                     labels: { fontSize: 8 }
                  }}
                  data={accommodationData}
                  y="yAccommodation"
                  // scale={{ x: "time", y: "linear" }}
                  standalone={false}
                  // labels={({ datum }) => `Bar y: ${datum.y}`}
                  domainPadding={20}
                  domain={{ y: [0, 10000000] }}
                  barWidth={20}
                  animate={{
                     onLoad: { duration: 300 }
                  }}
               />
               {/* Independent axis – Yöpymiset */}
               <VictoryAxis
                  dependentAxis
                  domain={{ y: [0, 500000] }}
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
                  domain={{ y: [0, 500000] }}
                  domainPadding={10}
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
                  // scale={{ x: "time", y: "linear" }}
                  standalone={false}
                  animate={{ onLoad: { duration: 300 } }}
               />
               <VictoryScatter
                  // labels={({ datum }) => datum.yArrivals}
                  labels={({ datum }) => `${datum.x}\nTapahtumia`}
                  labelComponent={
                     <VictoryTooltip
                        flyoutStyle={{ fill: "#FFD7CE", stroke: "none", }}
                        cornerRadius={0}
                     />
                  }
                  standalone={false}
                  domain={{ y: [0, 500000] }}
                  // domain={{
                  //    x: tickValues,
                  //    y: [0, 5000000]
                  // }}
                  domainPadding={10}
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
                  events={[{
                     target: "data",
                     eventHandlers: {
                        onMouseOver: () => {
                           return [
                              {
                                 target: "data",
                                 mutation: () => ({ style: { fill: "#FFD7CE", width: 30 } })
                              }, {
                                 target: "labels",
                                 mutation: () => ({ active: true })
                              }
                           ];
                        },
                        onMouseOut: () => {
                           return [
                              {
                                 target: "data",
                                 mutation: () => { }
                              }, {
                                 target: "labels",
                                 mutation: () => ({ active: false })
                              }
                           ];
                        }
                     }
                  }]}
               />
               {/* Shared independent axis */}
               <VictoryAxis
                  domainPadding={20}
                  // scale="time"
                  standalone={false}
                  tickValues={tickValues}
                  tickCount={12}
                  style={{
                     tickLabels: { fontSize: 8, padding: 5 }
                  }}
               />
            </g>
         </svg>
   );
}

export default App;
