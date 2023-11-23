import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import FormContats from "@/components/WorkWithUs/formContats/FormContats";
import WhatExpect from "@/components/TrabalheConosco/Whatexpect/whatexpect";
import InformationWork from "@/components/TrabalheConosco/information/information";

export default function Workwithus(){
    return(
        <main className="">
        <section className="space-y-28">
        <NavBar/>
        <InformationWork/>
        <WhatExpect/>
        <FormContats/>
        <Footer/>
        </section>
      </main>
    )
}