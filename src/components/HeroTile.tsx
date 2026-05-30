"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "COURSES", value: "4" },
  { label: "STREAK", value: "12" },
  { label: "HOURS", value: "24" },
];

export default function HeroTile() {
  return (
    <div className="relative h-[280px] overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-violet-950 p-8">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm text-zinc-500">Hello,</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Nabila</h1>
          <p className="mt-3 text-zinc-400">Continue your learning journey.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-zinc-400">Overall Progress</span>
            <span className="font-medium text-cyan-400">68%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
              initial={{ width: "0%" }}
              animate={{ width: "68%" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.35 }}
            >
              <p className="text-xs text-zinc-500">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}