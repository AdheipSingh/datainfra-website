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

            </div>

            
          </div>
        </div>

      </Layout>
    </div>
  );
}
