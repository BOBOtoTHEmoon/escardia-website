import Logo from "@/public/logo/logo";
import React from "react";
import Waitlist from "../ui/waitlist";
import Icon, { icons } from "@/public/svgicons";
import Link from "next/link";

const iconsList = [
  { icon: "personLink", contact: "escardia.app", link: false, href: "#" },
  {
    icon: "darkEnvelope",
    contact: "contact@escardia.com",
    link: false,
    href: "#",
  },
  { icon: "phone", contact: "+234 911 651 1460", link: false, href: "#" },
  {
    icon: "instagram",
    contact: "@escardia.co",
    link: true,
    href: "https://instagram.com/escardia.co",
  },
  {
    icon: "twitter",
    contact: "@escardiaco",
    link: true,
    href: "https://x.com/escardiaco",
  },
];

export default function Footer() {
  return (
    <footer className="mx-[2%] max-[25rem]:mx-0 px-[3.26%] py-[48px] max-sm:py-[35px] flex max-lg:flex-col max-lg:gap-[30px] items-center bg-[#E6EAF7] rounded-t-[70px] max-[25rem]:rounded-t-[40px]">
      <section className="flex flex-col max-lg:items-center w-[40%] max-lg:w-full gap-[12px] max-sm:gap-[7px]">
        <aside className="flex items-center gap-[11px] max-sm:gap-[7px] text-[25px] max-md:text-xl max-sm:text-lg max-[25rem]:text-base font-inter font-[800] text-primary">
          <Logo className="w-[35px] max-sm:w-[30px] max-[25rem]:w-[25px]" />
          <p>ESCARDIA</p>
        </aside>

        <aside className="text-[#7B89AC] font-medium text-xl max-md:text-lg max-sm:text-base max-[25rem]:text-sm">
          App coming soon, be the first to get the app
        </aside>

        <aside className="mt-[12px] max-sm:mt-[7px] max-lg:w-[70%] max-sm:w-[80%] max-[25rem]:w-[90%]">
          <Waitlist />
        </aside>
      </section>

      <section className="flex flex-1 flex-wrap items-center justify-center gap-[30px] text-[#39539B] font-medium text-xl max-sm:text-base max-md:w-full max-md:px-[5%] max-md:grid max-md:grid-cols-2 max-md:gap-x-[15px] max-md:gap-y-[15px]">
        {iconsList.map((each, i) =>
          each.link ? (
            <Link
              key={i}
              href={each.href}
              target="_blank"
              className="hover:text-[#3a6eff] flex items-center gap-[5px] group max-md:text-sm max-md:break-words"
            >
              <Icon name={each.icon as keyof typeof icons} />
              <p className="group-hover:underline break-words">
                {each.contact}
              </p>
            </Link>
          ) : (
            <aside
              key={i}
              className="flex items-center gap-[5px] max-md:text-sm max-md:break-words"
            >
              <Icon name={each.icon as keyof typeof icons} />
              <p className="break-words">{each.contact}</p>
            </aside>
          )
        )}
      </section>
    </footer>
  );
}
