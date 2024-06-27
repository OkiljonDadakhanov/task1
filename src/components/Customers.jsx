// src/components/Customers.jsx
import React, { useEffect } from "react";
import "../styles.css";
import "../styles/customersstyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import customers from "../utils/customers";
import CustomerFeedback from "../components/CustomerFeedbacks";

const Customers = () => {
  useEffect(() => {
    const updateSlides = (swiper) => {
      const slides = swiper.slides;
      slides.forEach((slide) => {
        slide.classList.remove(
          "swiper-slide-active",
          "swiper-slide-prev",
          "swiper-slide-next"
        );
      });
      const activeIndex = swiper.activeIndex;
      slides[activeIndex].classList.add("swiper-slide-active");
      if (slides[activeIndex - 1]) {
        slides[activeIndex - 1].classList.add("swiper-slide-prev");
      }
      if (slides[activeIndex + 1]) {
        slides[activeIndex + 1].classList.add("swiper-slide-next");
      }
    };

    const swiper = document.querySelector(".swiper").swiper;
    updateSlides(swiper);
    swiper.on("slideChange", () => updateSlides(swiper));
  }, []);

  return (
    <>
      <div className="flex justify-center min-h-screen">
        <div className="container w-[85%] text-center mt-[170px]">
          <div className="line h-1 w-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-8 mx-auto"></div> 
          <h1 className="text-[35px] font-inter">
            Why customers love
            <span className="font-bold block">working with us</span>
          </h1>
        </div>
      </div>
      <div className="swiper">
        <Swiper
          slidesPerView={5}
          centeredSlides={true}
          initialSlide={2}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {customers.map((customer) => (
            <SwiperSlide key={customer.id}>
              <CustomerFeedback customer={customer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Customers;
