"use client";

import { useState } from "react";
import { AuthLayout } from "@/components/auth/auth-layout";
import { ProgressSteps } from "@/components/auth/progress-steps";
import { StepOne } from "@/components/auth/parent-registration/step-one";
import { StepTwo } from "@/components/auth/parent-registration/step-two";
import { StepThree } from "@/components/auth/parent-registration/step-three";

import RegisterAuth from "./auth";
import { Session } from "next-auth";

export default function ParentRegistration({
  session,
}: {
  session: Session | null;
}) {
  const [step, setStep] = useState(1);

  return (
    <AuthLayout
      title="Give Your Child the Best Education"
      description="Register now to access our hybrid learning platform and connect with qualified teachers in your area."
    >
      {session ? (
        <>
          <ProgressSteps currentStep={step} totalSteps={3} />

          {step === 1 && <StepOne onNext={() => setStep(2)} />}
          {step === 2 && (
            <StepTwo onNext={() => setStep(3)} onBack={() => setStep(1)} />
          )}
          {step === 3 && (
            <StepThree
              onBack={() => setStep(2)}
              onComplete={() => console.log("Registration completed")}
            />
          )}
        </>
      ) : (
        <RegisterAuth />
      )}
    </AuthLayout>
  );
}
