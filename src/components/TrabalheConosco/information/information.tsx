import IMG from '@/../public/img/InformationWorkImg.png';
import Image from "next/image";

export default function InformationWork(){
    return(
        <div className="flex justify-center items-center gap-12 h-full max-[1000px]:flex-col">
            <Image src={IMG} alt={""} className="max-md:hidden"/>
            <div className="space-y-10">
                <h2 className="font-montserrat text-4xl font-bold max-[1000px]:text-center max-md:text-2xl">Gostaria de Trabalhar Conosco</h2>
                <p className="font-montserrat font-light max-w-2xl text-2xl max-[1000px]:text-center max-md:text-xl max-sm:text-base">Junte-se a nós e faça parte de uma equipe comprometida com a excelência! Estamos à procura de talentos como você para fortalecer nossa empresa. Envie seu currículo para análise e abra as portas para uma oportunidade de crescimento profissional conosco. Estamos ansiosos para conhecê-lo e descobrir como podemos colaborar juntos para alcançar nossos objetivos.</p>
            </div>
        </div>
    )
}