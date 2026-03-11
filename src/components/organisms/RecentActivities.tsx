"use client";

import { motion } from "framer-motion";
import { ActivityCard } from "@/components/molecules/ActivityCard";
import { ChevronRight } from "lucide-react";

const activities = [
  {
    date: "Jan 8, 2026",
    condition: "Suspected Malaria",
    symptoms: "Fever, Headache, Chills",
    status: "consulted" as const,
    severity: "moderate" as const,
  },
  {
    date: "Jan 8, 2026",
    condition: "Mild Cold",
    symptoms: "Fever, Headache, Chills",
    status: "self-care" as const,
    severity: "mild" as const,
  },
  {
    date: "Jan 3, 2026",
    condition: "Severe Dehydration",
    symptoms: "Runny nose, Sneezing",
    status: "pending" as const,
    severity: "severe" as const,
  },
  {
    date: "Dec 28, 2025",
    condition: "No symptoms reported",
    symptoms: "Vomiting, Diarrhea, Weakness",
    status: "consulted" as const,
    severity: "mild" as const,
  },
  {
    date: "Dec 25, 2025",
    condition: "No symptoms reported",
    symptoms: "Fever, Headache, Chills",
    status: "self-care" as const,
    severity: "moderate" as const,
  },
];

export function RecentActivities() {
  return (
    <motion.div
      className="bg-white rounded-[14px] py-6 px-4 border border-[#F1F5F9] h-full flex flex-col min-h-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex items-center gap-2 justify-between mb-5">
        <h3 className="text-[20px]/[1.4] font-semibold tracking-[1.3%] text-[#0F172A]">Recent Activities</h3>
        <motion.button
          className="flex items-center cursor-pointer gap-1 text-sm/[1] p-0 mr-4 font-medium text-[#1A202C] hover:text-[#1B4FF8]/90"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.15 }}
        >
          See all
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>

      <div
        data-lenis-prevent
        className="flex-1 min-h-0 overflow-y-auto pr-1 overscroll-contain grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3 "
      >
        {activities.map((activity, index) => (
          <ActivityCard
            key={`${activity.date}-${index}`}
            {...activity}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}


