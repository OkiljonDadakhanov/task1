// src/components/CustomerFeedback.jsx
import React from "react";
import second from "../../assets/imgs/customers/9.png";
import first from "../../assets/imgs/customers/6.png";
import stars from "../../assets/imgs/customers/stars.png";

const CustomerFeedback = ({ customer }) => {
  return (
    <div className="customer-card p-6">
      <img src={first} alt="first" />
      <p className="customer-comment">{customer.comment}</p>
      <img src={second} alt="second inline-block" />
      <img
        src={customer.imgSrc}
        alt={customer.name}
        className="customer-image ml-[50px] "
      />
      <img src={stars} alt="stars" className="ml-[60px] mb-[10px]" />
      <div className="customer-info">
        <p className="customer-name text-[#57007B] text-18 font-bold font-inter">
          {customer.name}
        </p>
        <p className="customer-role">{customer.role}</p>
      </div>
    </div>
  );
};

export default CustomerFeedback;
