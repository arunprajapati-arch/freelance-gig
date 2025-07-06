import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";

export default function Home() {
  return (
    <div className=" flex flex-col gap-2 sm:gap-3 md:gap-4 bg-rose-900 px-0  sm:px-4 md:px-6 lg:px-8 pt-4 md:p-4 md:pb-8">
      <Navbar />
      <Hero />
    </div>
  );
}