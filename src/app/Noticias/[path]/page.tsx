"use client";

interface IBlogPage {
  project: IBlog;
}

import { IBlog, getBlog, IBlogPath } from "@/app/data";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Project = ({ params }: { params: { path: IBlogPath } }) => {
  const { project } = getBlog(params.path);
  const router = useRouter();
  useEffect(() => {
    if (!project) {
      router.push("/not-found");
    }
  }, [project]);
  return (
    <>
    <NavBar/>
    <main className="py-36 flex flex-col gap-16 items-center">
    <div className="max-w-[50rem] font-montserrat font-bold text-5xl gap-24 text-center">{project?.title}</div>
    {project?.conteudo?.map((item , index) => {
      return (
          <div className="flex flex-col gap-12" key={index} >
            <h3 className="text-4xl font-bold font-montserrat">{item.subtilte}</h3>
            <div className={item.img ? "max-w-[71rem] max-h-[37rem]" : "max-w-[75rem]"}>
              {item.img && <Image src={item.img} alt={""} />}
              {item.text}
            </div>
          </div>
      )   
    })}
    </main>
    <Footer/>

    </>
  );
};
export default Project;