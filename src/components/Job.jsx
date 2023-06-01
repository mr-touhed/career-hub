import React from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

const Job = ({job}) => {
    const navigate = useNavigate()
    
    const {company_name,location,logo,salary,id,job_type,job_title} = job;
    const handelDetails = (id) =>{
        navigate(`job/${id}`)

    }
    return (
        <div className='border border-[#E8E8E8]  rounded-lg p-[40px]'>
            <img src={logo} alt="" className='h-[40px]' />
            <h2>{job_title}</h2>
            <p>{company_name}</p>
            <div className='my-3'>
            <button className='border rounded border-[#7E90FE] p-2' >{job_type}</button>
            </div>
            <p className='my-3'><span ><i className="ri-map-pin-line"></i> {location}</span> <span><i className="ri-money-dollar-circle-line"></i> Salary : {salary}</span></p>
            <br/>
            <Button text="View Details" onClick={()=> handelDetails(id)} />
        </div>
    );
};

export default Job;