import React from "react";
import NavbarLayout from "@theme/Navbar/Layout";
import NavbarContent from "@theme/Navbar/Content";
import Link from "@docusaurus/Link";

export default function Navbar() {
  return (
    <NavbarLayout>
      {/* <NavbarContent /> */}
      <div className="w-full flex items-center justify-between bg-[transparent] px-5 py-2 ">
        <Link to="/" className="hover:no-underline">
          <img src={"/img/logo-blue.png"} className="h-9" />
        </Link>
        <div className="md:flex flex-1 hidden items-center justify-center space-x-5">
          <Link to="/" className="hover:no-underline text-base text-gray-700">
            Home
          </Link>
          <Link to="/" className="hover:no-underline text-base text-gray-700">
            Solutions
          </Link>
          <Link
            to="/docs/intro"
            className="hover:no-underline text-base text-gray-700"
          >
            Docs
          </Link>
          <Link
            to="/blog"
            className="hover:no-underline text-base text-gray-700"
          >
            Blogs
          </Link>
          <Link
            to="/blog"
            className="hover:no-underline text-base text-gray-700"
          >
            Talk to us
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="px-7 text-sm py-2 bg-[#18285D] text-white rounded-md hover:text-white hover:bg-blue-800 hover:no-underline"
          >
            Request for consultation
          </Link>
        </div>
      </div>
    </NavbarLayout>
  );
}
