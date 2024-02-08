import serviceimg01 from '@/../public/img/Servicesimg01.png'
import serviceimg02 from '@/../public/img/Servicesimg02.png'
import serviceimg03 from '@/../public/img/Servicesimg03.png'
import Image from "next/image"

export default function Services(){
    return(
        <div className="space-y-40 flex flex-col items-center">
            <h2 className="font-inter text-[#1c3363] text-6xl font-bold">Serviços</h2>
            <div className="space-y-28">
                <div className="gap-36 flex items-center max-lg:flex-col max-lg:items-center">
                <Image src={serviceimg01} alt={""}/>
                <div className="space-y-12">
                    <h3 className="font-inter text-[#1c3363] text-4xl font-bold max-lg:text-center">Manutenção de Rede</h3>
                    <p className="font-inter text-xl max-w-xl max-lg:text-center">Operamos, realizamos a manutenção e supervisionamos as redes de telecomunicação para as principais operadoras do Brasil. Nossa equipe altamente especializada está comprometida em garantir a eficiência e a confiabilidade das redes, oferecendo suporte contínuo para manter a conectividade sem interrupções. Com uma abordagem focada na excelência operacional, estamos preparados para lidar com todos os aspectos da manutenção de redes, garantindo que nossos clientes recebam o melhor serviço possível.</p>
                </div>
                </div>
            </div>

            <div className="space-y-28">
                <div className="gap-36 flex items-center max-lg:flex-col max-lg:items-center">
                <Image src={serviceimg02} alt={""} className="lg:hidden"/>
                <div className="space-y-12">
                    <h3 className="font-inter text-[#1c3363] text-4xl font-bold max-lg:text-center">Suporte Técnico Casa Cliente</h3>
                    <p className="font-inter text-xl max-w-xl max-lg:text-center">Contamos com uma equipe de técnicos altamente especializados em atendimentos em casa, todos com uma ampla e profunda especialização em redes. Essa expertise nos capacita a oferecer um serviço de qualidade excepcional e suporte premium aos nossos clientes. Estamos totalmente preparados para lidar com uma variedade de desafios relacionados à conectividade, garantindo uma experiência de rede eficiente e livre de interrupções para todos os nossos clientes.</p>
                </div>
                <Image src={serviceimg02} alt={""} className="max-lg:hidden"/>
                </div>
            </div>

            <div className="space-y-28">
                <div className="gap-36 flex items-center max-lg:flex-col max-lg:items-center">
                <Image src={serviceimg03} alt={""}/>
                <div className="space-y-12">
                    <h3 className="font-inter text-[#1c3363] text-4xl font-bold max-lg:text-center">Suporte Por Telefone</h3>
                    <p className="font-inter text-xl max-w-xl max-lg:text-center">Nossa empresa oferece suporte por telefone através de uma central dedicada, acessível a todos os nossos clientes. Com uma equipe treinada e preparada para lidar com uma ampla gama de questões, estamos prontos para fornecer assistência rápida e eficaz sempre que necessário. Seja para resolver problemas técnicos, oferecer orientação ou responder a perguntas, nossa central de atendimento está à disposição para garantir uma experiência de suporte completa e satisfatória para todos os nossos clientes.</p>
                </div>
                </div>
            </div>
        </div>
    )
}