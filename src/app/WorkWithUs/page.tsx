import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import WhatExpect from "@/components/WorkWithUs/Whatexpect/whatexpect";
import FormContats from "@/components/WorkWithUs/formContats/FormContats";
import InformationWork from "@/components/WorkWithUs/information/information";

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