"use client"
import { useState } from "react";

export default function FomsContatos() {
    const [formData, setFormData] = useState({
      nome: '',
      email: '',
      telefone_dd: '',
      telefone_numero: '',
      local_interesse: '',
    });
  
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleFormSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      // Imprimir os dados do formulário no console
      console.log('Formulário enviado:', formData);
  
      // Limpar os campos do formulário
      setFormData({
        nome: '',
        email: '',
        telefone_dd: '',
        telefone_numero: '',
        local_interesse: '',
      });
    };
  
    return (
      <div className="flex items-center justify-center flex-col">
        <div className="max-w-5xl flex items-center justify-center flex-col gap-24 py-24 px-12 shadow-cardShadow rounded-md">
          <h2 className="font-montserrat text-[#1C3363] text-4xl font-bold max-[1000px]:text-center max-md:text-2xl">Formulário Para Contato</h2>
          <form className="flex flex-col gap-12" onSubmit={handleFormSubmit}>
            <label className="text-xl flex flex-col gap-3">
              Nome Completo
              <input
                type="text"
                className="w-full bg-[#D8DFE6] rounded text-lg py-1 px-3 outline-none border-b-4 border-[#B4BABF]"
                name="nome"
                placeholder="João Carlos Da Silva"
                value={formData.nome}
                onChange={handleInputChange}
                required
              />
            </label>
  
            <label className="text-xl flex flex-col gap-3">
              E-mail
              <input
                type="email"
                name="email"
                className="w-full bg-[#D8DFE6] rounded text-lg py-1 px-3 outline-none border-b-4 border-[#B4BABF]"
                placeholder="exemplo.email@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
  
            <label className="flex gap-12 max-md:flex-col">
              <label className="text-xl flex flex-col gap-3">
                Telefone
                <div className="flex gap-2">
                  <input
                    type="tel"
                    name="telefone_dd"
                    placeholder="DD"
                    className="w-16 text-center bg-[#D8DFE6] rounded text-lg py-1 outline-none border-b-4 border-[#B4BABF]"
                    value={formData.telefone_dd}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="tel"
                    name="telefone_numero"
                    placeholder="9 1234-5678"
                    className="px-3 w-full bg-[#D8DFE6] rounded text-lg py-1 outline-none border-b-4 border-[#B4BABF]"
                    value={formData.telefone_numero}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </label>
            </label>
  
            <label className="text-xl flex flex-col gap-3">
            Assunto
            <textarea  className="px-3  bg-[#D8DFE6] rounded text-lg py-1 outline-none border-b-4 border-[#B4BABF]   "/>
            </label>
  
            <input
              type="submit"
              value="Enviar"
              className="bg-[#2d52a3] py-4 px-16 text-white font-bold text-2xl rounded-lg shadow-buttonShadow max-md:text-xl max-md:py-3 max-md:px-10"
            />
          </form>
        </div>
      </div>
    );
  }