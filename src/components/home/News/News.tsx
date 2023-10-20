import Link from "next/link";
import { News } from "@/mock/News"; 
import Image from "next/image";

export default function NewsPage() {
    return (
        <div className="flex flex-col justify-center items-center gap-24">
            <h2 className="font-inter text-[#1c3363] text-6xl font-bold">Notícias</h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-12">
                {News.map((news) => (
                    <div key={news.id} className="">
                        <Link href="/noticias" className="rounded-lg min-w-[430px] min-h-[630px] max-w-[450px] max-h-[650px] flex flex-col gap-5 py-4 px-4 bg-[#CDD3D9] shadow-cardNews">
                            <Image src={news.img} alt={news.title}  className="max-w-[25rem] max-h-[18rem] object-cover"/>
                            <h2 className="text-[#437AF0] font-bold font-inter text-2xl max-w-[390px]">{news.title}</h2>
                            <p className="text-[#3B4754] text-lg font-light max-w-[390px]">{news.text}</p>
                            <p className="text-[#3B4754] text-lg font-light max-w-[390px]">Data: {news.date}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
