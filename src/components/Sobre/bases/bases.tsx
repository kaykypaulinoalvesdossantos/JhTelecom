import Image from "next/image";
import base01 from '@/../public/img/bases01.png'
import base02 from '@/../public/img/bases02.png'
import base03 from '@/../public/img/base03.png'


export default function Bases(){
    return(
        <div className="flex flex-col justify-center items-center gap-12">
            <h2 className="text-5xl font-montserrat font-bold max-md:text-center max-md:text-3xl">Principais Bases Operacionais</h2>
            <div className="flex items-center gap-12 max-md:flex-col">
                <div className="flex flex-col items-center">
                    <Image src={base01} alt={""}/>
                    <div className="text-start space-y-4 max-md:text-center max-md:space-y-6">
                        <h4 className="font-montserrat font-bold text-4xl max-md:text-3xl">Zona leste</h4>
                        <p className="max-w-[400px] font-inter text-2xl max-md:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <Image src={base02} alt={""}/>
                    <div className="text-start space-y-4 max-md:text-center max-md:space-y-6">
                        <h4 className="font-montserrat font-bold text-4xl max-md:text-3xl">Mauá</h4>
                        <p className="max-w-[400px] font-inter text-2xl  max-md:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <Image src={base03} alt={""}/>
                    <div className="text-start space-y-4 max-md:text-center max-md:space-y-6">
                        <h4 className="font-montserrat font-bold text-4xl max-md:text-3xl">Litoral</h4>
                        <p className="max-w-[400px] font-inter text-2xl  max-md:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>
                </div>
            </div>
        </div>
        )
}