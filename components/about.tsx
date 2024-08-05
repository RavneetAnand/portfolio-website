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
        Since earning my technology degree in 2013, I've channeled my passion for programming into impactful community
        projects. My expertise spans <span className="font-medium">React, Next.js, Node.js, SQL and NoSQL</span>,
        allowing me to build robust and innovative solutions.
      </p>
      <p className="mb-3">
        I'm seeking a full-time Senior Software Developer position in the UK,{" "}
        <span className="font-medium">with visa sponsorship</span>.
      </p>
      <p>
        <span className="italic">Beyond the keyboard</span>, I'm an avid traveler and culinary experimenter. I love
        diving into new languages, exploring the frontiers of AI, and playing the enchanting notes of the dilruba.
      </p>
    </motion.section>
  );
}
