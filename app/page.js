"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Hero from './_Components/Hero/Hero';
import Tagline from './_Components/Tagline/Tagline';
import Footer from "./_Components/Footer/Footer";
import AboutHackoff from "./_Components/AboutHackoff/AboutHackoff";
import About from "./_Components/About/About";
import Faq from "./_Components/Faq/Faq";
import Banner from "./_Components/Banner/Banner";
import Contact from "./_Components/Contact/Contact";
import PreLoader from "./_Components/PreLoader/PreLoader";
import Head from 'next/head';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Both CSS and preloader animations are completed
      setLoading(false);
    };

    // Ensure CSS is fully loaded before hiding the preloader
    const mainStylesheet = document.querySelector('link[rel="stylesheet"]');
    const cssLoadPromise = new Promise((resolve) => {
      if (mainStylesheet) {
        if (mainStylesheet.sheet) {
          resolve();
        } else {
          mainStylesheet.addEventListener('load', resolve);
        }
      } else {
        resolve();
      }
    });

    // Wait for the preloader animation to complete
    const preloaderDuration = 3800 ; // Duration of the preloader animation
    const preloaderPromise = new Promise((resolve) => {
      setTimeout(resolve, preloaderDuration);
    });

    // Wait for both promises to resolve
    Promise.all([cssLoadPromise, preloaderPromise]).then(handleLoad);
  }, []);

  return (
    <>
      <Head>
        <title>Your Website Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && <PreLoader setLoading={setLoading} />}
      <div className={styles.main}>
        {!loading && (
          <>
            <div className="hero-marquee">
              <Hero />
              <Tagline />
            </div>
            <AboutHackoff />
            <About />
            <Faq />
            <Banner />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
