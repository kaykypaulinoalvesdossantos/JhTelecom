import Image from "next/image";
import Video from '@/../public/img/Video.png'

export default function CompontsVideo(){
    return(
        <div>
            <Image src={Video} alt={""} className="w-full"/>
        </div>
    )
}