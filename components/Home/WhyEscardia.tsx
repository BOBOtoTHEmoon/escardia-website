"use client";
import Icon from "@/public/svgicons";
import React, { useState } from "react";
import RadialBlur from "../ui/RadialBlur";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const userReasons = [
  {
    title: "Compare prices from different vendors",
    desc: "Quickly browse cars from multiple vendors and choose the option that fits your budget and style.",
  },
  {
    title: "Add-on. Escorts or Security Guards",
    desc: "Enhance your trip with professional escorts or security personnel tailored to your needs.",
  },
  {
    title: "100% verified vendors",
    desc: "Every vendor on Escardia is fully vetted to ensure safety, trust, and a secure rental experience.",
  },
  {
    title: "Seamless experience",
    desc: "From booking to drop-off, enjoy a smooth, intuitive, and hassle-free journey on Escardia.",
  },
];

const vendorReasons = [
  {
    title: "Earn More From Your Car",
    desc: "List your vehicle and start generating steady income every time it's rented.",
  },
  {
    title: "Full Control & Flexibility",
    desc: "Set your own pricing, availability, and rental conditions—your car, your rules.",
  },
  {
    title: "Secure & Verified Rentals",
    desc: "Every user is screened to ensure safe transactions and complete peace of mind.",
  },
  {
    title: "Track Bookings Effortlessly",
    desc: "From booking to drop-off, enjoy a smooth, intuitive, and hassle-free journey on Escardia.",
  },
];

export default function WhyEscardia() {
  const [activeTab, setActiveTab] = useState<"users" | "vendors">("users");
  const reasons = activeTab === "users" ? userReasons : vendorReasons;

  return (
    <main className="mb-[50px] max-md:mb-[20px] max-sm:mb-[10px]">
      <section>
        <h2 className="text-[47px] max-md:text-3xl max-sm:text-2xl font-semibold text-center mb-[10px] max-md:mb-[1px]">
          Why Escardia
        </h2>
      </section>

      {/* Tab Switcher */}
      <section className="mb-[25px] max-md:mb-[25px] max-sm:mb-[18px]">
        <div className="inline-flex bg-[#E6EAF7] rounded-full p-[4px]">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-[24px] max-sm:px-[16px] py-[10px] max-sm:py-[7px] rounded-full text-base max-sm:text-sm font-medium smooth-transition cursor-pointer ${
              activeTab === "users"
                ? "bg-primary text-white"
                : "text-foreground hover:text-primary"
            }`}
          >
            For Users
          </button>
          <button
            onClick={() => setActiveTab("vendors")}
            className={`px-[24px] max-sm:px-[16px] py-[10px] max-sm:py-[7px] rounded-full text-base max-sm:text-sm font-medium smooth-transition cursor-pointer ${
              activeTab === "vendors"
                ? "bg-primary text-white"
                : "text-foreground hover:text-primary"
            }`}
          >
            For Vendors
          </button>
        </div>
      </section>

      <section className="flex max-md:flex-col items-center relative">
        <RadialBlur className="absolute -left-[160px] max-md:-left-[130px] max-sm:-left-[85px] top-1/2 max-md:top-1/8 -translate-y-1/2 w-[300px] max-md:w-[250px] max-sm:w-[180px] h-[300px] max-md:h-[250px] max-sm:h-[180px] aspect-square -z-10" />

        <aside className="w-[51%] max-md:w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-[28px] max-md:gap-[2px] max-sm:gap-[5px]"
            >
              {reasons.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-[15px] max-md:gap-[10px] max-sm:gap-[5px] group"
                >
                  <Icon
                    name="checkMark"
                    className="w-[42px] h-[42px] max-xl:w-[38px] max-xl:h-[38px] max-lg:w-[32px] max-lg:h-[32px] max-md:w-[28px] max-md:h-[28px] max-sm:w-[24px] max-sm:h-[24px] shrink-0"
                  />
                  <div>
                    <p className="group-hover:scale-105 origin-left smooth-transition font-semibold text-[22px] max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-sm">
                      {item.title}
                    </p>
                    <p className="text-foreground/50 font-medium text-base max-lg:text-sm max-sm:text-xs mt-[4px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </aside>

        <aside className="flex-1 relative group">
          <motion.div
            animate={{
              y: [-15, 15, -15],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Image
              src="/svgs/car.svg"
              alt="car"
              width={2000}
              height={2000}
              className="w-[75%] max-sm:w-[80%] mx-auto group-hover:scale-90 smooth-transition"
            />
          </motion.div>

          <Image
            src="/images/world.png"
            alt="world"
            width={2000}
            height={2000}
            className="absolute top-14 max-[25rem]:top-10 -z-10 w-full group-hover:scale-110 smooth-transition"
          />
        </aside>
      </section>
    </main>
  );
}
