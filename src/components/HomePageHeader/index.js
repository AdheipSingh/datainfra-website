import Link from "@docusaurus/Link";
import React from "react";

const HomepageHeader = () => {
  return (
    <div className="h-[85vh] w-full flex justify-center items-center flex-col text-center relative overflow-hidden">
      <div className="w-full max-w-8xl px-3 leading-relaxed tracking-wide sm:text-3xl lg:text-5xl  font-bold text-gray-800">
        <div>"Control Planes for running Data on Kubernetes"</div>
        <div>We Handle the Infra, You Drive Insights."</div>
      </div>
      <div className="w-full max-w-2xl px-3 text-gray-600 my-4 text-xl">
        With our products, organizations can build an internal open-source data
        cloud that keeps data within their network.
      </div>
      <div className="flex space-x-9 items-center justify-center">
        <Link
          to="/docs/intro"
          className="px-7 text-sm py-2 w-40 bg-[#18285D] text-white rounded-md hover:text-white hover:bg-blue-800 hover:no-underline"
        >
          Get Started
        </Link>
        <Link
          to="/docs/intro"
          className="px-7 text-sm py-2 w-40 bg-white border border-[#18285D] text-gray-700 rounded-md hover:text-white hover:bg-blue-800 hover:no-underline"
        >
          Blogs
        </Link>
      </div>
      <div className="absolute -left-20 -bottom-9 h-56 w-56 rounded-full border-[20px] border-gray-100" />
      <div className="absolute -right-20 -top-9 h-56 w-56 rounded-full border-[20px] border-gray-100" />
      <div className="absolute -left-20 -bottom-9 h-56 w-56 rounded-full border-[20px] border-gray-100" />
      <div className="absolute -left-20 -bottom-9 h-56 w-56 rounded-full border-[20px] border-gray-100" />
 
    </div>
  );
};

export default HomepageHeader;
