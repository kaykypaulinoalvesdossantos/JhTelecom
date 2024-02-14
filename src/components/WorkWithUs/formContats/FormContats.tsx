"use client"
import axios from "axios";
import { SetStateAction, useState } from "react";

export default function FormContats() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone_dd: '',
        telefone_numero: '',
        local_interesse: '',
    });
    const [pdfFile, setPdfFile] = useState(null); // novo estado para armazenar o arquivo PDF

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePdfChange = (e: any) => {
        setPdfFile(e.target.files[0]); // armazena o arquivo PDF selecionado
    };

    const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const formDataWithPdf = new FormData(); // criar um objeto FormData para enviar o arquivo PDF
        formDataWithPdf.append('nome', formData.nome);
        formDataWithPdf.append('email', formData.email);
        formDataWithPdf.append('telefone_dd', formData.telefone_dd);
        formDataWithPdf.append('telefone_numero', formData.telefone_numero);
        formDataWithPdf.append('local_interesse', formData.local_interesse);
        formDataWithPdf.append('pdf_file', pdfFile || ''); // adiciona o arquivo PDF ao FormData

        try {
            const response = await axios.post("https://jhback.onrender.com/enviar-email-funcionario", formDataWithPdf, {
                headers: {
                    'Content-Type': 'multipart/form-data', // certifique-se de definir o cabeçalho correto para FormData
                },
            });
            console.log(response.data);
            setFormData({
                nome: '',
                email: '',
                telefone_dd: '',
                telefone_numero: '',
                local_interesse: '',
            });
            setPdfFile(null); // limpar o arquivo PDF após o envio bem-sucedido
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
        }
    };

    return (
        <div className="flex items-center justify-center flex-col">
            <div className="max-w-5xl flex items-center justify-center flex-col gap-24 py-24 shadow-cardShadow rounded-md">
                <h2 className="font-montserrat text-[#1C3363] text-4xl font-bold max-[1000px]:text-center max-md:text-2xl">Formulário Para Contato</h2>
                <form className="flex flex-col gap-12 px-12" onSubmit={handleFormSubmit}>
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
  
                        <label className="text-xl flex flex-col gap-3">
                            Local de Interesse
                            <select
                                className="w-full bg-[#D8DFE6] rounded text-base py-2 outline-none border-b-4 border-[#B4BABF]"
                                name="local_interesse"
                                value={formData.local_interesse}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Selecione...</option>
                                <option value="zona_leste">Zona Leste</option>
                                <option value="litoral">Litoral</option>
                            </select>
                        </label>
                    </label>

                    <label className="text-xl flex flex-col gap-3">
                        Currículo (PDF)
                        <label htmlFor="pdf-file" className="flex flex-col items-center justify-center max-w-xs h-24 cursor-pointer bg-[#D8DFE6] rounded border-b-4 border-[#B4BABF]">
                            <div className="flex items-center justify-center pt-5 pb-6 gap-5">
                                <p className="mb-2 text-sm text-[#909499]">Selecione um arquivo PDF</p>
                                <svg className="w-8 h-8 mb-4 text-[#545759]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                            </div>
                            <input id="pdf-file" type="file" className="hidden" accept=".pdf" onChange={handlePdfChange} />
                        </label>
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