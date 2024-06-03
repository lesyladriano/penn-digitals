import { tpd_logo } from "@/assets";
import Hero from "@/components/ui/hero";
import Image from "next/image";
import IntroBanner from "@/components/ui/introBanner"
import ProductMarquee from  "@/components/ui/productMarquee"
import About from "@/components/about/about";
import Navbar from "@/components/ui/navbar/navbar";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ContactHeader from "@/components/ui/contact/contactHeader";

export default function Home() {
  return (
    <div>
      <ContactHeader/>
      <About />
      <Footer />
    </div>
  );
}
