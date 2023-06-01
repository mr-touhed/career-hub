import React from "react";
import JobSection from "./JobSection";

const JobFeatured = () => {
  return (
    <div id="#job-items">
      <div className="md:w-[653px] mx-auto text-center mt-[130px]">
        <h2 className="font-extrabold text-5xl  leading-10 text-[#1A1919]">
          Featured Jobs
        </h2>
        <p className="mt-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <JobSection/>
    </div>
  );
};

export default JobFeatured;
