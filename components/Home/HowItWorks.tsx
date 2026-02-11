"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { useStateContext } from "@/contexts/contextprovider";

const steps = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#0e35a0" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    ),
    title: "Browse and Select",
    desc: "Choose from a wide range of premium cars, select the pickup and return dates and location that suits you best.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#0e35a0" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    title: "Select an escort",
    desc: "Add an escort or security personnel to enhance safety, comfort, or luxury for your journey.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#0e35a0" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        <circle cx="18" cy="18" r="4" fill="none" stroke="#0e35a0" strokeWidth="1.5"/>
        <path d="M18 16v4M16 18h4" stroke="#0e35a0" strokeWidth="1.5"/>
      </svg>
    ),
  title: "Get a professional driver",
desc: "Every ride comes with a professional driver to ensure your comfort and safety throughout your journey.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#0e35a0" strokeWidth="1.5"/>
        <path d="M8 12l3 3 5-5" stroke="#0e35a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Book and confirm",
    desc: "Review your trip details, confirm your booking, and get ready to ride in style.",
  },
];

export default function HowItWorks() {
  const { setWaitlistModal } = useStateContext();

  return (
    <main className="mb-[80px] max-md:mb-[60px] max-sm:mb-[40px]">
      <section className="text-center mb-[0px] max-md:mb-[1px] max-sm:mb-[1px]">
        <p className="text-secondary font-semibold text-xl max-md:text-lg max-sm:text-base mb-[4px]">
          How it works
        </p>
        <h2 className="text-[40px] max-md:text-3xl max-sm:text-2xl font-semibold">
          Car Booking Made Easy:
        </h2>
      </section>

      <section className="flex max-md:flex-col items-center gap-[20px] max-lg:gap-[15px]">
        {/* Left - Car image + Join Waitlist */}
        <aside className="w-[25%] max-md:w-full max-md:max-w-[400px] relative">
          <Image
            src="/svgs/car2.svg"
            alt="luxury car"
            width={800}
            height={500}
            className="w-full"
          />
          <div className="mt-[12px] max-sm:mt-[8px] flex justify-center">
            <Button
              kind="action"
              onClick={() => setWaitlistModal(true)}
              className="max-w-[220px] max-sm:max-w-[180px]"
            >
              Join Waitlist
            </Button>
          </div>
        </aside>

        {/* Right - Steps */}
        <aside className="flex-1 flex flex-col gap-[20px] max-md:gap-[14px] max-sm:gap-[10px] self-start mt-[30px]">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-[14px] max-sm:gap-[10px] group"
            >
              <div className="w-[48px] h-[48px] max-sm:w-[38px] max-sm:h-[38px] bg-[#E6EAF7] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 smooth-transition">
                {step.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg max-lg:text-base max-sm:text-sm mb-[2px]">
                  {step.title}
                </h3>
                <p className="text-foreground/50 font-medium text-sm max-lg:text-xs max-sm:text-xs">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </aside>
      </section>
    </main>
  );
}