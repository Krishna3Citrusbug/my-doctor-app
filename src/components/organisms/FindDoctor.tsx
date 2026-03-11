"use client";

import { motion } from "framer-motion";
import { DoctorCard } from "@/components/molecules/DoctorCard";
import { SearchInput } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import { Filter, Search } from "lucide-react";
import { useState } from "react";

const doctors = [
  {
    name: "Dr. Aisha Kumar",
    specialty: "Allopathic Physician",
    rating: 4.8,
    reviews: 122,
    consultations: 122,
    price: 3,
    available: true,
  },
  {
    name: "Dr. Kenji Tanaka",
    specialty: "Osteopathic Physician",
    rating: 4.8,
    reviews: 122,
    consultations: 122,
    price: 8,
    available: true,
  },
  {
    name: "Dr. Rohan Patel",
    specialty: "Emergency Medicine",
    rating: 4.8,
    reviews: 122,
    consultations: 122,
    price: 10,
    available: true,
  },
  {
    name: "Dr. Anya",
    specialty: "Naturopathic Physician",
    rating: 4.8,
    reviews: 122,
    consultations: 122,
    price: 12,
    available: true,
  },
];

export function FindDoctor() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.div
      className="bg-white rounded-[20px] px-4 py-6 border border-[#F1F5F9]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Mobile Header: Icon buttons only */}
      <div className="flex items-center gap-3 mb-5 lg:hidden">
        <h3 className="text-xl lg:text-[20px] font-bold lg:font-semibold tracking-[1.3%] text-[#1A202C] whitespace-nowrap">Find Doctor</h3>
        <div className="ml-auto flex items-center gap-2">
          <motion.button
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#DCE4E8] bg-white hover:bg-gray-50 shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-[#4A5568]" />
          </motion.button>
          <motion.button
            className="h-10 px-3 flex items-center gap-2 rounded-lg border border-[#CBD5E1] bg-white text-[#4A5568] hover:bg-gray-50 text-sm font-medium shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter className="w-4 h-4 text-[#1B4FF8]" />
            <span>Filter</span>
          </motion.button>
        </div>
      </div>

      {/* Desktop Header: Full search bar */}
      <div className="hidden lg:flex items-center gap-4 mb-5">
        <h3 className="text-[20px]/[1] font-semibold tracking-[1.3%] text-[#1A202C] whitespace-nowrap">Find Doctor</h3>
        <div className="ml-auto flex-1">
          <SearchInput
            placeholder="Search by name or specialty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-[#DCE4E8] rounded-[9px] px-4 py-3 find-doctor-serach leading-1 max-w-66.75 ml-auto  !focus:border-[#1B4FF8] hover:border-[#1B4FF8] cursor-pointer"
          />
        </div>
        <Button 
          variant="outline" 
          className="h-11 whitespace-nowrap cursor-pointer border-[#CBD5E1] bg-white text-[#4A5568] hover:bg-gray-50 inline-flex items-center gap-3 text-sm/[1] font-medium tracking-[1.5%] rounded-[9px] px-4 py-3"
        >
          <Filter className="w-5 h-5 text-[#1B4FF8]" />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
        {doctors.map((doctor, index) => (
          <motion.div
            key={`${doctor.name}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <DoctorCard {...doctor} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}


