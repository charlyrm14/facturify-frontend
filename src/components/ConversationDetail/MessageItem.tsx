import { formattedTimeAndDate } from "../../helpers";
import type { Message } from "../../types/threads";

interface Props {
    message: Message;
}

export default function MessageItem({ message }: Props) {

    const { subject, content, created_at } = message;
    
    return(
        <section>
            <div className='mt-10 px-4 md:px-12'>
                <h1 className='text-gray-400 dark:text-gray-400 text-lg'> 
                    { subject ? 'Asunto:' : 'Respuesta:'} <span className='block text-pink-500 uppercase text-2xl'> { subject } </span>
                </h1>
                <p className='flex items-center gap-x-3 mt-2 text-gray-400 dark:text-gray-300'>
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
                            d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                    </svg> { formattedTimeAndDate(created_at) }
                </p>
                <div className='mt-10'>
                    <p className='text-gray-500 dark:text-gray-200'>
                        { content }
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 text-sm flex justify-end mt-6'> Lennie Reinger V </p>
                </div>
                <div className='border border-gray-200 dark:border-slate-700 mt-3'></div>
            </div>
        </section>
    )
}