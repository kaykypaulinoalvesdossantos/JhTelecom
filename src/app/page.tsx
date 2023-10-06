import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Services from "@/components/service/Services";
import About from "@/components/subcomponents/about/About";
import CompontsVideo from "@/components/subcomponents/compontsVideo/compontsVideo";
import Contact from "@/components/subcomponents/contact/Contact";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <section className="space-y-28">
      <CompontsVideo/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
      </section>
    </main>
  )
}
