"use client";
import { Hero, WhatWeAbout, HowItWorks, Own, WhyEscardia } from "@/components";
import { motion } from "motion/react";

const fadeInProps = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: "easeInOut" as const },
};

export default function Home() {
  return (
    <main>
      <motion.section {...fadeInProps}>
        <Hero />
      </motion.section>

      <motion.section {...fadeInProps}>
        <WhatWeAbout />
      </motion.section>

      <motion.section {...fadeInProps}>
        <HowItWorks />
      </motion.section>

      <motion.section {...fadeInProps}>
        <WhyEscardia />
      </motion.section>

      <motion.section {...fadeInProps}>
        <Own />
      </motion.section>
    </main>
  );
}
