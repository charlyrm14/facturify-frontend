import { useState } from "react";

interface Props {
    onReply: ( messageContent: string ) => void;
}

export default function ReplyMessage({ onReply }: Props) {

    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!content.trim()) { 
            return;
        }
        onReply(content);
        setContent('');
    };
    return (
        <section>
            <form>
                <div className='mt-10 px-4 md:px-12'>
                    <div>
                        <label 
                            htmlFor="content"
                            className='text-gray-700 dark:text-slate-400 flex items-center gap-x-3 mb-2'> 
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" className="size-5">
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                            </svg> Responder 
                        </label>
                        <textarea 
                            name="content" 
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className='bg-white dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-slate-800 px-4 py-3 rounded-lg w-full'
                            required/>
                    </div>
                    <div className='flex justify-end items-end my-4'>
                        <button
                            onClick={handleSubmit}
                            className='bg-blue-500 text-white px-6 py-3 md:px-4 md:py-2 rounded-lg flex items-center gap-x-2 cursor-pointer hover:opacity-75 uppercase font-light'>
                                Enviar 
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}