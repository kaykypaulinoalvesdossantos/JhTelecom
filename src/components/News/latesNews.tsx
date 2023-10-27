import Image from "next/image";
import Link from "next/link";
import {News} from "@/mock/News"

export default function LatesNews(){
    const lastNews = News[News.length - 1];
    return(
        <div className="flex gap-12 justify-center items-center">
            <Image src={lastNews.img} alt={""} className="max-w-[37rem] max-h-[37rem]"/>
            <div className="flex flex-col items-start gap-12">
                <span className="bg-[#1C3363] rounded-3xl py-2 px-5 text-white">Ultima Notícia</span>
                <h3 className="font-montserrat text-4xl font-bold text-black">{lastNews.title}</h3>
                <div className="flex flex-col items-start gap-5">
                <p className="text-lg max-w-[39rem]">{lastNews.text}</p>
                <Link href={`/Noticias/${lastNews.id}`} className="text-[#437AF0] decoration-inherit font-bold text-2xl">Ver Noticia Completa</Link>
                </div>
            </div>
        </div>
    )
}