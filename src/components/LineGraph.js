/* eslint-disable no-undef */
import React from 'react';
import { Spinner } from 'react-bootstrap'
import { VictoryLine, VictoryScatter, VictoryChart, VictoryAxis, VictoryBar, VictoryLabel, VictoryZoomContainer } from 'victory';

const LineGraph = ({ data, startDate, endDate }) => {

   return (
      <>
         {data.length === 0 &&
            <Spinner animation="border" />
         }
         {data.length > 0 &&
            <>
               <VictoryChart
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
                  <VictoryLabel text="Yöpymiset" x={225} y={30} textAnchor="middle" />
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
                     label="Yöpymiset (lkm)"
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
