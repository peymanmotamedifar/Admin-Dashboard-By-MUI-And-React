import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        "mon": "January",
        "sale": 6800,
        "amt": 2400
    },
    {
        "mon": "February",
        "sale": 4700,
        "amt": 2400
    },
    {
        "mon": "March",
        "sale": 5200,
        "amt": 2400
    },
    {
        "mon": "April",
        "sale": 3250,
        "amt": 2400
    },
    {
        "mon": "May",
        "sale": 6900,
        "amt": 2400
    },
    {
        "mon": "June",
        "sale": 7500,
        "amt": 2400
    },

]






function BarChart1() {

    return (
        <ResponsiveContainer width={"100%"} height={"90%"}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke='#184E7761' />
                <XAxis dataKey="mon" stroke='#184e77' />
                <YAxis stroke='#184e77' />
                <Tooltip />
                <Legend />
                <Bar dataKey="sale" fill="#184e77" />
            </BarChart>
        </ResponsiveContainer>
    )
}


export default BarChart1