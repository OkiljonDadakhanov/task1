import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselCard from './CarouselCard';
import code from "../../assets/icons/code.png";
import mobile from '../../assets/icons/mobile.png';
import testing from '../../assets/icons/testing.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

import '../../styles/Swiper.css';

// Import required modules
import { Pagination, Autoplay, Scrollbar } from 'swiper/modules';

const bgStyle = {
  background: '#E7DAED',
};

export default function App() {
  return (
    <>
      <div className="container border-2" style={bgStyle} id='swiper'>
        <h1 className='font-inter font-bold text-[35px] text-center mt-7 pt-7 pb-10'>Services we offer</h1>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          scrollbar={{
            el: '.swiper-scrollbar',
            draggable: true,
          }}
          modules={[Pagination, Autoplay, Scrollbar]}
          className="mySwiper"
        >
          <div className="swiper-pagination"></div>

          <SwiperSlide className='rounded p-4 mb-10'>
            <CarouselCard imgSrc={code} title="Mobile App Development" description="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age." />
          </SwiperSlide>
          <SwiperSlide className='rounded p-4'>
            <CarouselCard imgSrc={mobile} title="Web Design & Development" description="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age." />
          </SwiperSlide>
          <SwiperSlide className='rounded p-4'>
            <CarouselCard imgSrc={testing} title="Software Testing Service" description="A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age." />
          </SwiperSlide>
          {/* Repeat slides as needed */}
        </Swiper>
      </div>
    </>
  );
}
