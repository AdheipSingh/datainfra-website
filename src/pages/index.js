import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import Header from "../components/Header";
import HomepageHeader from "../components/HomePageHeader";
import Product from "../components/Product";
import About from "../components/About";
import Mission from "../components/Mission";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="w-full ">
      {/* <Header /> */}
      <Layout>
        <div className="relative ">
          <img src={"img/herobg.svg"} className="w-full" />
          <div className="absolute top-72 w-full flex flex-col items-center max-w-8xl mx-auto">
            <div className="text-center text-white px-3 leading-relaxed tracking-wide sm:text-3xl lg:text-5xl  font-bold">
              <div>"Control Planes for running Data on Kubernetes"</div>
              <div>We Handle the Infra, You Drive Insights."</div>
            </div>
            <div className="w-full max-w-2xl text-center px-3 text-white my-4 text-xl">
              With our products, organizations can build an internal open-source
              data cloud that keeps data within their network.
            </div>
            <div className="flex space-x-9 items-center justify-center mt-5">
              <Link
                to="/docss/intro"
                className="px-7 text-sm py-2 w-40 justify-center flex bg-[#18285D] text-white rounded-md hover:text-white hover:bg-blue-800 hover:no-underline"
              >
                Get Started
              </Link>
              <Link
                to="/docss/intro"
                className="px-7 text-sm py-2 w-40 justify-center flex bg-white border border-[#18285D] text-gray-700 rounded-md hover:text-white hover:bg-blue-800 hover:no-underline"
              >
                Blogs
              </Link>
            </div>

            <div className="mt-10">
              <img src={"img/herovector.png"} className="" />
            </div>
          </div>
        </div>

        {/* ABOUT and MISSION */}
        <div className="bg-[#F2F2FF] py-10 min-h-screen relative">
          <img
            src={"img/aboutbg.svg"}
            className="top-0 absolute right-0 z-10"
          />
          <div className="w-full z-50 max-w-[85vw] mx-auto grid my-20 gap-5 md:grid-cols-4">
            {/* <div className="flex flex-col pt-32">
              <div className="text-4xl text-gray-800 font-extrabold">
                About Us
              </div>
              <div className="mt-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less.
              </div>
              <div className="mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less.
              </div>
              <div className="mt-10">
                <Link
                  to="/docss/intro"
                  className="px-7 text-sm py-2 w-40 justify-center flex bg-[#18285D] text-white rounded-md hover:text-white hover:bg-blue-800 hover:no-underline"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="z-50 flex justify-end">
              <img src={"img/about.png"} className="z-50 w-3/4" />

            </div> */}
            <div className="z-50 md:col-span-4 grid grid-cols-2 gap-4">
              <div className="text-3xl text-gray-800 font-extrabold z-50">
                <div>Our Products</div>
              </div>
              <div className="text-3xl text-gray-800 font-extrabold z-50">
                <div>Our Libraries</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg justify-center items-center flex flex-col p-3">
              <div className="bg-blue-800 rounded-md shadow p-2 w-12 h-12 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#fff"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <div className="mt-6 text-lg text-gray-800 text-center font-extrabold mb-3">
                Led Ask Possible Mistress
              </div>
              <div className="text-gray-600 text-center">
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </div>
              <Link
                href={"/product"}
                className="my-2 w-full p-2 flex justify-center items-center bg-blue-800 text-white rounded-lg"
              >
                Read More
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg justify-center items-center flex flex-col p-3">
              <div className="bg-blue-800 rounded-md shadow p-2 w-12 h-12 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#fff"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <div className="mt-6 text-lg text-gray-800 text-center font-extrabold mb-3">
                Led Ask Possible Mistress
              </div>
              <div className="text-gray-600 text-center">
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </div>
              <button className="my-2 w-full p-2 bg-blue-800 text-white rounded-lg">
                Read More
              </button>
            </div>
            <div className="z-50 bg-white rounded-lg shadow-lg justify-center items-center flex flex-col p-3">
              <div className="z-50 bg-purple-600 rounded-md shadow p-2 w-12 h-12 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#fff"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <div className="mt-6 text-lg text-gray-800 text-center font-extrabold mb-3">
                Led Ask Possible Mistress
              </div>
              <div className="text-gray-600 text-center">
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </div>
              <button className="my-2 w-full p-2 bg-blue-800 text-white rounded-lg">
                Read More
              </button>
            </div>
            <div className="z-50 bg-white rounded-lg shadow-lg justify-center items-center flex flex-col p-3">
              <div className="z-50 bg-purple-600 rounded-md shadow p-2 w-12 h-12 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#fff"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <div className="mt-6 text-lg text-gray-800 text-center font-extrabold mb-3">
                Led Ask Possible Mistress
              </div>
              <div className="text-gray-600 text-center">
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </div>
              <button className="my-2 w-full p-1 text-sm bg-blue-800 text-white rounded-lg">
                Read More
              </button>
            </div>
          </div>
          <div className="w-full max-w-[85vw] mx-auto mt-2">
            <div>
              <div className="text-sm text-indigo-600">
                OUR MISSION & OUR VISION
              </div>
              <div className="text-3xl text-gray-800 font-extrabold max-w-3xl">
                Our mission is to enable seamless analytical data processing on
                Kubernetes with zero friction.
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-10 mt-20">
              <div>
                <div className="bg-white rounded-md shadow p-2 w-12 h-12 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </div>
                <div className="mt-6 text-lg text-gray-800 font-extrabold mb-3">
                  Led Ask Possible Mistress
                </div>
                <div className="text-gray-600">
                  Connection has put impossible own apartments boisterous. At
                  jointure ladyship an insisted so humanity he. Friendly
                  bachelor entrance to on by.
                </div>
              </div>
              <div>
                <div className="bg-white rounded-md shadow p-2 w-12 h-12 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </div>
                <div className="mt-6 text-lg text-gray-800 font-extrabold mb-3">
                  Led Ask Possible Mistress
                </div>
                <div className="text-gray-600">
                  Connection has put impossible own apartments boisterous. At
                  jointure ladyship an insisted so humanity he. Friendly
                  bachelor entrance to on by.
                </div>
              </div>
              <div>
                <div className="bg-white rounded-md shadow p-2 w-12 h-12 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </div>
                <div className="mt-6 text-lg text-gray-800 font-extrabold mb-3">
                  Led Ask Possible Mistress
                </div>
                <div className="text-gray-600">
                  Connection has put impossible own apartments boisterous. At
                  jointure ladyship an insisted so humanity he. Friendly
                  bachelor entrance to on by.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community */}
        <div className="w-full max-w-[85vw] mx-auto grid md:grid-cols-2 mt-20">
          <div className="flex justify-center flex-col space-y-5">
            <div className="text-4xl text-gray-800 font-extrabold">
              Join Our Community
            </div>
            <div>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less.
            </div>
            <div className="flex space-x-9 items-center mt-5">
              <Link
                to="/docss/intro"
                className="px-7 text-sm py-2 w-40 justify-center flex bg-[#18285D] text-white rounded-md hover:text-white hover:bg-blue-800 hover:no-underline"
              >
                Join Slack
              </Link>
              <Link
                to="/docss/intro"
                className="px-7 text-sm py-2 w-40 justify-center flex bg-white border border-[#18285D] text-gray-700 rounded-md hover:text-white hover:bg-blue-800 hover:no-underline"
              >
                Github
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
            <img src={"img/community.png"} />
          </div>
        </div>

        {/* <HomepageHeader /> */}
        <main>
          {/* <HomepageFeatures /> */}
          {/* <Product /> */}
          {/* <About /> */}
          {/* <Mission /> */}
          <Blogs />
          {/* <Pricing /> */}
          {/* <Footer /> */}
        </main>
      </Layout>
    </div>
  );
}
