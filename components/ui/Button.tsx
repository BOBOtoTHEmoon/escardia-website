"use client";
import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type BaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  kind?: "link" | "action";
  variant?: "filled" | "outline";
  className?: string;
};

type LinkProps = {
  kind: "link";
  href: string;
  onClick?: () => void;
};

type ActionProps = {
  kind?: "action";
  onClick: () => void;
  href?: string;
};

type ButtonProps = BaseProps & (LinkProps | ActionProps);

export default function Button({
  children,
  href,
  onClick,
  variant = "filled",
  className,
  kind = "action",
  ...rest
}: ButtonProps) {
  const classes = twMerge(
    "whitespace-nowrap w-full text-lg max-sm:text-sm p-[12px] max-[25rem]:p-[8px] rounded-xl cursor-pointer font-sfpro font-medium hover:scale-105 smooth-transition disabled:opacity-[50%] disabled:hover:scale-100 disabled:cursor-not-allowed",
    variant === "filled"
      ? "text-[#EDF2FF] bg-primary hover:bg-primary-hover smooth-transition"
      : variant === "outline"
      ? "text-primary bg-transparent border-[1.5px] border-[#081C5380] hover:border-[#081C53] smooth-transition"
      : "",
    className
  );

  if (kind === "link" && href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...rest} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
