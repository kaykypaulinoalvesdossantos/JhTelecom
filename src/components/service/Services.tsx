import Image from "next/image"
import serviceimg01 from '@/../public/img/Servicesimg01.png'
import serviceimg02 from '@/../public/img/Servicesimg02.png'
import serviceimg03 from '@/../public/img/Servicesimg03.png'

export default function Services(){
    return(
        <div className="space-y-40 flex flex-col items-center">
            <h2 className="font-inter text-[#1c3363] text-6xl font-bold">Serviços</h2>
            <div className="space-y-28">
                <div className="gap-36 flex items-center max-lg:flex-col max-lg:items-center">
                <Image src={serviceimg01} alt={""}/>
                <div className="space-y-12">
                    <h3 className="font-inter text-[#1c3363] text-4xl font-bold max-lg:text-center">Gerenciamento de Servidor</h3>
                    <p className="font-inter text-xl max-w-xl max-lg:text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                </div>
                </div>
            </div>

            <div className="space-y-28">
                <div className="gap-36 flex items-center max-lg:flex-col max-lg:items-center">
                <Image src={serviceimg02} alt={""}/>
                <div className="space-y-12">
                    <h3 className="font-inter text-[#1c3363] text-4xl font-bold max-lg:text-center">Suporte Técnico Casa Cliente</h3>
                    <p className="font-inter text-xl max-w-xl max-lg:text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                </div>
                <Image src={serviceimg02} alt={""} className="max-lg:hidden"/>
                </div>
            </div>

            <div className="space-y-28">
                <div className="gap-36 flex items-center max-lg:flex-col max-lg:items-center">
                <Image src={serviceimg03} alt={""}/>
                <div className="space-y-12">
                    <h3 className="font-inter text-[#1c3363] text-4xl font-bold max-lg:text-center">Suporte Por Telefone</h3>
                    <p className="font-inter text-xl max-w-xl max-lg:text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                </div>
                </div>
            </div>
        </div>
    )
}