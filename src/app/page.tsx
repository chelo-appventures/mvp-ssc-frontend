"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [name, setName] = useState("")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p className="p-10 text-2xl">Sprint smart contract</p>

      <Input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="max-w-sm"
      />
      <div className="h-4" />
      <Button
        className="w-full max-w-sm"
        onClick={() => alert(`Hello ${name}`)}>
        Say Hello
      </Button>
    </main>
  )
}
