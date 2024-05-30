"use client"

import { motion } from "framer-motion"
import { useState } from "react"

import { BgAnimatedGradient } from "@/components/generic/bg-animated-gradient"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [email, setEmail] = useState("")

  return (
    <BgAnimatedGradient>
      <main className="flex min-h-screen flex-col items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-1 flex-col items-center justify-center">
          <div className="flex">
            <p className="px-5 text-center text-5xl">Sprint smart contracts</p>
          </div>
          <motion.div
            className="mt-3 text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}>
            <p className="px-5 text-center">
              Your sprints with blockchain technology
            </p>
          </motion.div>

          <div className="h-5" />

          <motion.div
            className="w-full max-w-sm p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}>
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="h-4" />
            <Button
              className="w-full"
              onClick={() => alert(`Hello ${email}!!`)}>
              Start!
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </BgAnimatedGradient>
  )
}
