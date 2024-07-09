'use client'

import { motion } from 'framer-motion'

export default function Animate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
    initial={{ x: "100%" }}
    animate={{ x: "calc(100vw - 100%)" }}
    >
      {children}
    </motion.div>
  )
}