"use client";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { ReactNode } from "react";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useSmoothScroll();
  return <>{children}</>;
}


