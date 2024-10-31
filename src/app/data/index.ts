import vaga from "@/../public/img/vaga.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { HtmlHTMLAttributes } from "react";


const blogData = [
    {
        path: "1",
        title: "Estamos contratando novos tecnicos para nosso time de intalação",
        text:
          "A JH Telecom está contratando novos técnicos para instalação de fibra óptica! Venha fazer parte de uma equipe dinâmica e cresça na área de telecomunicações com excelentes ganhos, além de benefícios como ajuda de custo para combustível e aluguel de veículo, entre outros. Não perca essa oportunidade de impulsionar sua carreira!",
        date: "2023-10-10",
        slug: "Teste01",
        conteudo: [
          {
            subtilte: "A JH Telecom está com vagas abertas para Técnicos de Instalação de Fibra Óptica!",
            text: `
              <p>Se você busca uma oportunidade de crescimento em uma empresa que valoriza seus colaboradores, essa é sua chance! Estamos procurando profissionais <strong>proativos</strong>, <strong>responsáveis</strong> e com <strong>excelente comunicação</strong> para integrar nosso time de instalação de fibra óptica.</p>

      <h2>Benefícios oferecidos:</h2>
      <ul>
        <li><strong>Ótimos ganhos</strong> e oportunidade de crescimento;</li>
        <li><strong>Ajuda de custo com combustível</strong>;</li>
        <li><strong>Aluguel de veículo</strong> pago pela empresa;</li>
        <li>Possibilidade de fornecimento de veículo próprio.</li>
    </ul>

    <h2>Requisitos:</h2>
    <ul>
        <li><strong>Proatividade</strong> para identificar e solucionar problemas de forma eficiente;</li>
        <li><strong>Responsabilidade</strong> para garantir instalações seguras e de qualidade;</li>
        <li><strong>Boa comunicação</strong> para interagir com clientes e equipe.</li>
    </ul>

    <p>Envie seu currículo para os e-mails: <a href="mailto:marcosdemetrio@jhtele.com.br">marcosdemetrio@jhtele.com.br</a> e <a href="mailto:rh@jhtele.com.br">rh@jhtele.com.br</a> e venha fazer parte do time JH Telecom!</p>
`,
          },
          {
            img: vaga,
          },
        ],
      },
]

export type IBlogPath = "blog"

export interface IBlog {
  path: IBlogPath;
  title: string;
  text: string;
  date: string;
  slug: string;
  conteudo?: {
    text: string;
    img: string;
  }[];
}

export const getBlog = (blogName : any) => {
    const project = blogData.find((project) => project.path === blogName)
    return {project}
}

export const getBlogs = () => {
  const projects = blogData.map((project) => ({
    path: project.path,
    title: project.title,
    text: project.text,
    date: project.date,
    slug: project.slug,
    conteudo: project.conteudo,
  }));
  return { projects };
};

