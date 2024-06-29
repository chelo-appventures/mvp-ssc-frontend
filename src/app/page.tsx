"use client"

import { motion } from "framer-motion"
import { useState } from "react"

import { BgAnimatedGradient } from "@/components/generic/bg-animated-gradient"
import { Login } from "@/components/this_app/Login"
import { SignUp } from "@/components/this_app/SignUp"

export default function Home() {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <BgAnimatedGradient>
      <main className="flex min-h-screen flex-col items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-1 flex-col items-center justify-center">
          <div className="flex">
            <p className="px-5 text-center text-5xl">Buy me a beer</p>
          </div>
          <motion.div
            className="mt-5 text-xl text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}>
            <p className="px-5 text-center">Donate a virtual beer 🍺</p>
          </motion.div>

          <div className="h-5" />

          <motion.div
            className="w-full max-w-sm p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}>
            {isSignUp ? (
              <SignUp {...{ setIsSignUp }} />
            ) : (
              <Login {...{ setIsSignUp }} />
            )}
          </motion.div>
        </motion.div>
      </main>
    </BgAnimatedGradient>
  )
}
