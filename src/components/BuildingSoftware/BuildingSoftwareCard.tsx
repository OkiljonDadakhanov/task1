import React from 'react';

import testimonials from '../../utils/BuildingSoftware';
import Line from '../Common/Line';
import TestimonialCard from './TestimonialCard';

const BuildingSoftwareCard: React.FC = () => (
  <>
    <div className="relative">
      <div>
        <Line />
        <h1 className="text-[35px] font-inter text-center">
          Way of building
          <span className="font-bold block">Great Software</span>
        </h1>
      </div>
      <div className="flex flex-col basis-1/2 justify-center gap-1 p-4 w-full">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} reverse={index % 2 === 0} />
        ))}
      </div>
    </div>
  </>
);

export default BuildingSoftwareCard;
