import React from "react";

const SectionHeading = ({ title, description, color }) => {
  return (
    <div
      className={color === "black" ? "text-gray-800 my-5" : "text-white my-5"}
    >
      <div className="text-center text-4xl font-bold">{title}</div>
      <div className="text-center text-base my-2 max-w-xl mx-auto">{description}</div>
    </div>
  );
};

export default SectionHeading;
