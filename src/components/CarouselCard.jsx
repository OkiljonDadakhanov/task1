import React from "react";
import '../styles.css';

const CarouselCard = ({ title, description, imgSrc }) => {
  return (

    <div className="rounded border-2 border-pink-600 gradient-border-wrapper p-5">
      
      <img src={imgSrc} className='border-2 border-pink-600 gradient-border-wrapper rounded-full mb-2' alt="code" style={{ width: '60px', height: '60px' }} />
      <h2 className="text-gradient font-inter font-semibold text-lg ml-1">{title}</h2>
      <p className="text-gradient m-2">
        {description}
      </p>
    </div>
  );
};

export default CarouselCard;