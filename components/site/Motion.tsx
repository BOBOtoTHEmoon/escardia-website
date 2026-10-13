"use client";
import { MotionConfig } from "motion/react";
import { ReactNode } from "react";

/** Respects the visitor's "reduce motion" setting: movement is skipped, fades stay. */
export default function Motion({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
