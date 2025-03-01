"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Check, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

interface PasswordStepProps {
  formData: {
    password: string
  }
  updateFormData: (data: { password: string }) => void
  onNext: () => void
  onBack: () => void
}

export function PasswordStep({ formData, updateFormData, onNext, onBack }: PasswordStepProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [acceptUpdates, setAcceptUpdates] = useState(false)

  const validatePassword = (password: string) => {
    return {
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*]/.test(password),
      length: password.length >= 8,
    }
  }

  const validation = validatePassword(formData.password)
  const isValid = Object.values(validation).every(Boolean) && formData.password === confirmPassword && acceptTerms

  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" size="sm" className="mb-4" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-2xl font-semibold">Create password</h1>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Password</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password (min. of 8 characters)"
              value={formData.password}
              onChange={(e) => updateFormData({ password: e.target.value })}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Confirm password</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password (min. of 8 characters)"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
            </Button>
          </div>
        </div>

        <div className="space-y-2 rounded-lg bg-gray-50 p-4">
          <div className="text-sm font-medium">AT LEAST:</div>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(validation).map(([key, valid]) => (
              <div
                key={key}
                className={`flex items-center gap-2 text-sm ${valid ? "text-green-600" : "text-gray-500"}`}
              >
                {valid && <Check className="h-4 w-4" />}
                {key === "lowercase" && "A lowercase letter"}
                {key === "uppercase" && "An uppercase letter"}
                {key === "number" && "A number"}
                {key === "special" && "A special character"}
                {key === "length" && "At least 8 characters"}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="updates"
              checked={acceptUpdates}
              onCheckedChange={(checked) => setAcceptUpdates(checked as boolean)}
            />
            <label htmlFor="updates" className="text-sm text-gray-500 leading-none">
              I agree to receive product updates, announcements, and exclusive offers via email.
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
            />
            <label htmlFor="terms" className="text-sm text-gray-500 leading-none">
              I accept the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
        </div>

        <Button className="w-full" onClick={onNext} disabled={!isValid}>
          Continue
        </Button>
      </div>
    </div>
  )
}

