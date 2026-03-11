"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  History, 
  Users, 
  Heart, 
  BookOpen, 
  TrendingUp,
  AlertCircle,
  Wallet,
  HelpCircle,
  Settings,
  LogOut,
  ChevronDown,
  X,
  ChevronLeft
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function Sidebar({
  isOpen = false,
  onClose,
  collapsed = false,
  onToggleCollapse,
}: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/", active: true },
    { icon: History, label: "History", href: "/history" },
    { icon: Users, label: "Doctors", href: "/doctors" },
    {
      icon: Heart,
      label: "My Health",
      href: "/health",
      hasChildren: true,
      children: ["Records", "Reports", "Medications"],
    },
    { icon: BookOpen, label: "Education", href: "/education" },
    {
      icon: TrendingUp,
      label: "Insights",
      href: "/insights",
      hasChildren: true,
      children: ["Analytics", "Trends", "Recommendations"],
    },
    { icon: AlertCircle, label: "Heart Alerts", href: "/alerts" },
    { icon: Wallet, label: "Wallet", href: "/wallet" },
  ];

  const helpItems = [
    { icon: HelpCircle, label: "Help & Center", href: "/help" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  // Keep as a JSX node (not a nested component). Otherwise it remounts on each render,
  // which replays Framer "initial" animations and looks like a blink.
  const sidebarContent = (
    <div className="flex h-full flex-col py-4 lg:py-8">
      {/* Brand row (matches screenshot) */}
      <div className={cn(" flex items-center justify-between px-4 lg:px-2 py-0", collapsed ? "mb-2" : "mb-6 lg:mb-10")}>
        <div className={cn("font-bold text-base ml-2 lg:text-lg text-[#0f478a] flex-1 text-center lg:text-left truncate", collapsed && "sr-only")}>
          <a href="/" className="hover:opacity-80 transition-opacity">My Doctor App</a>
        </div>
        {/* Desktop collapse chevron in sidebar header */}
        {onToggleCollapse && (
          <motion.button
            type="button"
            className="hidden lg:inline-flex h-6 w-6 items-center justify-center rounded-full shadow-sm hover:bg-gray-50 absolute right-[-10px] top-[32px] bg-white z-10 cursor-pointer border border-gray-200"
            onClick={onToggleCollapse}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <motion.div
              animate={{ rotate: collapsed ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft className="w-4 h-4 text-[#6C7278]" />
            </motion.div>
          </motion.button>
        )}
      </div>

      {/* Mobile Close Button */}
      {onClose && (
        <motion.button
          className="lg:hidden mb-4 p-2 rounded-lg hover:bg-gray-100 ml-auto mr-4"
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5 text-gray-700" />
        </motion.button>
      )}

      <h2 className={cn("text-[11px] lg:text-[12px] font-medium text-[#A8A8A8] capitalize tracking-wider mb-2 px-4 lg:px-6", collapsed && "sr-only")}>
        Main Menu
      </h2>

      <nav className="space-y-1 px-2 lg:px-0">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedItems.includes(item.label);

          return (
            <div key={item.label}>
              <motion.button
                className={cn(
                  "relative w-full flex items-center justify-between px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg lg:rounded-none",
                  "text-sm font-medium transition-colors duration-200 cursor-pointer",
                  item.active
                    ? "bg-[#EEF2FF] text-[#1B4FF8]"
                    : "text-[#64748B] hover:bg-[#F1F5F9]",
                  collapsed && "px-2.5 justify-center"
                )}
                onClick={() =>
                  item.hasChildren
                    ? toggleExpanded(item.label)
                    : undefined
                }
                whileTap={{ scale: 0.98 }}
              >
                {item.active && (
                  <motion.span
                    layoutId="sidebar-active-indicator"
                    className="absolute right-0 top-0 bottom-0 w-0.5 bg-[#1B4FF8]"
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
                <div className="flex items-center gap-2.5 lg:gap-3">
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5 shrink-0" />
                  <span className={cn("truncate text-sm", collapsed && "sr-only")}>{item.label}</span>
                </div>
                {item.hasChildren && (
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={cn("w-4 h-4", collapsed && "sr-only")} />
                  </motion.div>
                )}
              </motion.button>

              <AnimatePresence>
                {item.hasChildren && isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn("overflow-hidden pl-9 lg:pl-11 mt-1", collapsed && "hidden")}
                  >
                    {item.children?.map((child) => (
                      <motion.a
                        key={child}
                        href="#"
                        className="block py-1.5 lg:py-2 px-3 lg:px-0 text-sm text-gray-600 hover:text-gray-900 rounded-lg lg:rounded-none hover:bg-gray-50 lg:hover:bg-transparent"
                        whileHover={{ x: collapsed ? 0 : 4 }}
                      >
                        {child}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      <div className={cn("mt-6 lg:mt-8 mb-4 pt-0", collapsed && "mt-auto")}>
        <h2 className={cn("text-[11px] lg:text-[12px] font-medium text-[#A8A8A8] capitalize tracking-wider mb-2 px-4 lg:px-6", collapsed && "sr-only")}>
          Help & Settings
        </h2>
        <nav className="space-y-1 px-2 lg:px-0">
          {helpItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-2.5 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg lg:rounded-none text-sm font-medium text-[#64748B] hover:bg-[#F1F5F9]",
                  collapsed && "px-2.5 justify-center"
                )}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5 shrink-0" />
                <span className={cn("truncate", collapsed && "sr-only")}>{item.label}</span>
              </motion.a>
            );
          })}
        </nav>
      </div>

      <motion.button
        className={cn(
          "w-full flex items-center gap-2.5 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg lg:rounded-none text-sm font-medium text-[#C53030] hover:bg-red-50 mt-auto mx-2 lg:mx-0 cursor-pointer",
          collapsed && "px-2.5 justify-center mx-0"
        )}
        whileTap={{ scale: 0.98 }}
      >
        <LogOut className="w-4 h-4 lg:w-5 lg:h-5 shrink-0" />
        <span className={cn(collapsed && "sr-only")}>Logout</span>
      </motion.button>
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            <motion.aside
              className="fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 w-72 sm:w-80 overflow-hidden lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div
                data-lenis-prevent
                className="h-full overflow-y-auto overflow-x-hidden overscroll-contain"
              >
                {sidebarContent}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      
      {/* Tablet Sidebar (md breakpoint) */}
      <motion.aside
        className={cn(
          "hidden md:block lg:hidden bg-white border-r border-gray-200 h-screen sticky top-0 z-40"
        )}
        animate={{ width: collapsed ? 80 : 200 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        <div
          data-lenis-prevent
          className="h-full overflow-y-auto overflow-x-hidden overscroll-contain"
        >
          {sidebarContent}
        </div>
      </motion.aside>
      
      {/* Desktop Sidebar (always visible) */}
      <motion.aside
        className={cn(
          "hidden lg:block bg-white border-r border-gray-200 h-screen sticky top-0 z-50 "
        )}
        animate={{ width: collapsed ? 80 : 200 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        <div
          data-lenis-prevent
          className="h-full overflow-y-auto  overscroll-contain"
        >
          {sidebarContent}
        </div>
      </motion.aside>
    </>
  );
}
