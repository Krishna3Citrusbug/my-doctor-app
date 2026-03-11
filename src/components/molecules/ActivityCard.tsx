"use client";

import { motion } from "framer-motion";
import { Calendar, FileText, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityCardProps {
  date: string;
  condition: string;
  symptoms: string;
  status: "consulted" | "self-care" | "pending";
  severity?: "mild" | "moderate" | "severe";
  index?: number;
}

export function ActivityCard({
  date,
  condition,
  symptoms,
  status,
  severity = "mild",
  index = 0,
}: ActivityCardProps) {
  const dotColor =
    severity === "mild"
      ? "bg-[#276749]"
      : severity === "moderate"
        ? "bg-[#C05621]"
        : "bg-[#C53030]";

  const pillClasses =
    severity === "mild"
      ? "bg-[#C6F6D5] text-[#22543D]"
      : severity === "moderate"
        ? "bg-[#FEEBC8] text-[#C05621]"
        : "bg-[#FED7D7] text-[#C53030]";

  const statusLabel =
    status === "consulted"
      ? "Dr. Consulted"
      : status === "self-care"
        ? "Self care"
        : "Pending";

  return (
    <motion.div
      className="bg-white rounded-[10px] p-4 border border-[#E4E4E4]"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        y: -2,
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        transition: { duration: 0.2 },
      }}
    >
      {/* Date row */}
      <div className="flex items-center gap-2 text-sm text-[#6C7278]">
        <Calendar className="w-4 h-4 text-[#6C7278]" />
        <span>{date}</span>
      </div>

      {/* Condition pill (under date, dot inside) */}
      <div className="mt-2">
        <span
          className={cn(
            "inline-flex items-center gap-2 px-2.75 py-1.5 rounded-full text-sm font-medium",
            pillClasses
          )}
        >
          <span className={cn("w-2 h-2 rounded-full", dotColor)} />
          {condition}
        </span>
      </div>

      <div className="flex items-center gap-2 my-2">
        <FileText className="w-4 h-4 text-[#6C7278]" />
        <span className="text-sm text-[#6C7278]">{symptoms}</span>
      </div>

      <div className="border-t border-[#E4E4E4] mb-3" />

      <div className="flex items-center justify-between gap-2">
        <span className="text-sm text-[#6C7278]">{statusLabel}</span>
        <motion.button
          className="flex items-center cursor-pointer gap-1 text-sm text-[#10B981] font-medium hover:text-[#10B981]/90"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.15 }}
        >
          View Details
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}


