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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="w-full">
      <Header />
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <Product />
        <About />
      </main>
    </div>
  );
}
