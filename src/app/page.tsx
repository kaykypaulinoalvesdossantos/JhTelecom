import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import NewsPage from "@/components/home/News/News";
import About from "@/components/home/about/About";
import CompontsVideo from "@/components/home/compontsVideo/compontsVideo";
import Contact from "@/components/home/contact/Contact";
import Services from "@/components/service/Services";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <section className="space-y-28">
      <CompontsVideo/>
      <About/>
      <NewsPage/>
      <Contact/>
      <Footer/>
      </section>
    </main>
  )
}
