"use client"
import Input from "@/components/Inputs/inputs"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from "zod"
import emailjs from '@emailjs/browser';

const createUserFomrSchema = z.object({
  name: z.object({
    firstName: z.string().nonempty("teste")
  .transform(firstName => {
    return firstName.trim().split(" ").map(word => {
    return word[0].toLocaleUpperCase().concat(word.substring(1))
  }).join("")}),
  }),
   telefone:z.object({
    ddi: z.string().nonempty("O DDi e obrigatorio"),
    tell: z.string().nonempty("O Telefone com o DDD e obrigatorio"),
   }),
   email: z.string().email('E-mail invalido').nonempty("O e-mail e obrigatorio"),

 })



export default function FormContats(){

    const { register, handleSubmit, formState : {errors} } = useForm({
        resolver: zodResolver(createUserFomrSchema),
        mode: "onSubmit",
      }
       );
      console.log("erros : ",errors)
       const [data, setData] = useState();
    
      const templete = {
        from_name: JSON.stringify(data?.name?.firstName),
        message: JSON.stringify(data),
        email:  JSON.stringify(data?.email)
      }
    
       function teste02(data){
        setData(JSON.stringify(data, null, 2))
        emailjs.send("service_0470bzm", "template_tfn321q", templete, "GsHeakWXm2sPdMkj3")
        .then((response) => {
          console.log('Deu bom meu chapa')
        })
       }


    return(
        <>
        <form onSubmit={handleSubmit(teste02)} className="flex flex-col gap-12">
        <label className="">
        Nome Completo 
        <Input registerInput={{...register("name[firstName]")}} mask={"********************"}
        formatChars={{ "*": "[A-Za-z ]" }} 
         placeholder="Primeiro Nome" className="bg-[#D8DFE6] py-4 w-full rounded"/>
        {errors.name?.firstName?.message && <p>{errors.name.firstName.message}</p>}
        </label>
       <label>
        E-mail
        <input className="text-black" {...register("email")} type="email"  placeholder="exemplo@gmail.com"/>
       {errors.email?.message && <p>{errors.email.message}</p>}
       </label>
       <label>
        Telefone
        <Input registerInput={{...register("telefone[ddi]")}} mask={'+99'} placeholder="+XX"/>
       {errors.telefone?.ddi?.message && <p>{errors.telefone.ddi.message}</p>}
        <Input registerInput={{...register("telefone[tell]")}} mask={'(99) 9 9999-9999'}  placeholder="(XX) XXXXXXXXX"/>
       {errors.telefone?.tell?.message && <p>{errors.telefone.tell.message}</p>}
       </label>
       <input type="submit" value="Vai filhão" />
      </form>
        </>

    )
}