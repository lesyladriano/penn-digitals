import { FaFacebook, FaPhone, FaEnvelope, FaMapMarker  } from "react-icons/fa";
import { GrMap } from "react-icons/gr";

const iconComponents = {
    Facebook: FaFacebook,
    Phone: FaPhone,
    Envelope: FaEnvelope,
    MapMarker: GrMap,
  };
  
export const landingFooterList=[
    {
        title:"Facebook Page",
        info:"@penndigitals",
        icon: 'Facebook',
        link:"https://www.facebook.com/thepenndigitals"
    },
    {
        title:"Contact Number",
        info:"+63 976 322 3201",
        icon: 'Phone',
        link:'+63 976 322 3201'
    },
    {
        title:"Email Address",
        info:"thepenndigitals@gmail.com",
        icon: 'Envelope',
        link:"thepenndigitals@gmail.com"
    },
    {
        title:"Location",
        info:"Cabanatuan City, Nueva Ecija",
        icon: 'MapMarker',
        link:"https://www.google.com/maps/place/Cabanatuan+City,+Nueva+Ecija/@15.4853424,120.9459528,11.71z/data=!4m6!3m5!1s0x33972921652f4ccb:0x3ddca086bad37111!8m2!3d15.4865047!4d120.973393!16zL20vMDU2anls?entry=ttu"
    },
]