import React from 'react';


interface VerticalLineProps {
    className?: string;
  }

const VerticalLine: React.FC<VerticalLineProps> = ({ className }) => (
  <div className="relative">
    <hr className={` ${className} absolute w-1 h-[60px] bg-gradient-to-b from-[#F76680] to-[#57007B] border-none `} />
  </div>
);

export default VerticalLine;
