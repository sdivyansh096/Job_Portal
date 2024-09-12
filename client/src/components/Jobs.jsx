import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div>
      <Navbar />

      {/* Filter Page  */}
      <FilterCard />
      {/* Job Card  */}
      {jobsArray.map((item, index) => (
        <Job />
      ))}
    </div>
  );
};
export default Jobs;
