import React from "react";
import second from "../../assets/imgs/customers/9.png";
import first from "../../assets/imgs/customers/6.png";
import stars from "../../assets/imgs/customers/stars.png";


const CustomerFeedback = ({ customer }) => {
  return (

    <>


      
    <div className="customer-card p-6 flex flex-col items-center">
      <img src={first} alt="first" className="inline-block mb-2" />
      <p className="customer-comment mb-4 text-center">{customer.comment}</p>  

      <img src={second} alt="second inline-block" className="inline-block mb-2" />
      <img
        src={customer.imgSrc}
        alt={customer.name}
        className="customer-image ml-[0px] mb-2"
      />
      <img src={stars} alt="stars" className="ml-[
        
        0px] mb-[10px]" />
      <div className="customer-info text-center">
        <p className="customer-name text-[#57007B] text-18 font-bold font-inter mb-1">
          {customer.name}
        </p>
        <p className="customer-role">{customer.role}</p>
      </div>
    </div>
    </>
  );
};

export default CustomerFeedback;
