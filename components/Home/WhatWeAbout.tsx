"use client";
import React from "react";

const userFeatures = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0e35a0" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),
    text: "Rent cars for any occasion",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0e35a0" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    text: "Request professional escorts",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0e35a0" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        <path d="M7 3h10v1H7z" opacity="0.5"/>
      </svg>
    ),
    text: "Book multiple cars for any trip",
  },
];

const vendorFeatures = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0e35a0" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
    ),
    text: "Simply List their cars",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0e35a0" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
      </svg>
    ),
    text: "Set their terms",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0e35a0" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    text: "Get paid each time their vehicle is in use",
  },
];

export default function WhatWeAbout() {
  return (
    <main className="mb-[100px] max-md:mb-[70px] max-sm:mb-[50px]">
      <section className="bg-transparent rounded-[30px] max-md:rounded-[20px] px-[6%] py-[50px] max-md:py-[35px] max-sm:py-[25px]">
        <h2 className="text-[40px] max-md:text-3xl max-sm:text-2xl font-semibold text-center mb-[25px] max-md:mb-[18px] max-sm:mb-[14px]">
          What are we about
        </h2>

        <p className="text-foreground/60 font-medium text-xl max-lg:text-lg max-sm:text-base text-center max-w-[850px] mx-auto mb-[45px] max-md:mb-[30px] max-sm:mb-[22px]">
          Escardia is a next-generation car rental platform designed to give both users and vendors
          complete freedom, flexibility, and control. We connect people who need premium rides
          with car owners who want to earn from their vehicles, an all in one seamless ecosystem.
        </p>

        <section className="flex max-md:flex-col gap-[60px] max-lg:gap-[40px] max-md:gap-[30px]">
          {/* Users column */}
          <aside className="flex-1">
            <h3 className="text-xl max-sm:text-lg font-semibold mb-[20px] max-sm:mb-[14px]">
              With Escardia, users can;
            </h3>
            <div className="flex flex-col gap-[18px] max-sm:gap-[12px]">
              {userFeatures.map((item, i) => (
                <div key={i} className="flex items-center gap-[12px] max-sm:gap-[8px]">
                  <div className="w-[40px] h-[40px] max-sm:w-[32px] max-sm:h-[32px] bg-[#DAE4FD] rounded-lg flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <p className="font-medium text-lg max-lg:text-base max-sm:text-sm">
                    {item.text} 
                  </p>
                </div>
              ))}
            </div>
          </aside>

          {/* Vendors column */}
          <aside className="flex-1">
            <h3 className="text-xl max-sm:text-lg font-semibold mb-[20px] max-sm:mb-[14px]">
              With Escardia, vendors can;
            </h3>
            <div className="flex flex-col gap-[18px] max-sm:gap-[12px]">
              {vendorFeatures.map((item, i) => (
                <div key={i} className="flex items-center gap-[12px] max-sm:gap-[8px]">
                  <div className="w-[40px] h-[40px] max-sm:w-[32px] max-sm:h-[32px] bg-[#DAE4FD] rounded-lg flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <p className="font-medium text-lg max-lg:text-base max-sm:text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
