"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  type?: string;
}

export function Input({
  placeholder,
  value,
  onChange,
  className,
  icon,
  type = "text",
}: InputProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      whileFocus={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {icon && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#4A5568]">
          {icon}
        </div>
      )}
      <motion.input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full p-0 pl-7.5 rounded-lg border border-none bg-white",
          "focus:outline-none focus:border-transparent",
          "transition-all duration-200 ease-out",
          "placeholder:text-[#4A5568] text-[#000000] !outline-none focus:outline-none box-shadow-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus-visible:border-0 ",
          icon && "pl-7.5"
        )}
       
      />
    </motion.div>
  );
}

export function SearchInput({
  placeholder = "Search anything here",
  value,
  onChange,
  className,
}: Omit<InputProps, "icon">) {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      icon={<Search className="w-4 h-4" />}
    />
  );
}


