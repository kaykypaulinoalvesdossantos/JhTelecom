import Link from "next/link";
import { News } from '@/mock/News';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import LatesNews from "@/components/News/latesNews";

export default function Noticias(){
    return(
        <>
        <NavBar/>
        <main className="flex flex-col items-center py-24 gap-36">    
        <LatesNews/>
        <h1 className="font-inter text-[#1c3363] text-6xl font-bold">Noticias Anteriores</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-12">
            {News.map((news) => (
                <div key={news.id} className="">
                        <Link href={`/Noticias/${news.id}`} className="rounded-lg min-w-[430px] min-h-[630px] max-w-[450px] max-h-[650px] flex flex-col gap-5 py-4 px-4 bg-[#CDD3D9] shadow-cardNews">
                            <Image src={news.img} alt={news.title}  className="max-w-[25rem] max-h-[18rem] object-cover"/>
                            <h2 className="text-[#437AF0] font-bold font-inter text-2xl max-w-[390px]">{news.title}</h2>
                            <p className="text-[#3B4754] text-lg font-light max-w-[390px]">{news.text}</p>
                            <p className="text-[#3B4754] text-lg font-light max-w-[390px]">Data: {news.date}</p>
                        </Link>
                    </div>
                ))}
                </div>
                </main>
      <Footer/> 
      </>
    )
}