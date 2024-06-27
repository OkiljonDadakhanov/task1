import React from 'react';
import '../index.css';
import Line from './Line';

interface Testimonial {
  title: string;
  description: string;
  quote: string;
  author: string;
  role: string;
  imgSrc: string;
  avatarSrc: string;
  reverse?: boolean;
}

const TestimonialCard: React.FC<Testimonial> = ({ title, description, quote, author, role, imgSrc, avatarSrc, reverse }) => (
  <div className="container w-[85%] m-auto mt-[220px]">
    <div className={`rounded-lg overflow-hidden flex flex-col md:flex-row w-full mb-3 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <img src={imgSrc} alt="testimonial" className="w-full h-[575px] h-[473px] object-cover rounded-lg " />
      <div className="p-8 flex flex-col justify-between w-full">
        <div className="w-[55%] relative">
          <h4 className="text-2xl font-semibold mb-4">{title}</h4>
          <p className="text-[#2D3748] mb-8">{description}</p>
          <Line className="h-16 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 absolute bottom-[-17px] mx-auto" />
          <p className="text-gradient italic mb-4  ml-4">"{quote}"</p>
        </div>
        <div className="flex items-center mt-4">
          <img src={avatarSrc} alt={author} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
