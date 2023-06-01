import React from 'react';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex justify-between items-center'>
            <h3 className='font-extrabold text-xl'>Devs Career</h3>
            <nav>
                <NavLink className={({isActive}) => isActive ? "text-red-500" :"linkFont"} to="/"> Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "text-red-500" :"linkFont"} to="/statistics"> Statistics</NavLink>
                <NavLink className={({isActive}) => isActive ? "text-red-500" :"linkFont"} to="/applied"> Applied Jobs</NavLink>
                <NavLink className={({isActive}) => isActive ? "text-red-500" :"linkFont"} to="/blog"> Blog</NavLink>
            </nav>
            <a className='w-[190px] h-[65px] text-white font-extrabold text-xl leading-5 rounded-lg bg-gradient-to-r from-[#7E90FE] 0%  to-[#9873FF] 100% flex justify-center items-center'  href="##job-items"> Star Applying</a>
           
        </div>
    );
};

export default Header;