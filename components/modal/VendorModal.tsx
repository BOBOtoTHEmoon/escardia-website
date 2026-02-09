"use client";
import { useStateContext } from "@/contexts/contextprovider";
import React, { useState, useRef } from "react";
import Icon from "@/public/svgicons";
import Button from "../ui/Button";
import emailjs from "@emailjs/browser";

export default function VendorModal() {
  const { vendorModal, setVendorModal, setSuccessModal, setWaitlistModal } =
    useStateContext();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dataError, setDataError] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_r86x1hi", "template_x8i06n3", form.current, {
        publicKey: "ASxetk_ZneGiNA-AJ",
      })
      .then(() => {
        setSuccessModal(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setVendorModal(false);
        setWaitlistModal(false);
      })
      .catch((error) => {
        console.log(error);
        setDataError(true);
        const timer = setTimeout(() => setDataError(false), 3000);
        return () => clearTimeout(timer);
      });
  }

  return (
    <main
      className={`fixed z-[10000] left-0 top-0 w-full h-full transition-all duration-500 ease-in-out ${
        vendorModal ? "translate-y-0 scale-100" : "-translate-y-full scale-0"
      }`}
    >
      <div
        className="fixed z-[10000] left-0 top-0 cursor-pointer bg-black/30 backdrop-blur-sm w-full h-full"
        onClick={() => setVendorModal(false)}
      />

      <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background p-8 max-md:p-6 max-sm:p-4 rounded-[20px] z-[100000] transition-all duration-300 opacity-100 visible w-[61%] max-md:w-[80%] max-sm:w-[95%]">
        <aside className="flex items-center gap-[30px] mb-[50px]">
          <div
            onClick={() => setVendorModal(false)}
            className="bg-[#E0E8FF] hover:bg-[#bacbfb] p-[18px] max-2xl:p-[13px] max-xl:p-[10px] max-md:p-[13px] max-sm:p-[10px] max-[25rem]:p-[8px] rounded-full max-w-fit cursor-pointer smooth-transition"
          >
            <Icon name="close" />
          </div>

          <p className="text-3xl max-md:text-2xl max-sm:text-xl font-medium">
            Apply as a vendor
          </p>
        </aside>

        <form
          ref={form}
          onSubmit={handleFormSubmit}
          className="max-sm:mb-[30px] max-[25rem]:mb-[20px] w-[61%] max-2xl:w-[75%] max-xl:w-[80%] max-lg:w-[85%] max-[25rem]:w-full mx-auto flex flex-col gap-[34px] max-2xl:gap-[28px] max-xl:gap-[25px] max-sm:gap-[20px] max-[25rem]:gap-[15px]"
        >
          {/* <input
            type="text"
            name="Type"
            value="VENDOR MEMBER"
            className="hidden"
            readOnly
          /> */}
          <input
            type="text"
            required
            name="FirstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full bg-[#DFE8FF] rounded-[15px] max-sm:rounded-[7px] placeholder:text-[#7C7C7C] text-foreground font-normal text-sm max-sm:text-xs px-[15px] max-sm:px-[12px] py-[18px] max-sm:py-[14px] focus:outline-none focus:ring focus:ring-foreground"
          />

          <input
            type="text"
            required
            name="LastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full bg-[#DFE8FF] rounded-[15px] max-sm:rounded-[7px] placeholder:text-[#7C7C7C] text-foreground font-normal text-sm max-sm:text-xs px-[15px] max-sm:px-[12px] py-[18px] max-sm:py-[14px] focus:outline-none focus:ring focus:ring-foreground"
          />

          <input
            type="text"
            required
            name="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#DFE8FF] rounded-[15px] max-sm:rounded-[7px] placeholder:text-[#7C7C7C] text-foreground font-normal text-sm max-sm:text-xs px-[15px] max-sm:px-[12px] py-[18px] max-sm:py-[14px] focus:outline-none focus:ring focus:ring-foreground"
          />

          <input
            type="number"
            required
            name="PhoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full bg-[#DFE8FF] rounded-[15px] max-sm:rounded-[7px] placeholder:text-[#7C7C7C] text-foreground font-normal text-sm max-sm:text-xs px-[15px] max-sm:px-[12px] py-[18px] max-sm:py-[14px] focus:outline-none focus:ring focus:ring-foreground"
          />

          <aside className="relative mt-[20px] max-2xl:mt-[10px] max-md:mt-[7px] flex justify-center max-sm:mb-[75px]">
            <Button
              type="submit"
              disabled={!firstName || !lastName || !email || !phoneNumber}
              className="w-[300px] max-2xl:w-[280px] max-xl:w-[250px] max-lg:w-[230px] max-md:w-[200px] max-sm:w-[150px]"
              onClick={() => {}}
            >
              Apply
            </Button>

            {dataError && (
              <p className="absolute bottom-[105%] left-1/2 -translate-x-1/2 text-sm font-medium text-red-400">
                Please Input valid details!
              </p>
            )}
          </aside>
        </form>
      </section>
    </main>
  );
}
