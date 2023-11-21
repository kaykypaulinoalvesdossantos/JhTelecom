import Image from "next/image";
import Link from "next/link";
import aboutImg from '@/../public/img/aboutImg.png'

export default function About(){
    return(
        <div className="flex justify-around items-center">
            <div className="space-y-14 max-lg:flex max-lg:flex-col max-lg:items-center">
                <h2 className="font-inter text-[#1c3363] text-6xl font-bold max-sm:text-4xl">Sobre</h2>
                <p className="font-inter text-xl max-w-xl lg:max-w-sm max-lg:text-center max-sm:text-base ">Somos uma renomada empresa especializada em oferecer soluções avançadas em Fibra Óptica, destacando-nos pela eficiência, agilidade e excelência em serviços prestados. Comprometidos com a entrega de resultados superiores, nossa equipe altamente qualificada assegura a satisfação de nossos clientes, proporcionando inovação e qualidade incomparáveis no cenário de comunicações por fibra óptica. Conferimos a confiança necessária para impulsionar o crescimento e o sucesso de sua infraestrutura tecnológica.</p>
                <Link href={""} className=""><button className="mt-14 bg-[#2d52a3] py-4 px-16 max-sm:py-3 max-sm:mt-0 max-sm:text-xl max-sm:px-8 text-white font-bold text-2xl rounded-lg shadow-buttonShadow">Ver Mais</button></Link>
            </div>
            <Image src={aboutImg} alt={""} className="max-h-[600px] max-w-xl max-lg:hidden"/>
        </div>
    )
}