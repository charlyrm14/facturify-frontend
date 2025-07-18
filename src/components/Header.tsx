import profileImage from '@/assets/300-27.jpg'
import { useState } from 'react'

export default function Header({ onLogout }: { onLogout: () => void }) {

    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

    return (
        <header className="bg-white dark:bg-gray-900 px-2 md:px-12 shadow z-20">
            <div className="flex justify-between items-center px-4 py-2 relative">
                <div>
                    <h2 className="uppercase dark:text-slate-100 text-xl font-light"> Facturify </h2>
                </div>
                <div className='relative'>
                    <img 
                        src={profileImage}
                        alt="Profile image"
                        className='w-13 md:w-14 rounded-full border-2 border-cyan-500 hover:opacity-95 cursor-pointer'/>
                    <button
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="absolute -bottom-2 right-2 bg-cyan-500 text-white rounded-full p-0.5 cursor-pointer hover:opacity-75">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="size-5 dark:text-white">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    { isUserMenuOpen && (
                        <div className='absolute bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 w-60 -bottom-16 right-0 p-1 rounded-lg'>
                            <div>
                                <button 
                                    onClick={onLogout}
                                    className='text-red-500 flex items-center gap-x-2 w-full hover:bg-gray-100 hover:dark:bg-slate-700 cursor-pointer p-2 rounded-lg'>
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
                                                    d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                                        </svg> Cerrar sesión
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}