import Link from "@docusaurus/Link";
import React from "react";

// const navigations = [
//   {
//     id: 1,
//     name: "Home",
//     href: "/",
//   },
// ];

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white px-5 py-2 ">
      <img src={"img/logo-blue.png"} className="h-9" />
      <div className="md:flex flex-1 hidden items-center justify-center space-x-5">
        <Link to="/" className="hover:no-underline text-sm text-gray-700">
          Home
        </Link>
        <Link to="/" className="hover:no-underline text-sm text-gray-700">
          Products
        </Link>
        <Link to="/docs" className="hover:no-underline text-sm text-gray-700">
          Docs
        </Link>
        <Link to="/blog" className="hover:no-underline text-sm text-gray-700">
          Blogs
        </Link>
      </div>
      <div>
        <Link
          to="/"
          className="px-7 text-sm py-2 bg-[#18285D] text-white rounded-md hover:text-white hover:bg-blue-800 hover:no-underline"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
