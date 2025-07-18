import ChatImage from '@/assets/blank.png'

export default function ConversationDetail () {
    return (
        <main className="w-full md:w-4/5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-900  rounded-lg shadow">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-slate-800 p-4">
                <div className='flex items-center gap-x-3'>
                    <img 
                        src={ChatImage} 
                        alt="Chat image"
                        className='w-14 rounded-full cursor-pointer hover:opacity-75'/>
                    <div>
                        <p className='dark:text-gray-400 text-xs'> Creado por </p>
                        <p className='dark:text-white'> Carlos I. </p>
                    </div>
                </div>
            </div>

            <section>
                <div className='mt-10 px-4 md:px-12'>
                    <h1 className='text-gray-400 dark:text-gray-400 text-lg'> 
                        Asunto: <span className='block text-pink-500 uppercase text-2xl'> UX/UI Ecommerce </span>
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
                        </svg> 2025-07-18
                    </p>
                    <div className='mt-10'>
                        <p className='text-gray-500 dark:text-gray-200'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className='text-gray-600 dark:text-gray-400 text-sm flex justify-end mt-6'> Lennie Reinger V </p>
                    </div>
                    <div className='border border-gray-200 dark:border-slate-700 mt-3'></div>
                </div>
            </section>

            <section>
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
                            className='bg-white dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-slate-800 px-4 py-3 rounded-lg w-full'/>
                    </div>
                    <div className='flex justify-end items-end my-4'>
                        <button
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
            </section>
        </main>
    )
}