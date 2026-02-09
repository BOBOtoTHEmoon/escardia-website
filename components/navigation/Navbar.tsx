"use client";
import Logo from "@/public/logo/logo";
import React, { useState } from "react";
import { Button } from "..";
import Icon from "@/public/svgicons";
import { useStateContext } from "@/contexts/contextprovider";

export default function Navbar() {
  const { setVendorModal, setWaitlistModal } = useStateContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="px-[6.25%] py-[44px] max-md:py-[30px] max-sm:py-[20px] bg-background z-50 sticky top-0 flex flex-col">
      <section className="flex justify-between items-center">
        <aside className="flex items-center gap-[15px] max-sm:gap-[10px] cursor-pointer text-[34px] max-md:text-3xl max-sm:text-2xl max-[25rem]:text-xl font-inter font-[800] text-primary hover:text-primary-hover">
          <Logo className="max-md:w-[35px] max-sm:w-[30px] max-[25rem]:w-[25px]" />
          <p>ESCARDIA</p>
        </aside>
        <aside className="flex items-center gap-[30px] max-sm:hidden">
          <Button
            variant="outline"
            onClick={() => {
              setVendorModal(true);
            }}
          >
            Become a Vendor
          </Button>
          <Button
            onClick={() => {
              setWaitlistModal(true);
            }}
          >
            Join Waitlist
          </Button>
        </aside>
        <aside className="hidden max-sm:block cursor-pointer smooth-transition">
          <Icon
            name={mobileOpen ? "close" : "menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          />
        </aside>
      </section>

      {mobileOpen && (
        <section className="flex flex-col items-center gap-[10px] mt-[30px] sm:hidden">
          <Button
            variant="outline"
            onClick={() => {
              setVendorModal(true);
            }}
          >
            Become a Vendor
          </Button>
          <Button
            onClick={() => {
              setWaitlistModal(true);
            }}
          >
            Join Waitlist
          </Button>
        </section>
      )}
    </nav>
  );
}
