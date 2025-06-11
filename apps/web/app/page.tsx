import LandingHeader from "@/components/LandingHeader";
import LandingHero from "@/components/LandingHero";
import LandingFeatures from "@/components/LandingFeatures";
import LandingHowItWorks from "@/components/LandingHowItWorks";
import LandingTestimonials from "@/components/LandingTestimonials";
import LandingFooter from "@/components/LandingFooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <main>
        <LandingHero />
        <section id="features">
          <LandingFeatures />
        </section>
        <section id="how-it-works">
          <LandingHowItWorks />
        </section>
        <section id="testimonials">
          <LandingTestimonials />
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}