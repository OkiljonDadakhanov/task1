import React from "react";
import product from "../assets/imgs/people.png";
// import cirlce from "../assets/icons/circle.png"; 

const Product = () => {
  return (
    <div>
      <div className="container w-[85%] m-auto flex justify-between items-center">
        <div className="product__info">
          <h1 className="inline-block">
            <span className="font-light text-[45px]"> Great </span>{" "}
            <span className=" text-pink-500  font-bold text-[45px]"> Product </span>{" "}
            <span className="font-light text-[45px]">is </span>
            <div>
            <span className="font-extrabold text-[53px]">  built by great </span>{" "}
            <span className="text-pink-500 font-extrabold text-[53px]">
             
              teams 
            </span> </div>
          </h1>
          <p className="font-inter mt-6">
            We help build and manage a team of world-class developers <span className="block leading-9"> to bring
            your vision to life</span>
          </p>
          <button className="mt-10 text-white bg-blue-600 py-3 px-5 rounded">Let's get started!</button>
        </div>
        <div className="product__pic">
          <img src={product} alt="product" />
        </div>


      </div>
      <div className="half-circle2 relative left-[590px]"></div>
    </div>
  );
};

export default Product;
