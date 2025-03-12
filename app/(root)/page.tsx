"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Footer from "@/components/Landing/Footer";
import ActionSection from "@/components/Landing/ActionSection";
import HeroSection from "@/components/Landing/HeroPage";
import LessionSection from "@/components/Landing/LessionSection";
import KeyFeatures from "@/components/Feature";
import HowItWorks from "@/components/HowItWorks";
import Newsletter from "@/components/Newsletter";
import TestimonialSection from "@/components/Testmony";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <KeyFeatures />
      <HowItWorks />
      <LessionSection />
      <ActionSection />
      <Newsletter />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
