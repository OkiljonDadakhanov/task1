import React from "react";
import first from "../assets/imgs/case_studies/first.png";
import second from "../assets/imgs/case_studies/second.png";
import third from "../assets/imgs/case_studies/third.png";

import '../styles.css'

const RecentCaseStudies = () => {
  return (
    <div className="recent-case-studies">
      <div className="line h-1 w-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mt-[50px] mb-8 mx-auto"></div>
      <h1 className="text-[35px] font-inter text-center m-[70px]">
        Our recent
        <span className="font-bold block">Case studies </span>
      </h1>

      <div className="container w-[85%] m-auto">
        <div className="first__container flex justify-between items-center border-2 rounded-xl">
          <div className="case__studies__stat w-[50%]">
            <img src={first} alt="FIRST CASE STUDY" />
          </div>
          <div className="case__studies__info w-[50%]    p-6 relative">
            <h1 className="font-inter font-semibold text-[#2D3748]  text-[28px] font-semibold mb-5">
              Website Design for SCFC Canada
            </h1>
            <p className="text-[#4A5568] leading-8">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
            <button className="text-gradient font-semibold absolute right-10 bottom-[-25px]">
              Read more
              <span className="text-gradient ml-2  ">
                &gt;
              </span>
            </button>
          </div>
        </div>
        <div className="second__container">
          <div className="case__studies__stat">
            <img src={second} alt="SECOND CASE STUDY" />
          </div>
          <div className="case__studies__info">
            <h1 className="font-inter font-semibold text-[#2D3748]">
              Website Design for SCFC Canada
            </h1>
            <p className="text-[#4A5568]">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
          </div>
        </div>
        <div className="third__container">
          <div className="case__studies__stat">
            <img src={third} alt="THIRD CASE STUDY" />
          </div>
          <div className="case__studies__info">
            <h1 className="font-inter font-semibold text-[#2D3748]">
              Website Design for SCFC Canada
            </h1>
            <p className="text-[#4A5568]">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
            <button className="text-gradient">
              Read more
              <span className="text-gradient ">
                &gt;
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCaseStudies;
