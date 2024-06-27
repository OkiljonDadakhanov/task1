import React from 'react'
import ReadMoreBtn from "./ReadMoreBtn";





const RecentCaseStudy = ({imgSrc}) => {
  return (
    <div>
       <div className="first__container flex justify-between items-center border-2 rounded-xl mt-5 mb-7">
          <div className="case__studies__stat w-[50%]">
            <img src={imgSrc} alt="FIRST CASE STUDY" />
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
            
            <ReadMoreBtn />

          </div>
          
        </div>
        
    </div>
  )
}

export default RecentCaseStudy
