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
        <Services/>
        <Needservices/>
        <Footer/>
        </section>
      </main>
    )
  }
  