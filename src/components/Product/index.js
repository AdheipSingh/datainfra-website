import React from "react";
import SectionHeading from "../SectionHeading";

const Product = () => {
  return (
    <div className="w-full bg-[#3056D3] flex flex-col h-screen py-10">
      <SectionHeading
        title={"Our Products"}
        description={
          "Using our products organisations can build internal open source data cloud without data leaving your network"
        }
        color={"white"}
      />
      <div className="w-full max-w-[85%] flex-1 p-2 mx-auto mt-20 grid md:grid-cols-2 realtive">
        <div className="flex flex-col justify-end">
          <div className="h-12 w-12 rounded-md bg-gray-50"></div>
          <div className="my-3 text-white text-2xl font-bold">BallasData</div>
          <div className="w-5/6">
            <div className="flex  ">
              <div className="mt-2 rounded-full h-2 w-2 bg-white"></div>
              <div className="text-white ml-2">
                A data centric control plane for building reliable
                infrastructure for data analytics.
              </div>
            </div>
            <div className="flex  ">
              <div className="mt-2 rounded-full h-2 w-2 bg-white"></div>
              <div className="text-white ml-2">
                Create environments, define sizes and deploy open source
                analytical databases on kubernetes
              </div>
            </div>
            <div className="flex  ">
              <div className="mt-2 rounded-full h-2 w-2 bg-white"></div>
              <div className="text-white ml-2">
                Enhance productivity and reduce time to ship data pipelines to
                production with full confidence
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 ">
          <img src="img/container.png" />
        </div>
      </div>
    </div>
  );
};

export default Product;
