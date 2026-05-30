"use client";

import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  FileCode,
  Sparkles,
  LucideIcon,
} from "lucide-react";

type Props = {
  title: string;
  progress: number;
  iconName: string;
};

const iconMap: Record<string, LucideIcon> = {
  Code,
  Rocket,
  FileCode,
  Sparkles,
};

export default function CourseCard({
  title,
  progress,
  iconName,
}: Props) {
  const Icon = iconMap[iconName] || Code;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-cyan-500/30"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-xl bg-zinc-800/70 p-3">
          <Icon
            size={22}
            className="text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300"
          />
        </div>

        <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
          {progress}%
        </span>
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: 0.2,
          }}
        />
      </div>

      <div className="mt-3 text-sm text-zinc-400">
        {progress}% Complete
      </div>
    </motion.div>
  );
}