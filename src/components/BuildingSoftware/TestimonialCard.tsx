import React from 'react';
import { motion } from 'framer-motion';
import '../../index.css';
import '../../styles.css';

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

const TestimonialCard: React.FC<Testimonial> = ({
  title,
  description,
  quote,
  author,
  role,
  imgSrc,
  avatarSrc,
  reverse,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, x: reverse ? 200 : -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="container w-[85%] m-auto mt-[80px]">
      <motion.div
        className={`rounded-lg overflow-hidden flex flex-col md:flex-row w-full mb-3 ${reverse ? 'md:flex-row-reverse' : ''}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.img
          src={imgSrc}
          alt="testimonial"
          className="w-full h-[575px] object-cover rounded-lg"
          initial={{ opacity: 0, x: reverse ? -200 : 200 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
        />
        <motion.div
          className="p-4 flex flex-col justify-between w-full gap-7"
          initial={{ opacity: 0, x: reverse ? 200 : -200 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
        >
          <div className="w-[60%] relative">
            <h4 className="text-2xl font-semibold mb-4">{title}</h4>
            <p className="text-[#2D3748] mb-8">{description}</p>

            <div className="vertical w-1 h-20 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 absolute mx-auto"></div>

            <p className="text-gradient italic mb-4 ml-4 p-1">"{quote}"</p>
          </div>
          <div className="flex items-center mt-4 mb-[160px]">
            <img src={avatarSrc} alt={author} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-semibold">{author}</p>
              <p className="text-gray-500">{role}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TestimonialCard;
