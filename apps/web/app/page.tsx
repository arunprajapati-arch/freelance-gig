import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-2 sm:gap-3 md:gap-4 bg-rose-900 px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-6 lg:py-8">
      <Navbar />
      <Hero />
    </div>
  );
}