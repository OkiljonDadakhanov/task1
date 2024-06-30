import React from 'react';

interface FeaturedCardProps {
  image: string;
  arrow: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ image, arrow }) => (
  <div className="featured__card  p-5">
    <img src={image} alt="featured" />
    <p className="text-[#2D3748] font-inter font-medium text-[16px] mt-4 w-[80%]">How to Build a Scalable <span className='block'> Application up to 1 Million</span> Users  on AWS</p>
    <div className="btn flex items-center gap-2 mt-3 ml-[135px]">
      <button className="text-[#57007B] font-inter font-semibold text-[16px]">Read More</button>
      <img src={arrow} alt="arrow" className="w-4 h-4 cursor-pointer" />
    </div>
  </div>
);

export default FeaturedCard;
