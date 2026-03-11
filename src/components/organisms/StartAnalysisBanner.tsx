"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { Stethoscope, Activity } from "lucide-react";

export function StartAnalysisBanner() {
  return (
    <motion.div
      className="relative bg-[#10B981] lg:bg-gradient-to-b lg:from-[#10B981] lg:to-[#059669] rounded-xl lg:rounded-[14px] p-5 lg:p-8 lg:pb-6 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{
        scale: 1.01,
      }}
    >
      {/* Background Pattern - Desktop only */}
      <div className="hidden lg:block absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
      </div>

      {/* Content - Mobile: Vertical layout, Desktop: Horizontal */}
      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
        {/* Icon and Text Section */}
        <div className="flex items-start flex-col lg:flex-row gap-4 lg:gap-6">
          <motion.div
            className="bg-[#34D399] lg:bg-white/20 backdrop-blur-sm rounded-full p-3 lg:p-4 shrink-0"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <Stethoscope className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </motion.div>

          <div className="flex-1">
            <motion.h2
              className="text-xl lg:text-2xl font-bold lg:font-semibold text-white mb-2 lg:mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              Start New Analysis
            </motion.h2>
            <motion.p
              className="text-white text-sm lg:text-base font-normal lg:font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Describe your symptoms and get instant guidance
            </motion.p>
          </div>
        </div>

        {/* Button - Mobile: Centered, Desktop: Right aligned */}
        <motion.div
          className="w-full lg:w-auto flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="secondary"
            size="md"
            className="cursor-pointer bg-white text-sm lg:text-[14px] border-none font-medium text-[#1E293B] hover:bg-white/90 flex items-center gap-2 lg:gap-3 py-2.5 lg:py-3 px-5 lg:px-6 rounded-lg w-full lg:w-auto justify-center"
          >
            <span>Start Analysis</span>
            <Activity className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}


