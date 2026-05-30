"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.02 } },
};

const cell = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export default function ActivityTile() {
  const cells = useMemo(
    () => Array.from({ length: 35 }, () => Math.random() > 0.5),
    []
  );

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="mb-6 text-lg font-semibold">Weekly Activity</h3>
      <motion.div
        className="grid grid-cols-7 gap-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {cells.map((active, index) => (
          <motion.div
            key={index}
            variants={cell}
            className={`aspect-square rounded ${
              active ? "bg-cyan-500/70" : "bg-zinc-800"
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
}