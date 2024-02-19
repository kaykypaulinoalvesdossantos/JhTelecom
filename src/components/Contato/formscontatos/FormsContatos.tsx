"use client"
import axios from "axios";
import { useState } from "react";

export default function FormsContatos() {
  const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
      nome: '',
      email: '',
      telefone_dd: '',
      telefone_numero: '',
      local_interesse: '',
    });

    const handleChange = (e : any) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      axios.post("https://jhback.onrender.com/enviar-email", formData)
      
      setFormData({
        nome: '',
        email: '',
        telefone_dd: '',
        telefone_numero: '',
        local_interesse: '',
      });
      setIsSubmitted(true);

      // Escondendo a mensagem após 2 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    };

    return (
      <div className="flex items-center justify-center flex-col">
        <div className="max-w-5xl flex items-center justify-center flex-col gap-24 py-24 px-12 shadow-cardShadow rounded-md">
          <h2 className="font-montserrat text-[#1C3363] text-4xl font-bold max-[1000px]:text-center max-md:text-2xl">Formulário Para Contato</h2>
          <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
            <label className="text-xl flex flex-col gap-3">
              Nome Completo
              <input
                type="text"
                className="w-full bg-[#D8DFE6] rounded text-lg py-1 px-3 outline-none border-b-4 border-[#B4BABF]"
                name="nome"
                placeholder="João Carlos Da Silva"
                value={formData.nome}
                onChange={handleChange}
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
                onChange={handleChange}
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
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="telefone_numero"
                    placeholder="9 1234-5678"
                    className="px-3 w-full bg-[#D8DFE6] rounded text-lg py-1 outline-none border-b-4 border-[#B4BABF]"
                    value={formData.telefone_numero}
                    onChange={handleChange}
                    required
                  />
                </div>
              </label>
            </label>
  
            <label className="text-xl flex flex-col gap-3">
            Assunto
            <textarea  
                name="local_interesse"
                className="px-3  bg-[#D8DFE6] rounded text-lg py-1 outline-none border-b-4 border-[#B4BABF]"
                value={formData.local_interesse}
                onChange={handleChange}
            />
            </label>
  
            <input
              type="submit"
              value="Enviar"
              className="bg-[#2d52a3] py-4 px-16 text-white font-bold text-2xl rounded-lg shadow-buttonShadow max-md:text-xl max-md:py-3 max-md:px-10"
            />
          </form>
          {isSubmitted && (
        <div style={{ position: 'fixed', top: '20px', left: '20px', backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>
          Formulário enviado com sucesso!
        </div>
      )}

        </div>
      </div>
    );
  }
