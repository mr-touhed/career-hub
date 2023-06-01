import React from 'react';
import "./JobDetails.css"
import Header from '../../../components/Header';
import { Button } from '../../../components/Button';
import { useParams } from 'react-router-dom';
import JobData from "../../../assets/data/jobData.json"
import { addToStore } from '../../../utilities/storeData';
const JobDetails = () => {
    const {id} = useParams()
    const jobs= JobData.applications
    const jobInfo = jobs.find(job => job.id === id)
    
    const {description,educational_requirements,email,experiences,job_title,location,phone,responsibility,salary} = jobInfo
    return (
        <div>
            <div className="banner-container ">
                    <div className='container'>
                    <Header/>
                            <h2 className='text-center mt-11 text-6xl'>Job Details</h2>
                    </div>
             </div>
             <div className='container h-[810px] flex justify-center items-center'>
                        <div className=' flex gap-8'>
                                <div className='space-y-6 '>
                                    <p className='leading-8 text-[#757575]'><span className='font-extrabold text-black'>Job Description: :</span> {description} </p>
                                    <p className='leading-8 text-[#757575]'>
                                    <span className='font-extrabold text-black'>Job Responsibility :</span> {responsibility} </p>
                                    <p className='font-extrabold'>Educational Requirements:</p>
                                    <p className='text-[#757575]'>{educational_requirements}</p>
                                    <p className='font-extrabold'>Experiences:</p>
                                    <p className='text-[#757575]'>{experiences}</p>
                                </div>
                                <div className='  ' >
                                        <div className='pl-6 border rounded-lg w-[424px] bg-gradient-to-r from-[#7e8ffe55] to-[#7e8ffe4d] p-4'>
                                        <div className='space-y-3 mt-6'>
                                        <h2 className='font-extrabold text-xl text-[#1A1919]'>Job Details</h2>
                                        <hr className='bg-[#757575]'/>
                                        <p className='leading-8 text-[#757575]'><i className="ri-money-dollar-circle-line text-[#7E90FE]"></i> <span className='font-extrabold text-[#474747]'>Salary :</span> {salary} (Per Month)</p>
                                        <p className='leading-8 text-[#757575]'><i className="ri-briefcase-fill text-[#7E90FE]"></i> <span className='font-extrabold text-[#474747]'>Job Title :</span> {job_title}</p>
                                        </div>
                                        <div className='space-y-3 mt-6'>
                                        <p className='font-extrabold text-xl text-[#1A1919]'>Contact Information</p>
                                        <hr/>
                                        <p className='leading-8 text-[#757575]'><i className="ri-phone-line text-[#7E90FE]"></i> <span className='font-extrabold text-[#474747]'>Phone :</span> {phone}</p>
                                        <p className='leading-8 text-[#757575]'><i className="ri-mail-line text-[#7E90FE]"></i> <span className='font-extrabold text-[#474747]'>Email :</span> {email}</p>
                                        <p className='leading-8 text-[#757575]'><i className="ri-map-pin-line text-[#7E90FE]"></i> <span className='font-extrabold text-[#474747]'>Address :</span> {location}</p>
                                        </div>
                                        </div>
                                        <Button  text="Apply Now" className= " mt-6 ml-6" onClick={()=>addToStore(id)}/>
                                </div>
                                    
                        </div>
             </div>
        </div>
    );
};

export default JobDetails;