import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import CTA from "@/components/home/CTA"


export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <HowItWorks />
      <Features />
      <CTA />
    </main>
  );
}
