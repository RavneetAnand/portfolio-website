"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a technology degree in 2013, I decided to pursue my passion for programming. My main
        inspiration was to use my technical skills to help the community. My core stack includes{" "}
        <span className="font-medium">React, Next.js, Node.js, SQL and NoSQL</span>.
      </p>
      <p className="mb-3">
        I'm seeking a full-time Senior Software Developer position in the UK and will{" "}
        <span className="font-medium">require visa sponsorship</span>.
      </p>
      <p>
        <span className="italic">Outside of coding</span>, I enjoy traveling, cooking, learning new languages, exploring
        AI, and playing the dilruba.
      </p>
    </motion.section>
  );
}
