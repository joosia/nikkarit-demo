import React from 'react';
import { VictoryLine, VictoryScatter, VictoryChart, VictoryAxis, VictoryBar, VictoryLabel, VictoryZoomContainer } from 'victory';

const LineGraph = ({ data, startDate, endDate }) => {
   console.log(data)

   return (
      <>
         {data.length > 0 &&
            <>
               <VictoryChart
                  height={250}
                  scale={{ x: "time" }}
                  containerComponent={
                     <VictoryZoomContainer
                        zoomDimension="x"
                        allowZoom={false}
                        zoomDomain={
                           { x: [startDate, endDate] }
                        }
                     />
                  }>
                  <VictoryBar
                     style={{ data: { fill: "#EDEDED" } }}
                     barRatio={25}
                     data={data}
                  />
                  <VictoryLine
                     interpolation={"natural"}
                     style={{
                        data: { stroke: "#093E78", strokeWidth: 3 },
                     }}
                     data={data}
                  />
                  <VictoryScatter
                     data={data}

                  />
                  <VictoryAxis
                     style={{
                        tickLabels: { fontSize: 8, padding: 5 },
                     }}
                     tickCount={12}
                  />
                  <VictoryAxis
                     dependentAxis
                     style={{
                        axisLabel: { fontSize: 7, padding: 42 },
                        tickLabels: { fontSize: 8, padding: 5 },
                     }}
                  />
                  <VictoryAxis dependentAxis
                     orientation="right"
                     standalone={false}
                     style={{
                        axisLabel: { fontSize: 7, padding: 42 },
                        tickLabels: { fontSize: 8, padding: 5 },
                     }}
                  />
               </VictoryChart>
            </>
         }
      </>
   );
}

export default LineGraph;
