"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/atoms/Avatar";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { Star } from "lucide-react";

interface DoctorCardProps {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  consultations: number;
  price: number;
  available: boolean;
  image?: string;
}

export function DoctorCard({
  name,
  specialty,
  rating,
  reviews,
  consultations,
  price,
  available,
  image,
}: DoctorCardProps) {
  return (
    <motion.div
      className="bg-[#F8FAFC] rounded-xl lg:rounded-[14px] py-4 px-4 lg:px-3 border border-gray-200 lg:border-[rgba(0,0,0,0.1)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{
        y: -2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 },
      }}
    >
      {/* Top Section */}
      <div className="mb-4">
        <div className="flex items-start gap-3 lg:gap-4 mb-3">
          <Avatar src={image} alt={name} className="w-10 h-10 lg:w-12 lg:h-12 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1 flex-col lg:flex-row">
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold mb-1 text-[#1A1C1E] truncate text-base lg:text-base/[1] tracking-[1.4%]">{name}</h3>
                <p className="text-sm lg:text-sm/[1] tracking-[1.5%] text-[#4A5568]">{specialty}</p>
              </div>
              {available && (
                <Badge variant="success" className="shrink-0 ml-0 lg:ml-2">Available Now</Badge>
              )}
            </div>
            <div className="flex items-center gap-1.5 lg:gap-2 text-sm mt-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-[#0A0A0A]">{rating}</span>
                <span className="text-[#4A5568] text-sm/[1]">({reviews})</span>
              </div>
              <span className="text-[#4A5568] text-xs">•</span>
              <span className="text-[#4A5568] text-sm/[1]">{consultations} consultations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 lg:border-[#E4E4E4] mb-3 lg:mb-2"></div>

      {/* Bottom Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm lg:text-sm/[1] tracking-[1.5%] text-[#4A5568]">Price:</span>
          <span className="text-base lg:text-base/[1] font-semibold text-[#1A202C] tracking-[1.4%]">{price} USD / consultation</span>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-10 lg:h-[41px] flex-1 border-gray-300 lg:border-[#64748B] text-[#4A5568] hover:bg-gray-50 bg-white text-sm lg:text-sm/[1] font-medium tracking-[1.5%] rounded-lg lg:rounded-[7px] px-3 lg:px-4 py-2 lg:py-3 cursor-pointer"
          >
            View Profile
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="h-10 lg:h-[41px] flex-1 bg-[#1B4FF8] hover:bg-[#1B4FF8]/90 text-white text-sm lg:text-sm/[1] font-medium tracking-[1.5%] rounded-lg lg:rounded-[7px] px-3 lg:px-4 py-2 lg:py-3 cursor-pointer"
          >
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}


