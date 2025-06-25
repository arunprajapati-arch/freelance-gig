
import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-4 bg-orange-200/80 px-8 py-8">
      <Navbar />
     <Hero />
    </div>
  );
}