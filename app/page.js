"use client";
import styles from "./page.module.css";
import Hero from './_Components/Hero/Hero'
import Tagline from './_Components/Tagline/Tagline'
import Footer from "./_Components/Footer/Footer";
import AboutHackoff from "./_Components/AboutHackoff/AboutHackoff";
import About from "./_Components/About/About";
import Faq from "./_Components/Faq/Faq";
import Banner from "./_Components/Banner/Banner";
import Contact from "./_Components/Contact/Contact";
import React from "react";
import PreLoader from "./_Components/PreLoader/PreLoader";

export default function Home() {
  const [loading, setLoading] = React.useState(true); 
  return (
    <>
    {loading && <PreLoader setLoading={setLoading} />}
    <div className={styles.main}>
   {!loading && <div>
      <div className="hero-marquee">
        <Hero/>
      </div>
      <Tagline/>
      <AboutHackoff/>
      <About/>
      <Faq/>
      <Banner/>
      <Contact/>
      <Footer/>
    </div>}
    </div>
    </>
  );
}
