import { tpd_logo } from "@/assets";
import Header from "@/components/ui/header";
import Navbar from "@/components/ui/navbar/navbar";
import Hero from "@/components/ui/hero";
import Image from "next/image";
import IntroBanner from "@/components/ui/introBanner";
import ProductMarquee from "@/components/ui/productMarquee";
import ServicesAccordion from "@/components/ui/servicesAccordion";
import LandingPageFooter from "@/components/ui/landingPageFooter";
import Feedback from "@/components/ui/feedback";
import MeetKai from "@/components/about/meetKai";
export default function Home() {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Hero />
      <ProductMarquee />
      <IntroBanner />
      <ServicesAccordion/>
      <MeetKai />
      <Feedback />
      <LandingPageFooter/>

    </div>
  );
}
