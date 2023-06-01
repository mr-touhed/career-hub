import React, { useEffect, useState } from "react";
import Header from "../Header";
import { useLoaderData } from "react-router-dom";
import jobsData from "../../assets/data/jobData.json";
import AppliedJob from "../AppliedJob";
const Applied = () => {
  const [localJob,setLocalJob] = useState([]); // state for show job 
  const [filterJob,setFilterJob] = useState ([]) // store job set for filter
  const storeJob = useLoaderData();
  
  useEffect(() =>{
    
    const storJob = [];
    if(storeJob){
      for (const id of storeJob) {
       const job = jobsData.applications.find((job) => job.id === id);
       storJob.push(job)
     }
     
    }
    
    setFilterJob(storJob)
    setLocalJob(storJob)
  },[storeJob])
 
  
  const handleChange = (value) =>{
    
    const filterValue = filterJob.filter(job => job.job_type == value)
    setLocalJob(filterValue);
    
  }
  return (
    <div>
      <div className="banner-container ">
        <div className="container">
          <Header />
          <h2 className="text-center mt-11 text-6xl">Job Applied</h2>
        </div>
      </div>
      <div className="container my-8">
        {/* drop down menu filter  */}
        
       <div className="flex mb-8">
       <form  className="ml-auto border p-3 rounded-lg">
  
  <select name="cars" id="cars" className="w-full" onChange={(e) => handleChange(e.target.value)}>
    
    <option  >Filter By</option>
    <option value="Remote">Remote</option>
    <option value="Full-time">Full-time</option>
    
  </select>
 
</form>
       </div>
        {localJob.map((job) => (
          <AppliedJob key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Applied;
