import React, { useEffect, useState } from 'react';
import JobCatagory from './JobCatagory';

const JobCatagorys = () => {
    const [catagory, setCatagory] = useState([])
    
    useEffect(()=>{
        fetch('Data/Catagory.json').then(res=>res.json()).then(data => setCatagory(data))
    },[])
    return (
        <div>
            <div className='md:w-[653px] mx-auto text-center mt-[130px]'>
            <h2 className='font-extrabold text-5xl  leading-10 text-[#1A1919]'>Job Category List</h2>
            <p className='mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-4 gap-6 mt-[32px]'>
                {
                    catagory.map((catagory,index) => <JobCatagory key={index} catagory={catagory} />)
                }
            </div>
        </div>
    );
};

export default JobCatagorys;