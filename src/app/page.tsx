import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Workflow from "@/components/Workflow";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Recents from "@/components/Recents";
import Socialproof from "@/components/socialproof1";
import Company from "@/components/company";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Socialproof />
      <Workflow />
      <Company />
      <Recents />
      <div id="plans">
        <Plans />
      </div>
      <Footer />
    </div>
  );
}
