import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    {
        "mon": "January",
        "sale": 6800,

    },
    {
        "mon": "February",
        "sale": 4700,

    },
    {
        "mon": "March",
        "sale": 5200,

    },
    {
        "mon": "April",
        "sale": 3250,

    },
    {
        "mon": "April",
        "sale": 3250,

    },
    {
        "mon": "April",
        "sale": 3850,

    },



]



function PieChart1() {

    return (
        <ResponsiveContainer width={"100%"} height={"90%"}>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="sale"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#337FB9"
                    label
                />

                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    )
}


export default PieChart1