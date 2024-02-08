import Link from "next/link";

export default function Contact(){
    return(
        <div className="flex justify-center items-center flex-col space-y-12 h-full">
            <h2 className="font-inter text-[#1c3363] text-6xl font-bold">Contatos</h2>
            <p className="font-inter text-xl max-w-4xl text-center max-md:text-base">Estamos abertos para receber empresas interessadas em nossos serviços de telecomunicações, bem como profissionais que tenham interesse em fazer parte da equipe da JH Telecom. Convidamos você a entrar em contato conosco para discutir possíveis colaborações ou oportunidades de carreira. Estamos à disposição e ansiosos para iniciar essa conversa.</p>
            <div className="flex gap-10 max-lg:gap-6 max-md:flex-col max-md:items-center">
                <Link href={""} className=""><button className="bg-[#2d52a3] py-4 px-16 text-white font-bold text-2xl rounded-lg shadow-buttonShadow">Trabalhe Conosco</button></Link>
                <Link href={""} className=""><button className=" bg-[#2d52a3] py-4 px-16 text-white font-bold text-2xl rounded-lg shadow-buttonShadow">Contato</button></Link>
            </div>
        </div>
    )
}