import React from 'react';
import { Button } from './Button';

const AppliedJob = ({job}) => {
    const {job_title,company_name,logo,salary,location,job_type} = job
    
    return (
        <div className='border rounded-lg p-8 flex justify-between items-center mb-6' >
            <div className='flex gap-6'>
                <img src={logo} alt="" className='w-36' />
                <div className='space-y-3'>
                    <h2 className='text-[#474747] font-semibold text-2xl'>{job_title}</h2>
                    <p className='text-[#757575]'>{company_name}</p>
                    <button className='border rounded border-[#7E90FE] p-2'>{job_type}</button>
                    <p className='text-[#757575]'><span className='mr-6'><i className="ri-map-pin-line"></i> Location: {location}</span> <span><i className="ri-money-dollar-circle-line"></i> Salary : {salary}</span></p>
                </div>
            </div>
            <Button text="View Details" />
            
        </div>
    );
};

export default AppliedJob;