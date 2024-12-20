"use client";
import styles from "./page.module.css";
import Hero from './_Components/Hero/Hero';
import Tagline from './_Components/Tagline/Tagline';
import Footer from "./_Components/Footer/Footer";
import About from "./_Components/About/About";
import Faq from "./_Components/Faq/Faq";
import Banner from "./_Components/Banner/Banner";
import Contact from "./_Components/Contact/Contact";
import React from "react";
import PreLoader from "./_Components/PreLoader/PreLoader";
import Sponsors from "./_Components/Sponsors/Sponsors";
import Tracks from "./_Components/Tracks/Tracks";
import Aboutto from "./_Components/aboutto/aboutto";
import MobileMenu from "./_Components/Mobile/MobileMenu";

export default function Home() {
  const [loading, setLoading] = React.useState(true); 
  return (
    <>
    {loading && <PreLoader setLoading={setLoading} />}
    <div className={styles.main}>
     {!loading && <div>
     
      <div id="hero" className="hero-marquee">
        <Hero />
      </div>
      <Tagline />
      <div id="abouthackoff">
      <Aboutto/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="Tracks">
        <Tracks/>
        </div>
      <div id="sponsors">
        <Sponsors/>
        </div>
      <div id="faqs">
        <Faq/>
      </div>
      <div id="banner">
        <Banner/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer/>
    </div>}
    </div>
    </>
  );
}
