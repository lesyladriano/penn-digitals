import { souv1, souv2, souv3, souv4, souv5, souv6 } from "@/assets";
import Invitations from "../../components/services/souvenirs/invitations";
import Souvenir from '../../components/services/souvenirs/souvenir'
import React from "react";
import Image from "next/image";
import Layoutservices from "@/components/services/souvenirs/layoutservices";
import Printing from "@/components/services/souvenirs/printing";
import ContactHeader from "@/components/ui/contact/contactHeader";
import Footer from "@/components/ui/footer";
function page() {
  return (
    <div>
      <div style={{zIndex:'9999'}}>
        <ContactHeader/>
      </div>
      <div className="">
      <div id="souvenir">
        <Souvenir/>
      </div>
      <div id="invitation">
        <Invitations />
      </div>
      <div id="layout">
        <Layoutservices />
      </div>
      <div id='printing' className="mb-[2rem]">
        <Printing />
      </div>
      </div>

    <Footer/>
    </div>
  );
}

export default page;
