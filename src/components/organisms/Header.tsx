"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SearchInput } from "@/components/atoms/Input";
import { Avatar } from "@/components/atoms/Avatar";
import { Bell, ChevronDown, Menu, User, Settings, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const [searchValue, setSearchValue] = useState("");
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    }

    if (profileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileDropdownOpen]);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white border-b border-gray-200 px-3 sm:px-4 lg:px-6 h-14 sm:h-16 lg:h-21"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex h-full items-center gap-2 sm:gap-3">
        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 shrink-0"
          onClick={onMenuClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </motion.button>

        {/* App Title - Mobile Only */}
        <div className="lg:hidden shrink-0">
          <h1 className="text-base sm:text-lg font-bold text-[#0f478a] whitespace-nowrap">
            My Doctor App
          </h1>
        </div>

        {/* Search Bar - Hidden on mobile, visible on tablet+ */}
        <div className="hidden md:flex flex-1">
          <SearchInput
            placeholder="Search anything here"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="max-w-xl"
          />
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 ml-auto">
          <motion.button
            className="relative p-1.5 sm:p-2 rounded-lg bg-[#F1F5F9] w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 flex items-center justify-center shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </motion.button>

          {/* Divider - Hidden on mobile */}
          <div className="hidden sm:block h-9 sm:h-10 lg:h-11 w-px bg-[#DCE4E8]" />

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <motion.div
              className="flex items-center gap-1.5 sm:gap-2.5 cursor-pointer"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="sm:hidden">
                <Avatar fallback="JD" size="sm" />
              </div>
              <div className="hidden sm:block">
                <Avatar fallback="JD" size="md" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm sm:text-base font-semibold text-[#1A202C]">John de</p>
              </div>
              <motion.div
                animate={{ rotate: profileDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="hidden sm:block"
              >
                <ChevronDown className="w-4 h-4 text-black" />
              </motion.div>
            </motion.div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {profileDropdownOpen && (
                <motion.div
                  className="absolute right-0 top-full mt-2 w-56 sm:w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">John de</p>
                    <p className="text-xs text-gray-500 mt-0.5">john.de@example.com</p>
                  </div>

                  <div className="py-1">
                    <motion.button
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </motion.button>

                    <motion.button
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </motion.button>
                  </div>

                  <div className="border-t border-gray-100 pt-1">
                    <motion.button
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

