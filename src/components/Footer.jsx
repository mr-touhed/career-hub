import React from 'react';
import icons from '../assets/Icons/Group 9969.png'
const Footer = () => {
    return (
        <div className='  bg-black '>
            <div className=' md:h-[289px] md:flex justify-center items-center md:container text-center md:text-left'>
            <div className=' text-[#ffffffb3] md:flex justify-center'>
            
            <div className='md:w-[300px] space-y-4 '>
                <h2 className="md:font-extrabold text-3xl text-white">CareerHub</h2>
                <p className='text-sm'>
                There are many variations of passages of Lorem Ipsum , <br/>but the majority have suffered alteration in some form.
                </p>
                <img src={icons} alt="" className='w-[90%]' />
            </div>
            <div className='md:ml-[137px] md:flex justify-between md:gap-36'>
            <div className='space-y-6'>
                <h2 className="font-extrabold text-3xl text-white">Company</h2>
                <ul className='space-y-3'>
                    <li>About Us</li>
                    <li>Work</li>
                    <li>Latest News</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className='space-y-6'>
                <h2 className="font-extrabold text-3xl text-white">Product</h2>
                <ul className='space-y-3'>
                    <li>Prototype</li>
                    <li>Plans & Pricing</li>
                    <li>Customers</li>
                    <li>Integrations</li>
                </ul>
            </div>
            <div className='space-y-6'>
                <h2 className="font-extrabold text-3xl text-white">Support</h2>
                <ul className='space-y-3'>
                    <li>Help Desk</li>
                    <li>Sales</li>
                    <li>Become a Partner</li>
                    <li>Developers</li>
                </ul>
            </div>
            <div className='space-y-3'>
                <h2 className="font-extrabold text-3xl text-white">Contact</h2>
                <p>524 Broadway , NYC</p>
                <p>+1 777 - 978 - 5570</p>
            </div>
            </div>
            
        </div>
        </div>
            <hr className='md:container'/>
            <div className='md:flex justify-between text-white container'>
                <span>@2023 CareerHub. All Rights Reserved</span>  <span>Powered by Devs Career</span>
                
            </div>
        </div>
        
    );
};

export default Footer;