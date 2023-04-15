import Link from "@docusaurus/Link";
import React from "react";

const HomepageHeader = () => {
  return (
    <div className="h-[92vh]  w-full flex justify-center items-center flex-col text-center">
      <div className="w-full max-w-4xl px-3 leading-relaxed tracking-wide sm:text-3xl lg:text-5xl  font-bold text-gray-800">
        <div>Data Infrastructure On Kubernetes For Real Time Analytics</div>
      </div>
      <div className="w-full max-w-2xl px-3 text-gray-600 my-4 text-xl">
        Using our products organisations can build internal open source data
        cloud without data leaving your network
      </div>
      <div className="flex space-x-9 items-center justify-center">
        <Link
          to="/docss/intro"
          className="px-7 text-sm py-2 w-40 bg-[#3056D3] text-white rounded-md hover:text-white hover:bg-blue-800 hover:no-underline"
        >
          Get Started
        </Link>
        <Link
          to="/docss/intro"
          className="px-7 text-sm py-2 w-40 bg-white border border-[#3056D3] text-gray-700 rounded-md hover:text-white hover:bg-blue-800 hover:no-underline"
        >
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default HomepageHeader;
