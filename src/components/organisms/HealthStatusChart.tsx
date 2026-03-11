"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { ChevronDown } from "lucide-react";

interface HealthData {
  day: string;
  value: number;
  status: "fine" | "doctor-recommended" | "urgent";
}

const healthData: HealthData[] = [
  { day: "Sun", value: 48, status: "fine" },
  { day: "Mon", value: 58, status: "fine" },
  { day: "Tue", value: 52, status: "fine" },
  { day: "Wed", value: 38, status: "doctor-recommended" },
  { day: "Thu", value: 32, status: "urgent" },
  { day: "Fri", value: 38, status: "doctor-recommended" },
  { day: "Sat", value: 52, status: "fine" },
];

const statusColors = {
  fine: "#276749",
  "doctor-recommended": "#C05621",
  urgent: "#C53030",
};

export function HealthStatusChart() {
  const [timeRange, setTimeRange] = useState("Last 7 days");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as HealthData;
      return (
        <motion.div
          className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-medium">your doing fine today</p>
        </motion.div>
      );
    }
    return null;
  };

  return (
    <motion.div
      className="bg-white rounded-[20px] p-4 lg:p-6 border border-[#F1F5F9]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[20px]/[1] font-semibold tracking-[1.3%] text-[#1E293B]">Health Status</h3>
        <div className="relative">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="appearance-none bg-white border border-[#E4E4E4] rounded-[40px] px-3 py-2 pr-8 text-sm/[1.2] font-medium text-[#64748B] cursor-pointer !focus:outline-none !focus:ring-0  transition-colors duration-200 box-shadow-none outline-none!"
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>

      <div className="h-52 min-h-52" suppressHydrationWarning>
        {!mounted ? (
          <div className="h-full w-full rounded-lg bg-gray-100 animate-pulse" />
        ) : (
          <ResponsiveContainer width="100%" height={208} minHeight={208}>
            <BarChart
              data={healthData}
              margin={{ top: 10, right: 8, left: -28, bottom: 0 }}
              barCategoryGap={18}
            >
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 12 }}
              />
              <YAxis
                domain={[10, 60]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[999, 999, 999, 999]} barSize={34}>
                {healthData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={statusColors[entry.status]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
        {Object.entries(statusColors).map(([status, color]) => (
          <motion.div
            key={status}
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm text-gray-600 capitalize">
              {status.replace("-", " ")}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

