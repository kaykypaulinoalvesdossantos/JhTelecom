import BusinessContact from "@/components/Contato/Businesscontact/businesscontact";
import InformationContact from "@/components/Contato/Information/information";
import FomsContatos from "@/components/Contato/formscontatos/FormsContatos";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Contact(){
    return(
        <main className="">
        <NavBar/>
        <section className="space-y-28">
        <BusinessContact/>
        <InformationContact/>
        <FomsContatos/>
        <Footer/>
        </section>
      </main>
    )

}