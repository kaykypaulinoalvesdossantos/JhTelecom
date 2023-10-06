import Image from "next/image";
import Link from "next/link";
import aboutImg from '@/../public/img/aboutImg.png'

export default function About(){
    return(
        <div className="flex justify-around items-center">
            <div className="space-y-14">
                <h2 className="font-inter text-[#1c3363] text-6xl font-bold">Sobre</h2>
                <p className="font-inter text-xl max-w-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Link href={""} className=""><button className="mt-14 bg-[#2d52a3] py-4 px-16 text-white font-bold text-2xl rounded-lg shadow-buttonShadow">Ver Mais</button></Link>
            </div>
            <Image src={aboutImg} alt={""} className="max-h-[600px] max-w-xl"/>
        </div>
    )
}