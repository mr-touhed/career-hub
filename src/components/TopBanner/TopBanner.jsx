import React from 'react';
import './TopBanner.css'
import { Button } from '../Button';
import img from "../../assets/All Images/P3OLGJ1 copy 1.png"
const TopBanner = () => {
    return (
        <div className='md:flex mt-[41px] '>
            <div className='md:w-[570px] space-y-4'>
            <h2 className=' font-bold md:text-[56px] text-5xl text-center md:text-left'>One Step Closer To Your <span className='text-style'> Dream Job</span></h2>
            <p className='font-medium text-lg leading-8 text-[#757575] mb-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <Button  text="Get Started" className='ml-[30%]'/>
            </div>
            <div className='md:w-[816px] ml-auto'>
                <img src={img} alt="" className=''/>
            </div>
        </div>
    );
};

export default TopBanner;