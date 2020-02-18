import React from 'react';
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, Legend, Scatter } from 'recharts';

const LineGraphRecharts = ({ data, dataTitle }) => {
   return (
      <div style={{ width: '100%', height: "50vh" }}>
         <ResponsiveContainer>
            <ComposedChart
               data={data}
            >
               <YAxis
                  yAxisId="left"
                  style={{ fontSize: 13 }}
                  tickSize={0}
               />
               <YAxis
                  yAxisId="right"
                  orientation="right"
                  style={{ fontSize: 13 }}
                  tickSize={0}
               />
               <Tooltip
                  cursor={false}
                  contentStyle={{ background: "#FFD7CE", border: "none" }}
                  animationDuration={200}
               />
               <Legend />
               <Bar
                  name="Majoitusmyynti (€)"
                  yAxisId="right"
                  dataKey="yAccommodation"
                  barSize={30}
                  maxBarSize={40}
                  fill="#EDEDED"
                  animationDuration={400}
               />
               <Line
                  name={`${dataTitle} (lkm)`}
                  yAxisId="left"
                  dataKey="yArrivals"
                  dot={{ r: 15, fill: "#093E78", stroke: "none" }}
                  activeDot={{ stroke: '#FF7B5F', r: 15, fill: "#FF7B5F" }}
                  stroke={"#093E78"}
                  strokeWidth={3}
                  onClick={() => console.log("clicked")}
                  type="monotone"
                  animationDuration={400}
               />
               {/* <Scatter
                  name="Yöpymiset (lkm)"
                  yAxisId="left"
                  dataKey="yArrivals"
                  fill="#093E78"
                  line={{ stroke: "#093E78", strokeWidth: 3, lineType: "monotone" }}
                  stroke={"#093E78"}
                  activeDot={{ stroke: 'none', r: 15, fill: "#FF7B5F" }}
               /> */}
               <XAxis
                  dataKey="x"
                  tickCount="12"
                  padding={{ left: 40, right: 40 }}
                  tickSize={0} />
            </ComposedChart>
         </ResponsiveContainer>
      </div >
   )
}

export default LineGraphRecharts

// export default class LineGraphRecharts extends PureComponent {

//    render() {
//       return (
//          <div style={{ width: '100%', height: "50vh" }}>
//             <ResponsiveContainer>
//                <ComposedChart
//                   width={500}
//                   height={400}
//                   data={this.props.data}
//                   margin={{
//                      top: 20, right: 20, bottom: 20, left: 20,
//                   }}
//                >
//                   <XAxis dataKey="x" tickCount="12" padding={{ left: 40, right: 40 }} />
//                   <YAxis yAxisId="left" />
//                   <YAxis yAxisId="right" orientation="right" />
//                   <ZAxis type="number" dataKey="amount" />
//                   <Tooltip />
//                   <Legend />
//                   <Bar yAxisId="right" dataKey="yAccommodation" barSize={30} maxBarSize={40} fill="#EDEDED" />
//                   <Scatter yAxisId="left" dataKey="yArrivals" fill="#093E78" line={{ stroke: '#093E78', strokeWidth: 1 }} />
//                </ComposedChart>
//             </ResponsiveContainer>
//          </div>
//       );
//    }
// }
