"use client";
import { motion } from "framer-motion";
import {
  LayoutDashboard, BookOpen, BarChart3,
  Trophy, Settings, GraduationCap,
} from "lucide-react";

const items = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Courses", icon: BookOpen },
  { name: "Progress", icon: BarChart3 },
  { name: "Achievements", icon: Trophy },
  { name: "Settings", icon: Settings },
];

const navContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const navItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-[#0a0a0f] p-6">
      <motion.div
        className="mb-12 flex items-center gap-4"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600">
          <GraduationCap size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">Nexus</h1>
          <p className="text-xs text-zinc-500">Learning Hub</p>
        </div>
      </motion.div>

      <motion.nav
        className="flex flex-1 flex-col gap-2"
        variants={navContainer}
        initial="hidden"
        animate="show"
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.name}
              variants={navItem}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors duration-200 ${
                index === 0
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <motion.span whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 400 }}>
                <Icon size={20} />
              </motion.span>
              <span className="font-medium">{item.name}</span>
            </motion.button>
          );
        })}
      </motion.nav>

      <motion.div
        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <p className="text-xs text-zinc-500">ACTIVE PLAN</p>
        <h3 className="mt-1 font-semibold">Pro Learner</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Access all premium courses and analytics.
        </p>
      </motion.div>
    </aside>
  );
}