import React from "react";

const Mission = () => {
  return (
    <div className="w-full mt-20 bg-[#3056D3] flex flex-col min-h-screen">
      <div className="w-full max-w-[85%] flex-1 p-2 mx-auto mt-5 grid md:grid-cols-2 realtive">
        <div className="text-white w-5/6 pt-20">
          <div className="text-lg ">Our Mission</div>
          <div className="text-2xl font-bold my-2">
            We are on a mission to run data on kubernetes seamlessly with zero
            friction.
          </div>
          <div className="text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        </div>
        <div>
          <img src={"img/mission1.svg"} className="h-96" />
        </div>
      </div>
      <div className="w-full max-w-[85%] flex-1 p-2 mx-auto mt-5 grid md:grid-cols-2 realtive">
        <div>
          <img src={"img/vision (1).svg"} className="h-96" />
        </div>
        <div className="text-white w-5/6 pt-20">
          <div className="text-lg ">Our Mission</div>
          <div className="text-2xl font-bold my-2">
            We are on a mission to run data on kubernetes seamlessly with zero
            friction.
          </div>
          <div className="text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
