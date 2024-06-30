import React from "react";

const ReadMoreBtn: React.FC = () => {
  return (
    <div>
      <button className="text-gradient font-semibold absolute right-10 bottom-[-25px]">
        Read more
        <span className="text-gradient ml-2  ">&gt;</span>
      </button>
    </div>
  );
};

export default ReadMoreBtn;
