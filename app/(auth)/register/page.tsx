"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon, Eye, EyeOff } from "lucide-react";
import { LanguageSelector } from "@/components/language-selector";

export default function Register() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    middleName: "",
    surname: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 md:p-6">
        <Link href="/" className="text-xl font-bold">
          AMI
        </Link>
        <LanguageSelector />
      </header>

      <main className="flex-1 px-4 py-8 md:py-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="order-2 lg:order-1 lg:sticky lg:top-8 space-y-6">
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square max-w-[500px] mx-auto lg:max-w-none">
                <Image
                  src="https://qgame3ccfcbtygae.public.blob.vercel-storage.com/A%20classic%20oil%20painting%20depicting%20a%203D%20illustration%20of%20an%20African%20child%20with%20curly%20hair,%20joyf-uRZIYmegcY6p4GEoKXNsckyWkfksMI.jpg"
                  alt="African child illustration"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-2xl font-bold md:text-3xl">
                  {step === 1
                    ? "Receive your payments faster"
                    : step === 2
                    ? "Instantly convert between currencies"
                    : step === 3
                    ? "Spend globally with your Dollar card"
                    : "Verify your account"}
                </h1>
                <p className="text-gray-500 md:text-lg">
                  {step === 1
                    ? "Open a global bank account to send and receive payments in minutes"
                    : step === 2
                    ? "Swap currencies with no hidden fees at the best market rates"
                    : step === 3
                    ? "Spend freely with a debit card that makes your international payments easier"
                    : "Complete your account setup to start using AMI"}
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="max-w-[500px] mx-auto space-y-8">
                {/* Progress Indicator */}
                <div className="flex items-center gap-2 px-2">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-center gap-2 flex-1">
                      <div
                        className={`h-6 w-6 rounded-full flex items-center justify-center text-sm flex-shrink-0
                        ${
                          num === step
                            ? "bg-primary text-white"
                            : num < step
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {num < step ? "✓" : num}
                      </div>
                      {num < 4 && (
                        <div
                          className={`h-0.5 w-full ${
                            num < step ? "bg-green-500" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-gray-500">STEP 1</div>
                      <h2 className="text-xl font-semibold mt-1">
                        Country of residence
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>What country do you live in?</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Nigeria" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nigeria">Nigeria</SelectItem>
                            <SelectItem value="ghana">Ghana</SelectItem>
                            <SelectItem value="kenya">Kenya</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Alert
                        variant="default"
                        className="bg-blue-50 text-blue-800 border-blue-100"
                      >
                        <InfoIcon className="h-4 w-4" />
                        <AlertDescription>
                          The documents you can use for verification depend only
                          on your selected country of residence. Please
                          double-check your choice.
                        </AlertDescription>
                      </Alert>

                      <Button className="w-full" onClick={handleNext}>
                        Continue →
                      </Button>

                      <p className="text-center text-sm text-gray-500">
                        Got an account?{" "}
                        <Link
                          href="/login"
                          className="text-primary hover:underline"
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-gray-500">STEP 2</div>
                      <h2 className="text-xl font-semibold mt-1">
                        Set up your account
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>First name (as it is on your ID)</Label>
                        <Input placeholder="Enter your legal first name" />
                      </div>

                      <div className="space-y-2">
                        <Label>Middle name (Optional)</Label>
                        <Input placeholder="Enter your legal middle name" />
                      </div>

                      <div className="space-y-2">
                        <Label>Surname (as it is on your ID)</Label>
                        <Input placeholder="Enter your legal surname" />
                      </div>

                      <div className="space-y-2">
                        <Label>Gender</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Email address</Label>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Phone number</Label>
                        <div className="flex gap-2">
                          <Select defaultValue="+234">
                            <SelectTrigger className="w-[100px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="+234">+234</SelectItem>
                              <SelectItem value="+233">+233</SelectItem>
                              <SelectItem value="+254">+254</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            placeholder="Enter phone number"
                            className="flex-1"
                          />
                        </div>
                      </div>

                      <Button className="w-full" onClick={handleNext}>
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-gray-500">STEP 3</div>
                      <h2 className="text-xl font-semibold mt-1">
                        Create password
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Password</Label>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password (min. of 8 characters)"
                          />
                          <button
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Confirm password</Label>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password (min. of 8 characters)"
                          />
                          <button
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                        <div className="font-medium">AT LEAST:</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-green-600">
                            <span>✓</span>
                            <span>A lowercase letter</span>
                          </div>
                          <div className="flex items-center gap-2 text-green-600">
                            <span>✓</span>
                            <span>An uppercase letter</span>
                          </div>
                          <div className="flex items-center gap-2 text-green-600">
                            <span>✓</span>
                            <span>A number</span>
                          </div>
                          <div className="flex items-center gap-2 text-green-600">
                            <span>✓</span>
                            <span>A special character</span>
                          </div>
                          <div className="flex items-center gap-2 text-green-600">
                            <span>✓</span>
                            <span>At least 8 characters</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Checkbox id="updates" />
                          <label
                            htmlFor="updates"
                            className="text-sm text-gray-500"
                          >
                            I agree to receive product updates, announcements,
                            and exclusive offers via email.
                          </label>
                        </div>

                        <div className="flex items-center gap-2">
                          <Checkbox id="terms" />
                          <label
                            htmlFor="terms"
                            className="text-sm text-gray-500"
                          >
                            I accept the{" "}
                            <Link
                              href="/terms"
                              className="text-primary hover:underline"
                            >
                              Terms of Use
                            </Link>{" "}
                            and{" "}
                            <Link
                              href="/privacy"
                              className="text-primary hover:underline"
                            >
                              Privacy Policy
                            </Link>
                          </label>
                        </div>
                      </div>

                      <Button className="w-full" onClick={handleNext}>
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-gray-500">STEP 4</div>
                      <h2 className="text-xl font-semibold mt-1">
                        Verify email
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm text-gray-500">
                        Please enter the OTP sent to the email address you
                        provided to verify your email address
                      </p>

                      <div className="flex justify-between gap-2">
                        {[...Array(6)].map((_, i) => (
                          <Input
                            key={i}
                            type="text"
                            maxLength={1}
                            className="w-12 h-12 text-center text-lg"
                          />
                        ))}
                      </div>

                      <Button className="w-full">Verify your account</Button>

                      <Button variant="link" className="w-full">
                        Resend code
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
              <Link href="/help" className="hover:text-gray-900">
                Help Center
              </Link>
              <Link href="/terms" className="hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
            </div>
            <div className="text-sm text-gray-500">© AMI, 2025</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
