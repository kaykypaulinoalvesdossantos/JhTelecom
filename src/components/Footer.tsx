import In from '@/../public/img/In.png';
import Insta from '@/../public/img/Insta.png';
import LogoBranca from '@/../public/img/Logo Oficial - JH Telecom1 branca 1.png';
import Face from '@/../public/img/facebook.png';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <footer>
        <div className="w-full py-24 px-40 bg-[#1C3363] flex justify-around max-md:flex-col max-md:gap-16 max-md:items-center">
           <div className="space-y-8 max-md:space-y-4 max-md:flex max-md:flex-col max-md:items-center">
                <Image src={LogoBranca} alt={"JH Telecom"}/>
                <h4 className="text-white font-bold text-3xl font-montserrat max-md:text-2xl max-sm:text-xl max-sm:text-center">Noassas Redes :</h4>
                <div className="flex space-x-12 items-center">
                    <Link href={"https://www.facebook.com/profile.php?id=100093492066274&mibextid=ZbWKwL"}><Image src={Face} alt={""} className="min-w-[30px]"/></Link>
                    <Link href={"https://instagram.com/jhtelecomm?igshid=MW05dGFlMG8wbm81Nw=="}><Image src={Insta} alt={""} className="min-w-[30px]"/></Link>
                    <Link href={""}><Image src={In} alt={""} className="min-w-[30px]"/></Link>
                </div>
            </div> 
            <div className="flex flex-col justify-center items-center gap-8">
                <h4 className="text-white font-bold text-3xl font-montserrat max-md:text-2xl max-sm:text-xl max-sm:text-center">Fale conosco :</h4>
                <Link href={""}><button className="text-white py-6 px-20 font-bold font-inter border-solid text-3xl border-white border-2 rounded-3xl max-md:py-4 max-md:px-6 max-md:text-2xl">Contato</button></Link>
            </div>
            <div className="space-y-9">
                <h4 className="text-white font-bold text-3xl font-montserrat max-md:text-center max-md:text-xl">Navegue Pelo Site :</h4>
                <ul className="space-y-5 text-center">
                    <li><Link href={"/"} className="text-white font-light font-montserrat text-2xl max-md:text-xl">Home</Link></li>
                    <li><Link href={"/Sobre"} className="text-white font-light font-montserrat text-2xl max-md:text-xl">Sobre</Link></li>
                    <li><Link href={"/Noticias"} className="text-white font-light font-montserrat text-2xl max-md:text-xl">Notícias</Link></li>
                    <li><Link href={"/TrabalheConosco"} className="text-white font-light font-montserrat text-2xl max-md:text-xl">Trabalhe Conosco</Link></li>
                    <li><Link href={"/Contato"} className="text-white font-light font-montserrat text-2xl max-md:text-xl">Contato</Link></li>
                </ul>
            </div>
        </div>
        <div className="flex justify-center bg-[#0E1A33] p-6">
            <h2 className="text-white font-bold text-xl font-montserrat max-md:text-base max-md:text-center">Copyright © 2023 JH telecom. Todos os direitos reservados.</h2>
        </div>
        </footer>
    )
}