import aboutImg from '@/../public/img/aboutImg.png';
import Image from "next/image";
import Link from "next/link";

export default function About(){
    return(
        <div className="flex justify-around items-center gap-12">
            <div className="space-y-14 max-lg:flex max-lg:flex-col max-lg:items-center">
                <h2 className="font-inter text-[#1c3363] text-6xl font-bold max-sm:text-4xl">Sobre</h2>
                <p className="font-inter text-xl max-w-2xl  max-lg:text-center max-sm:text-base">Somos uma empresa líder no setor de soluções avançadas em Fibra Óptica, reconhecida pela nossa dedicação à excelência, eficiência e agilidade. Nosso compromisso com a entrega de resultados superiores é respaldado por uma equipe altamente qualificada, que garante a satisfação dos nossos clientes através de inovação e qualidade incomparáveis no campo das comunicações por fibra óptica. Além disso, assumimos um compromisso social significativo, contribuindo para projetos nas periferias de São Paulo e integrando pessoas com menos oportunidades ao mercado de trabalho através do nosso projeto "Recomeço".</p>
                <Link href={""} className=""><button className="mt-14 bg-[#2d52a3] py-4 px-16 max-sm:py-3 max-sm:mt-0 max-sm:text-xl max-sm:px-8 text-white font-bold text-2xl rounded-lg shadow-buttonShadow">Ver Mais</button></Link>
            </div>
            <Image src={aboutImg} alt={""} className="max-h-[600px] max-w-xl max-lg:hidden"/>
        </div>
    )
}