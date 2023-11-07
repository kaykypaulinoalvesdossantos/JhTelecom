import Link from "next/link";
import { News } from "@/mock/News"; 
import Image from "next/image";

export default function NewsPage() {
    return (
        <div className="flex flex-col justify-center items-center gap-24">
            <h2 className="font-inter text-[#1c3363] text-6xl font-bold text-center">Notícias</h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {News.map((news) => (
                    <div key={news.id} className="">
                        <Link href="/noticias" className="rounded-lg min-w-[430px] min-h-[630px] max-w-[450px] max-h-[650px] max-md:max-w-[350px] max-md:min-w-[350px] max-sm:max-w-[300px] max-sm:max-h-[300px] max-sm:min-w-[280px] max-sm:min-h-[280px] flex flex-col gap-5 max-sm:gap-2 py-4 px-4 max-lg:items-center bg-[#CDD3D9] shadow-cardNews">
                            <Image src={news.img} alt={news.title}  className="max-w-[25rem] max-h-[18rem] object-cover max-lg:max-w-[20rem] max-lg:max-h-[14rem] max-sm:max-w-full max-sm:hidden"/>
                            <h2 className="text-[#437AF0] font-bold font-inter text-2xl max-w-[390px] max-lg:max-w-[250px] max-lg:text-center max-sm:text-base">{news.title}</h2>
                            <p className="text-[#3B4754] text-lg font-light max-w-[390px] max-lg:max-w-[250px]  max-lg:text-base max-lg:text-center max-sm:max-w-full max-sm:max-h-full">{news.text}</p>
                            <p className="text-[#3B4754] text-lg font-light max-w-[390px] max-lg:max-w-[250px] max-lg:text-base max-sm:max-w-full max-sm:max-h-full">Data: {news.date}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
