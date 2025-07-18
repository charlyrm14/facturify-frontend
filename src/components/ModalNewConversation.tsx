import { useState } from "react";
import type { UserResponse } from "../types/auth";
import { createConversation } from "../api/Threads";
import type { NewThreadResponse } from "../types/threads";

interface Props {
    user?: UserResponse;
    onCloseModal: () => void;
    onAddThread: (conversation: NewThreadResponse) => void;
}

export default function ModalNewConversation({ user, onCloseModal, onAddThread }: Props) {

    const [form, setForm] = useState({
        subject: '',
        content: '',
        name: '',
        conversation_type_id: 1
    });

    const [error, setError] = useState('');


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({
        ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) {
            setError('No hay información del usuario');
            return;
        }

        const formData = {
            ...form,
            user_id: user.id,
        };

        const { data, status } = await createConversation(formData);

        if (status === 201) {
            onAddThread(data);
            onCloseModal();  
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start pt-10">
            <div className="bg-white dark:bg-slate-800 w-full max-w-md rounded-xl shadow-lg p-6 mx-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-light text-slate-800 dark:text-white flex items-center gap-2"> 
                        <svg
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none"
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="size-6">
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>  Nueva conversación
                    </h2>
                <button
                    onClick={() => onCloseModal(false)}
                    className="text-slate-400 hover:text-red-500 transition cursor-pointer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24"
                            stroke="currentColor" 
                            strokeWidth="2">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            { error && <p className="text-red-500 font-light">{error}</p> }

            <form>
                <div>
                    <label 
                        htmlFor="Content"
                        className="text-gray-600 dark:text-gray-300 uppercase text-sm"> 
                            Tipo de conversación
                    </label>
                    <select
                        name="conversation_type_id"
                        value={form.conversation_type_id}
                        onChange={handleChange}
                        className="w-full border border-gray-200 dark:border-gray-700 dark:text-gray-400  p-2 rounded-lg my-2"
                        required>
                            <option value={1}> Privado </option>
                            <option value={2}> Grupo </option>
                    </select>
                </div>
                <div>
                    <label 
                        htmlFor="name"
                        className="text-gray-600 dark:text-gray-300 uppercase text-sm"> 
                            Nombre conversación
                    </label>
                    <input 
                        type="text"
                        name="name"
                        value={form.name} 
                        onChange={handleChange}
                        placeholder="Ej: Propuesta diseño"
                        className="w-full border border-gray-200 dark:border-gray-700 dark:text-gray-400 p-2 rounded-lg my-2"
                        required/>
                </div>
                <div>
                    <label 
                        htmlFor="subject"
                        className="text-gray-600 dark:text-gray-300 uppercase text-sm"> 
                            Asunto
                    </label>
                    <input 
                        type="text"
                        name="subject"
                        value={form.subject} 
                        onChange={handleChange}
                        placeholder="Ej: Ecommerce"
                        className="w-full border border-gray-200 dark:border-gray-700 dark:text-gray-400  p-2 rounded-lg my-2"
                        required/>
                </div>
                <div>
                    <label 
                        htmlFor="Content"
                        className="text-gray-600 dark:text-gray-300 uppercase text-sm"> 
                            Mensaje
                    </label>
                    <textarea 
                        name="content"
                        value={form.content} 
                        onChange={handleChange}
                        placeholder="Escribe un mensaje"
                        className="w-full border border-gray-200 dark:border-gray-700 p-2 dark:text-gray-400 rounded-lg my-2"
                        required/>
                </div>
            </form>
            <div className="mt-4 flex justify-end gap-2">
                    <button 
                        onClick={() => onCloseModal(false)}
                        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-slate-600 text-sm cursor-pointer hover:opacity-75">
                            Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm cursor-pointer hover:opacity-75">
                            Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}