import React from 'react';
import Line from '../Common/Line';
import FeaturedCard from './FeaturedCard';
import first from '../../assets/imgs/featured/1.png';
import second from '../../assets/imgs/featured/2.png';
import third from '../../assets/imgs/featured/3.png';
import fourth from '../../assets/imgs/featured/4.png';
import fifth from '../../assets/imgs/featured/5.png';
import arrow from '../../assets/imgs/featured/arrow.png';
import Marquee from "react-fast-marquee";

const resources = [
  { image: first},
  { image: second },
  { image: third, },
  { image: fourth, },
  { image: fifth,  },
];

const FeaturedResources: React.FC = () => (
  <>
    <Line />
    <h1 className="text-[35px] font-inter text-center">
      Featured <span className="font-bold block">Resources</span>
    </h1>
    <Marquee pauseOnHover={true} style={{}}>
    <div className="featured__cards m-auto flex justify-between">
    
      {resources.map((resource, index) => (
        <FeaturedCard key={index} image={resource.image}  arrow={arrow} />
      ))}

    </div></Marquee>
  </>
);

export default FeaturedResources;
