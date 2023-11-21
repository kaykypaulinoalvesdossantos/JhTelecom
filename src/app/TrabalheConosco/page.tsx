import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
<<<<<<< HEAD:src/app/WorkWithUs/page.tsx
import WhatExpect from "@/components/WorkWithUs/Whatexpect/whatexpect";
import FormContats from "@/components/WorkWithUs/formContats/FormContats";
import InformationWork from "@/components/WorkWithUs/information/information";
=======
import WhatExpect from "@/components/TrabalheConosco/Whatexpect/whatexpect";
import InformationWork from "@/components/TrabalheConosco/information/information";
>>>>>>> 7bcfdc5172fbe9e2aaaac789a1f9abf9ff807f8f:src/app/TrabalheConosco/page.tsx

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