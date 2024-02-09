import IMG from '@/../public/img/ContactImg.png';
import Image from "next/image";

export default function InformationContact(){
    return(
        <div className="flex justify-center items-center gap-12 h-full max-[1000px]:flex-col ">
            <div className="space-y-10">
                <h2 className="font-montserrat text-4xl font-bold max-[1000px]:text-center max-md:text-2xl">Nossa equipe esta disponível para te ajudar</h2>
                <p className="font-montserrat font-light max-w-2xl text-2xl max-[1000px]:text-center max-md:text-xl max-sm:text-base">Informamos que contamos com uma equipe altamente qualificada e especializada para atender às suas necessidades. Na busca constante pela excelência e pela entrega de soluções de alta qualidade, investimos no desenvolvimento e capacitação de profissionais especializados em diversas áreas.</p>
            </div>
            <Image src={IMG} alt={""}/>
        </div>
    )
}