import React from 'react';

interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ stepNumber, title, description }) => (
  <div className="p-7 border-2 border-slate-300 rounded-md w-[30%]">
    <div className="flex flex-col justify-around gap-3">
      <h2 className="text-[#1A202C] font-bold text-[18px]">
        <span className="text-gradient font-inter text-[18px]">#{stepNumber}</span> {title}
      </h2>
      <p className="text-[#718096] leading-6">{description}</p>
    </div>
  </div>
);

export default Step;
