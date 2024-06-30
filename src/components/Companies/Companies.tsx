import React from "react";
import Marquee from "react-fast-marquee";

import sampath from '../../assets/imgs/companies/sampath.png';
import yellow from '../../assets/imgs/companies/yellow.png';
import techmate from '../../assets/imgs/companies/techmate.png';
import adclipse from '../../assets/imgs/companies/adclipse.png';
import pjc from '../../assets/imgs/companies/pjc.png';
import clickorder from '../../assets/imgs/companies/clickorder.png';
import breakthrough from '../../assets/imgs/companies/breakthrough.png';
import '../../styles.css'

const companyImages = [
  { src: sampath, alt: 'Sampath' },
  { src: yellow, alt: 'Yellow' },
  { src: techmate, alt: 'Techmate' },
  { src: adclipse, alt: 'Adclipse' },
  { src: pjc, alt: 'PJC' },
  { src: clickorder, alt: 'Clickorder' },
  { src: breakthrough, alt: 'Breakthrough' },
];

const Companies = () => {
  return (
    <div>
    
      <div className="companiesName flex justify-between w-[100%] h-auto items-center   mt-[120px] ">
      <Marquee>
        {companyImages.map((image, index) => (
          <img className='m-7' key={index} src={image.src} alt={`${image.alt} logo`} />
        ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Companies;
