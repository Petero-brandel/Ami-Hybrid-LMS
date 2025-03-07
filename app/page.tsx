import Footer from "@/components/Landing/Footer";
import ActionSection from "@/components/Landing/ActionSection";
import HeroSection from "@/components/Landing/HeroPage";
import LessionSection from "@/components/Landing/LessionSection";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <LessionSection />
      <ActionSection />
      <Footer />
    </div>
  );
}
