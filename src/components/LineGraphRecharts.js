import React from 'react';
import { ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, ZAxis, Tooltip, Legend } from 'recharts';

const LineGraphRecharts = ({ data }) => {
   return (
      <div style={{ width: '100%', height: "50vh" }}>
         <ResponsiveContainer>
            <ComposedChart
               width={500}
               height={400}
               data={data}
               margin={{
                  top: 20, right: 20, bottom: 20, left: 20,
               }}
            >
               <YAxis yAxisId="left" />
               <YAxis
                  yAxisId="right"
                  orientation="right"
                  ticks={[1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000]}
                  tickFormatter={(num) => `${num / 1000000}`}
               />
               <Tooltip />
               <Legend />
               <Bar yAxisId="right" dataKey="yAccommodation" barSize={30} maxBarSize={40} fill="#EDEDED" />
               <Line
                  yAxisId="left"
                  dataKey="yArrivals"
                  dot={{ r: 15, fill: "#093E78", stroke: "none" }}
                  activeDot={{ stroke: 'none', r: 15, fill: "#FF7B5F" }}
                  stroke={"#093E78"}
                  strokeWidth={1}
                  onClick={() => console.log("clicked")}
               />
               <XAxis dataKey="x" tickCount="12" padding={{ left: 40, right: 40 }} />
            </ComposedChart>
         </ResponsiveContainer>
      </div>
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
