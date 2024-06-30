import React from "react";
import first from "../../assets/imgs/case_studies/first.png";
import second from "../../assets/imgs/case_studies/second.png";
import third from "../../assets/imgs/case_studies/third.png";

import RecentCaseStudy from "./RecentCaseStudy";

import "../../styles.css";
import Line from "../Common/Line";

const imageSources = [first, second, third];

const RecentCaseStudies = () => {
  return (
    <>
    <div className="recent-case-studies relative">
      <Line className="mt-[20px]" />
      <h1 className="text-[35px] font-inter text-center m-[70px]">
        Our recent
        <span className="font-bold block">Case studies </span>
      </h1>

      <div className="container w-[85%] m-auto mt-[20px]">
        {imageSources.map((imgSrc, index) => (
          <RecentCaseStudy key={index} imgSrc={imgSrc} />
        ))}
        
         
      </div>
<button className="text-gradient text-[20px] font-semibold absolute right-[120px] cursor-pointer">
        Read more case studies
        <span className="text-gradient ml-2  ">&gt;</span>
      </button>
     
    </div>
        
   
          </>
  );
};

export default RecentCaseStudies;
