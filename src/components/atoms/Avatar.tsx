"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  fallback?: string;
}

export function Avatar({ src, alt, size = "md", className, fallback }: AvatarProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-12 h-12",
  };

  return (
    <motion.div
      className={cn(
        "rounded-full overflow-hidden bg-gray-200 flex items-center justify-center",
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-600 font-medium text-sm">
          {fallback || "?"}
        </span>
      )}
    </motion.div>
  );
}


