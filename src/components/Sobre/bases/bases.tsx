import Image from "next/image";
import base01 from '@/../public/img/bases01.jpg'
import base03 from '@/../public/img/bases02.jpg'


export default function Bases(){
    return(
        <div className="flex flex-col justify-center items-center gap-12">
            <h2 className="text-5xl font-montserrat font-bold max-md:text-center max-md:text-3xl">Principais Bases Operacionais</h2>
            <div className="flex items-start gap-12 max-md:flex-col justify-start">
                <div className="flex flex-col gap-12 items-center">
                    <Image src={base01} alt={""} className="h-[440px] w-[440px] object-cover"/>
                    <div className="text-start space-y-4 max-md:text-center max-md:space-y-6">
                        <h4 className="font-montserrat font-bold text-4xl max-md:text-3xl">Zona leste</h4>
                        <p className="max-w-[400px] font-inter text-2xl max-md:text-xl">Nossa base operacional na Zona Leste oferece suporte abrangente a clientes em cidades como São Paulo, Guarulhos, Suzano e Guaianases, garantindo atendimento eficiente e ágil.</p>
                    </div>
                </div>
 
                <div className="flex flex-col gap-12 items-center">
                    <Image src={base03} alt={""} className="h-[440px] w-[440px] object-cover"/>
                    <div className="text-start space-y-4 max-md:text-center max-md:space-y-6">
                        <h4 className="font-montserrat font-bold text-4xl max-md:text-3xl">Litoral</h4>
                        <p className="max-w-[400px] font-inter text-2xl  max-md:text-xl">Nossa base na Zona Leste atende clientes em São Paulo, Guarulhos, Suzano e Mogi das Cruzes. No litoral, oferecemos suporte em Santos, Guarujá, Bertioga e Ubatuba, garantindo eficiência e agilidade.</p>
                    </div>
                </div>
            </div>
        </div>
        )
}