import React, { useState } from 'react';
import JobData from "../assets/data/jobData.json"
import Job from './Job';
import { Button } from './Button';
const JobSection = () => {
    const [seeMoreBtn,setSeeMoreBtn] = useState(true)
    const simpleJob = JobData.applications.slice(0,4)
    const [jobs,setJobs] = useState(simpleJob)
    
    const handelSeeMore = () =>{
        setJobs(JobData.applications)
        setSeeMoreBtn(false)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8'>
            {
                jobs.map(job => <Job key={job.id} job={job} />)
            }
           { seeMoreBtn && <Button text="Show More" className=' block md:ml-auto mb-6 ml-[30%]' onClick={handelSeeMore}/>}
        </div>
    );
};

export default JobSection;