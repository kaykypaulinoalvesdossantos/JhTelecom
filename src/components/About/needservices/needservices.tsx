import Link from "next/link";

export default function Needservices(){
    return(
        <div className="flex justify-center">
        <div className="flex flex-col items-center w-3/4 shadow-cardShadow text-center gap-7 py-12 rounded-3xl">
            <h3 className="font-bold text-5xl">Precisando dos nosso serviços</h3>
            <p className="text-2xl max-w-xl text-center">Nosso time pode ajudar a identificar a solução ideal para você. Envie uma mensagem e entraremos em contato.</p>
            <Link href={""} className=""><button className="bg-[#2d52a3] py-4 px-16 text-white font-bold text-2xl rounded-lg shadow-buttonShadow">Entre em contato</button></Link>
        </div>
        </div>
    )
}