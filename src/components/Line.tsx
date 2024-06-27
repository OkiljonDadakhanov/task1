import React from "react";
import "../styles.css";
import "../styles/customersstyle.css";

const Line = ({className}: {className?: string}) => {
  return (
    <>
      <div className={"line h-1 w-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mt-8 mb-8 mx-auto " + className}></div>
    </>
  );
};

export default Line;
