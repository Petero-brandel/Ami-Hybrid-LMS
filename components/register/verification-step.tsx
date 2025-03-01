"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"

interface VerificationStepProps {
  formData: {
    email: string
  }
  onBack: () => void
}

export function VerificationStep({ formData, onBack }: VerificationStepProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" size="sm" className="mb-4" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-2xl font-semibold">Verify your email address</h1>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-gray-500">
          Please enter the OTP sent to the email address you provided to verify your email address
        </p>

        <div className="flex justify-between gap-2">
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              className="h-12 w-12 text-center text-lg"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>

        <Button className="w-full" disabled={!otp.every(Boolean)}>
          Verify your account
        </Button>

        <Button variant="link" className="w-full" onClick={() => setOtp(["", "", "", "", "", ""])}>
          Resend code
        </Button>
      </div>
    </div>
  )
}

