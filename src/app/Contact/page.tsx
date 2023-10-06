import BusinessContact from "@/components/Contact/Businesscontact/businesscontact";
import InformationContact from "@/components/Contact/Information/information";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Contact(){
    return(
        <main className="">
        <NavBar/>
        <section className="space-y-28">
        <BusinessContact/>
        <InformationContact/>
        <Footer/>
        </section>
      </main>
    )

}