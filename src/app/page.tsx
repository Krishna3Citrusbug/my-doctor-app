"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/templates/DashboardLayout";
import { StartAnalysisBanner } from "@/components/organisms/StartAnalysisBanner";
import { HealthStatusChart } from "@/components/organisms/HealthStatusChart";
import { RecentActivities } from "@/components/organisms/RecentActivities";
import { FindDoctor } from "@/components/organisms/FindDoctor";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <motion.div
        className="p-4 lg:p-6 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Start Analysis Banner */}
        <motion.div variants={itemVariants}>
          <StartAnalysisBanner />
        </motion.div>

        {/* Desktop: left column (Health + Find Doctor), right column (Recent Activities) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-8 space-y-4">
            <motion.div variants={itemVariants}>
              <HealthStatusChart />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FindDoctor />
            </motion.div>
          </div>
          <div className="lg:col-span-4">
            <motion.div variants={itemVariants} className="h-full max-h-[900px] overflow-y-auto">
              <RecentActivities />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
