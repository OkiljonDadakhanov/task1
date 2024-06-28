import React from "react";

import arrow from "../assets/icons/arrow.png";
import company from "../assets/imgs/company.png";
import play from "../assets/icons/play.png";
import btnLeft from "../assets/icons/btnLeft.png";
import btnRight from "../assets/icons/btnRight.png";
import "../styles.css";

const CaseStudies = () => {
  return (
    <div>
      <div className="container  w-[85%] m-auto flex justify-between items-center mt-[70px]">
        
        <div className="company__info w-[38%] relative">
          <div className="half-circle relative bottom-[70px]"></div>
          <div className="line h-1 w-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-8"></div>
          <h2>
            <span className="text-[35px]">Leading companies trust us </span>
            <span className="font-inter font-bold text-[35px]">
              to develop software
            </span>
          </h2>
          <p className="text-[#718096] leading-9">
            We <span className="text-gradient"> add development capacity </span>
            to tech teams. Our value isn't limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <p className="text-[#57007B] text-[16px] cursor-pointer mt-4">
            See more Informations
          </p>
          <img
            src={arrow}
            className="absolute bottom-[140px] left-[180px] cursor-pointer"
            alt="arrow"
          />
          <div className="line h-1 w-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-8 relative top-20"></div>

          <h1 className="text-[35px] mt-[20px] relative top-20">
       
            Meet the People
            <span className="font-inter font-bold block ">
              We are Working With{" "}
            </span>
          </h1>
        </div>

        <div className="company__img relative">
          <img src={company} alt="" className="" />
          <div className="animate cursor-pointer   ">
            
            <img
            src={play}
            alt=""
            className="absolute bottom-[230px] left-[245px] "
          />
          </div>
          
           <div className="btns relative">
            <img src={btnLeft} alt="btn" className="absolute top-8 left-[-20px]" />
            <img src={btnRight} alt="btn" className="absolute" />
          </div>

          <div className="half-circle2 relative top-[122px]"></div>

         
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
