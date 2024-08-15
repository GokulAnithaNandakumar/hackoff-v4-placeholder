"use client";
import React, { useRef, useEffect } from "react";
import "./Tagline.css";
import { useScroll, useTransform, motion } from "framer-motion";
import lottie from "lottie-web";

const Tagline = () => {
  const element = useRef(null);
  const innovationLottie = useRef(null);
  const engageLottie = useRef(null);

  useEffect(() => {
    let innovationAnimation, engageAnimation;

    // Load 'Innovation' Lottie animation
    if (innovationLottie.current) {
      innovationAnimation = lottie.loadAnimation({
        container: innovationLottie.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://raw.githubusercontent.com/GokulAnithaNandakumar/lottie-host/66ea27f6ac54f4cba84cb146c153e5ae59c080d8/Heart%20Smiley.json", // Replace with your Lottie JSON path
      });
    }

    // Load 'Engage' Lottie animation
    if (engageLottie.current) {
      engageAnimation = lottie.loadAnimation({
        container: engageLottie.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://raw.githubusercontent.com/GokulAnithaNandakumar/lottie-host/66ea27f6ac54f4cba84cb146c153e5ae59c080d8/Sunglasses%20Smiley.json", // Replace with your Lottie JSON path
      });
    }

    // Cleanup function to prevent duplicate animations
    return () => {
      if (innovationAnimation) {
        innovationAnimation.destroy();
      }
      if (engageAnimation) {
        engageAnimation.destroy();
      }
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.75", "start start"],
  });

  const topText = "Fusing Innovation";
  const bottomText =
    "& Technology into Unparalleled Digital Solutions that Inspire and Engage.";

  const wrapCharactersInSpan = (text) => {
    return text.split("").map((char, index) => {
      // Set a start and end for each character's opacity animation
      const start = index * 0.01;
      const end = start + 0.1;
      const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);

      return (
        <motion.span
          key={index}
          style={{ display: "inline-block", opacity }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      );
    });
  };

  return (
    <div className="tagline" ref={element}>
      <div className="tagline-top">
        {wrapCharactersInSpan(topText)}
        <div ref={innovationLottie} className="lottie-animation-sunglasses"></div>
      </div>
      <div className="tagline-bottom">
        {wrapCharactersInSpan(bottomText)}
        <div ref={engageLottie} className="lottie-animation-heart"></div>
      </div>
    </div>
  );
};

export default Tagline;
