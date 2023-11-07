import IMG from '@/../public/img/InformationWorkImg.png';
import Image from "next/image";

export default function InformationWork(){
    return(
        <div className="flex justify-center items-center gap-12 h-full max-[1000px]:flex-col">
            <Image src={IMG} alt={""} className="max-md:hidden"/>
            <div className="space-y-10">
                <h2 className="font-montserrat text-4xl font-bold max-[1000px]:text-center max-md:text-2xl">Gostaria de Trabalhar Conosco</h2>
                <p className="font-montserrat font-light max-w-2xl text-2xl max-[1000px]:text-center max-md:text-xl max-sm:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}