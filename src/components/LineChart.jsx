
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';





const data = [
  {
    "mon": "January",
    "sale": 6800,
    "pv": 2400,
    "amt": 2400
  },
  {
    "mon": "February",
    "sale": 4700,
    "pv": 2400,
    "amt": 2400
  },
  {
    "mon": "March",
    "sale": 5200,
    "pv": 2400,
    "amt": 2400
  },
  {
    "mon": "April",
    "sale": 3250,
    "pv": 2400,
    "amt": 2400
  },
  {
    "mon": "May",
    "sale": 6900,
    "pv": 2400,
    "amt": 2400
  },
  {
    "mon": "June",
    "sale": 7500,
    "pv": 2400,
    "amt": 2400
  },

]


function LineChart() {


  return (


    <ResponsiveContainer width={"100%"} height={"90%"}>
      <AreaChart data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2D83C5" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#184e77" stopOpacity={0} />
          </linearGradient>

        </defs>
        <XAxis dataKey="mon" stroke='#184e77' />
        <YAxis stroke='#184e77' />
        <CartesianGrid strokeDasharray="3 3" stroke='#184E777B' />
        <Tooltip />
        <Area type="natural" dataKey="sale" stroke="#184e77" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}


export default LineChart