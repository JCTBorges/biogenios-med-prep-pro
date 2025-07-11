
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Differentials } from "@/components/Differentials";
import { StudyPlan } from "@/components/StudyPlan";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      <Hero />
      <Differentials />
      <Features />
      <StudyPlan />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
