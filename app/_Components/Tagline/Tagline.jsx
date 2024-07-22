"use client"
import React, { useRef } from "react";
import "./Tagline.css";
import { useScroll, useTransform, motion } from "framer-motion";

const Tagline = () => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.75", "start start"]
  });

  const topText = "Fusing Innovation";
  const bottomText = "& Technology into Unparalleled Digital Solutions that Inspire and Engage.";

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
      <div className="tagline-top">{wrapCharactersInSpan(topText)}</div>
      <div className="tagline-bottom">{wrapCharactersInSpan(bottomText)}</div>
    </div>
  );
};

export default Tagline;
