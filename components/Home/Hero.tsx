"use client";
import React from "react";
import RadialBlur from "../ui/RadialBlur";
import Waitlist from "../ui/waitlist";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <main className="flex max-md:flex-col items-center justify-between mb-[70px] max-md:mb-[55px] max-sm:mb-[40px] pb-[30px] overflow-x-hidden">
      <section className="relative flex flex-col h-full w-[50%] max-md:w-full max-md:text-center max-md:mt-[50px]">
        <RadialBlur className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 -z-10 w-full h-full" />
        <aside className="mb-[31px] flex flex-col font-bold text-6xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
          <p>
            Book luxury <span className="text-secondary">Rides.</span>
          </p>
          <p>Add a guard or an escort.</p>
          <p>All in one tap.</p>
        </aside>

        <aside className="max-md:mb-[45px] max-sm:mb-[30px] text-foreground/50 font-medium text-xl max-lg:text-lg max-sm:text-base">
          The market for luxury and exotic car rentals in Nigeria is largely
          offline and disorganized, making it difficult for high-net-worth
          individuals to access premium services
        </aside>

        <aside className="mb-[60px] max-md:mb-[45px] max-sm:mb-[30px] text-secondary font-medium text-xl max-lg:text-lg max-sm:text-base">
          Escardia is the bridge between the vendor and the elite individuals
        </aside>

        <aside className="w-[70%] max-xl:w-full max-md:w-[75%] max-[25rem]:w-[90%] max-md:mx-auto">
          <Waitlist />
        </aside>
      </section>

      <section className="mx-auto flex-[0.45] max-xl:flex-[0.6] max-lg:flex-[0.7] max-md:w-[50%] max-sm:w-[55%] max-[25rem]:w-[60%] max-md:mt-[40px]">
        <aside className="relative group">
          <motion.div
            animate={{
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Image
              src="/svgs/phone.svg"
              alt="phone"
              width={1000}
              height={1000}
              className="w-full group-hover:scale-103 smooth-transition"
            />
          </motion.div>
          <div className="absolute -z-10 -bottom-5 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-gradient-to-b from-[#0030B5] to-[#00154F] rounded-[55px] max-md:rounded-[30px] shadow-xl shadow-[#00000040] group-hover:scale-95 smooth-transition" />
        </aside>
      </section>
    </main>
  );
}
