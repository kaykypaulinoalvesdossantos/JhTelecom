import Link from "next/link";

export default function Needservices(){
    return(
        <div className="flex justify-center">
        <div className="flex flex-col items-center w-3/4 shadow-cardShadow text-center gap-7 py-12 rounded-3xl max-sm:w-full max-sm:rounded-none max-sm:h-full">
            <h3 className="font-bold text-5xl max-lg:text-3xl max-md:text-xl">Precisando dos nossos serviços</h3>
            <p className="text-2xl max-w-xl text-center max-lg:text-xl max-md:text-lg max-sm:text-base">Nosso time pode ajudar a identificar a solução ideal para você. Envie uma mensagem e entraremos em contato.</p>
            <Link href={"/Contato"} className=""><button className="bg-[#2d52a3] py-4 px-16 text-white font-bold text-2xl rounded-lg shadow-buttonShadow max-md:text-xl max-md:py-3 max-md:px-10 ">Entre em contato</button></Link>
        </div>
        </div>
    )
}