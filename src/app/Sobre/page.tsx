<<<<<<< HEAD:src/app/About/page.tsx
import About from "@/components/About/about/about";
import Bases from "@/components/About/bases/bases";
import Mission from "@/components/About/mission/Mission";
import Needservices from "@/components/About/needservices/needservices";
import SwiperLogos from "@/components/About/swiper/SwiperLogos";
=======
>>>>>>> 7bcfdc5172fbe9e2aaaac789a1f9abf9ff807f8f:src/app/Sobre/page.tsx
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import About from "@/components/Sobre/about/about";
import Bases from "@/components/Sobre/bases/bases";
import Mission from "@/components/Sobre/mission/Mission";
import Needservices from "@/components/Sobre/needservices/needservices";
import Services from "@/components/service/Services";

export default function Abouts() {
    return (
      <main className="">
        <NavBar/>
        <section className="space-y-28">
        <About/>
        <Mission/>
        <Bases/>
        <SwiperLogos/>
        <Services/>
        <Needservices/>
        <Footer/>
        </section>
      </main>
    )
  }
  