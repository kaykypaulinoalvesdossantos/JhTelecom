import Link from "next/link";

export default function Contact(){
    return(
        <div className="flex justify-center items-center flex-col space-y-12 h-full">
            <h2 className="font-inter text-[#1c3363] text-6xl font-bold">Contatos</h2>
            <p className="font-inter text-xl max-w-4xl text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="space-x-52">
                <Link href={""} className=""><button className="bg-[#2d52a3] py-4 px-16 text-white font-bold text-2xl rounded-lg shadow-buttonShadow">Trabalhe Conosco</button></Link>
                <Link href={""} className=""><button className=" bg-[#2d52a3] py-4 px-16 text-white font-bold text-2xl rounded-lg shadow-buttonShadow">Contato</button></Link>
            </div>
        </div>
    )
}