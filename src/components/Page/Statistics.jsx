import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Header from '../Header';

const Statistics = () => {
    const data =[
        {name: "Assignment 1", mark: 60},
        {name: "Assignment 2", mark: 60},
        {name: "Assignment 3", mark: 60},
        {name: "Assignment 4", mark: 53},
        {name: "Assignment 5", mark: 60},
        {name: "Assignment 6", mark: 60},
    ]
    return (
        <div>
            <div className="banner-container ">
                    <div className='container'>
                    <Header/>
                            <h2 className='text-center mt-11 text-6xl'>Statistics</h2>
                    </div>
             </div>
            <div style={{ width: '90%',height:"100vh" }} className='p-12 my-8'>
            <h4 className='text-center mb-4 text-2xl'>All Assignment synchronized AreaCharts</h4>

            <ResponsiveContainer width="100%" height={400}>
                <AreaChart width={500}
            height={200}
            data={data}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
            </div>



        </div>
    );
};

export default Statistics;