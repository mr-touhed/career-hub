import React from 'react';

const JobCatagory = ({catagory}) => {
    const {img,title,Available_job} = catagory
    return (
        <div className='p-[40px] bg-gradient-to-r from-[#7e90fe0d] 0%  to-[#9873ff0d] 100% rounded-lg flex justify-center items-center'>
                <div>
                <img src={img} alt="" />
                <h3 className='font-bold  text-[#474747] my-3' >{title}</h3>
                <p className='text-[#A3A3A3]'>{Available_job} Jobs Available</p>
                </div>
        </div>
    );
};

export default JobCatagory;