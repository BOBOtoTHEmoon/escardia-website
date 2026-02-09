"use client";
import Icon from "@/public/svgicons";
import React, { useState, useRef } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { useStateContext } from "@/contexts/contextprovider";

export default function Waitlist({
  buttonLabel = "Join Waitlist",
}: {
  buttonLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const { setSuccessModal, setVendorModal, setWaitlistModal } =
    useStateContext();

  const form = useRef<HTMLFormElement | null>(null);

  function handleWaitlist(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setEmailError(true);
      setTimeout(() => setEmailError(false), 3000);
      return;
    }

    if (!form.current) return;

    emailjs
      .sendForm("service_nzyr1yv", "template_5wj68mn", form.current, {
        publicKey: "ASxetk_ZneGiNA-AJ",
      })
      .then(() => {
        setSuccessModal(true);
        setEmail("");
        setVendorModal(false);
        setWaitlistModal(false);
      })
      .catch((error) => {
        console.log(error);
        setEmailError(true);
        const timer = setTimeout(() => setEmailError(false), 3000);
        return () => clearTimeout(timer);
      });
  }

  return (
    <form
      ref={form}
      onSubmit={handleWaitlist}
      className="relative w-full flex items-stretch gap-[20px] max-xl:gap-[10px] max-sm:gap-[8px] max-[25rem]:gap-[5px]"
    >
      <section className="relative group w-[80%] max-sm:w-[60%]">
        {/* <input
          type="text"
          name="Type"
          value="WAITLIST MEMBER"
          className="hidden"
          readOnly
        /> */}
        <input
          type="text"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full placeholder:text-[#9AA5C1] text-foreground text-lg max-xl:text-base max-sm:text-sm max-[25rem]:text-[10px] font-medium rounded-full pr-[20px] pl-[50px] max-md:pl-[50px] max-sm:pl-[50px] py-[15px] max-xl:py-[12px] max-md:py-[9px] max-sm:py-[10px] max border border-[#9AA5C1] focus:outline-none focus:border-foreground"
        />
        <div className="absolute left-[20px] max-md:left-[25px] max-sm:left-[20px] top-1/2 -translate-y-1/2 text-[#9AA5C1] group-focus-within:text-foreground">
          <Icon name="envelope" />
        </div>
      </section>

      <Button
        type="submit"
        onClick={() => {}}
        className="rounded-full px-[30px] max-md:px-[20px] flex justify-center items-center flex-1"
      >
        {buttonLabel}
      </Button>

      {emailError && (
        <p className="absolute top-[105%] left-[20px] text-sm max-md:text-xs font-medium text-red-400">
          Please Input a valid email!
        </p>
      )}
    </form>
  );
}
