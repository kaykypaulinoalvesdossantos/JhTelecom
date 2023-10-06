import About from "@/components/About/about/about";
import Bases from "@/components/About/bases/bases";
import Mission from "@/components/About/mission/Mission";
import Needservices from "@/components/About/needservices/needservices";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
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
  