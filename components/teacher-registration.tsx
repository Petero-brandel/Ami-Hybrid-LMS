"use client";

import { useState } from "react";
import { AuthLayout } from "@/components/auth/auth-layout";
import { ProgressSteps } from "@/components/auth/progress-steps";
import { StepOne } from "@/components/auth/teacher-registration/step-one";
import { StepTwo } from "@/components/auth/teacher-registration/step-two";
import { StepThree } from "@/components/auth/teacher-registration/step-three";
import RegisterAuth from "./auth";

export default function TeacherRegistration({ session }: { session: unknown }) {
  const [step, setStep] = useState(1);

  return (
    <AuthLayout
      title="Join Our Teaching Community"
      description="Apply now to become part of our innovative hybrid learning platform and shape the future of education."
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
