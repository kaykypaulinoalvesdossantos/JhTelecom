import { News } from "@/mock/News";
import Image from "next/image";
import Link from "next/link";

export default function LatesNews(){
    const lastNews = News[News.length - 1];
    return(
        <div className="flex gap-12 justify-center items-center max-md:flex-col">
            <Image src={lastNews.img} alt={""} className="max-w-[37rem] max-h-[37rem] max-[620px]:hidden"/>
            <div className="flex flex-col items-start gap-12 max-md:justify-center max-md:ml-6 max-md:gap-8">
                <span className="bg-[#1C3363] rounded-3xl py-2 px-5 text-white max-md:px-4 max-md:text-sm ">Ultima Notícia</span>
                <h3 className="font-montserrat text-4xl font-bold text-black max-md:text-3xl max-sm:text-xl">{lastNews.title}</h3>
                <div className="flex flex-col items-start gap-5">
                    <p className="text-lg max-w-[39rem] max-md:text-base">{lastNews.text}</p>
                    <Link href={`/Noticias/${lastNews.id}`} className="text-[#437AF0] decoration-inherit font-bold text-2xl max-md:text-xl">Ver Noticia Completa</Link>
                </div>
            </div>
        </div>
    )
}