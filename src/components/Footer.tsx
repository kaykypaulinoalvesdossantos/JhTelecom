import Image from "next/image";
import Link from "next/link";
import LogoBranca from '@/../public/img/Logo Oficial - JH Telecom1 branca 1.png'
import Insta from '@/../public/img/Insta.png'
import Face from '@/../public/img/facebook.png'
import In from '@/../public/img/In.png'

export default function Footer() {
    return(
        <div>
        <div className="w-full py-24 px-40 bg-[#1C3363] flex justify-around ">
           <div className="space-y-8">
                <Image src={LogoBranca} alt={"JH Telecom"}/>
                <h4 className="text-white font-bold text-3xl font-montserrat">Noassas Redes :</h4>
                <div className="flex space-x-12">
                    <Link href={""}><Image src={Face} alt={""}/></Link>
                    <Link href={""}><Image src={Insta} alt={""}/></Link>
                    <Link href={""}><Image src={In} alt={""}/></Link>
                </div>
            </div> 
            <div className="flex flex-col justify-center items-center gap-8">
                <h4 className="text-white font-bold text-3xl font-montserrat">Fale conosco :</h4>
                <Link href={""}><button className="text-white py-6 px-20 font-bold font-inter border-solid text-3xl border-white border-2 rounded-3xl">Contato</button></Link>
            </div>
            <div className="space-y-9">
                <h4 className="text-white font-bold text-3xl font-montserrat">Navegue Pelo Site :</h4>
                <ul className="space-y-5 text-center">
                    <li><Link href={""} className="text-white font-light font-montserrat text-2xl">Home</Link></li>
                    <li><Link href={""} className="text-white font-light font-montserrat text-2xl">Sobre</Link></li>
                    <li><Link href={""} className="text-white font-light font-montserrat text-2xl">Notícias</Link></li>
                    <li><Link href={""} className="text-white font-light font-montserrat text-2xl">Trabalhe Conosco</Link></li>
                    <li><Link href={""} className="text-white font-light font-montserrat text-2xl">Contato</Link></li>
                </ul>
            </div>
        </div>
        <div className="flex justify-center bg-[#0E1A33] p-6">
            <h2 className="text-white font-bold text-xl font-montserrat">Copyright © 2023 JH telecom. Todos os direitos reservados.</h2>
        </div>
        </div>
    )
}