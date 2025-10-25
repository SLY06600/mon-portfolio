// import Image from "next/image";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";



export default function Home() {
  return (
  
    <>
    <Navbar/>

    <Hero/>

       {/* Fond SVG décoratif */}
       <section className="relative bg-white">
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="#3b82f6"
          fillOpacity="0.2"
          d="M0,160L40,160C80,160,160,160,240,176C320,192,400,224,480,229.3C560,235,640,213,720,197.3C800,181,880,171,960,154.7C1040,139,1120,117,1200,133.3C1280,149,1360,203,1400,229.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
    </section>
    

 
    
  

  <Footer/>
    </>
  );
}
