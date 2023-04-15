import React from "react";
import SectionHeading from "../SectionHeading";

const About = () => {
  return (
    <div className="mt-56">
      <SectionHeading
        title={"About Us"}
        description={
          "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        }
        color={"black"}
      />
      <div className="w-full max-w-[85%] flex-1 p-2 mx-auto mt-20 grid md:grid-cols-2 realtive">
        <div>
          <img src={"img/about.png"} />
        </div>
        <div className="flex flex-col justify-center ">
          <div className="text-xl text-blue-700 mb-5 font-semibold">
            Why choose us
          </div>
          <div className="font-extrabold text-4xl text-gray-800 mb-5">
            Make your customers happy by giving services.
          </div>
          <div className="text-gray-500 mb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less.
          </div>
          <div className="text-gray-500">
            A domain name is one of the first steps to establishing your brand.
            Secure a consistent brand image with a domain name that matches your
            business.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
