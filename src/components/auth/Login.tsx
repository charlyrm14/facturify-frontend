import LoginImage from '@/assets/image-login.png'
import { useState } from 'react'
import { login } from '../../api/Auth'

interface LoginProps {
    onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState({
        status: false,
        text: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const data = { email, password };

        try {

            const response = await login(data);

            if(response.status === 200) {
                localStorage.setItem('token', response.data.data.access_token);
                onLoginSuccess();
            }

            if(response.status === 401) {
                setErrorMessage({
                    status: true,
                    text: 'Credenciales incorrectas'
                });
            }
            
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-gray-900 dark:text-white">
        
            <div className="hidden md:flex md:w-1/2 items-center justify-center bg-blue-500 p-10">
                <div className="text-center">
                    <img 
                        src={LoginImage} 
                        alt="Login img" 
                        className="mx-auto mb-6"/>
                    <h2 className="text-4xl font-bold mb-4 uppercase text-white">
                        Facturify <span className="block text-base font-light"> Sistema de mensajería </span>
                    </h2>
                </div>
            </div>

            <div className="flex w-full md:w-1/2 items-center justify-center p-6 h-screen">
                <div className="w-full max-w-md space-y-6">

                    <div className="md:hidden">
                        <img 
                            src={LoginImage} 
                            alt="Login img" 
                            className="mx-auto mb-6"/>
                    </div>

                    <div className="flex justify-center items-center gap-5">
                        <p className="text-2xl text-center font-extralight uppercase cursor-pointer"> 
                            Iniciar sesión <span className="block md:hidden text-sm text-blue-500 font-bold"> Facturify </span>
                        </p>
                    </div>

                    { errorMessage.status && (
                        <div className="flex justify-center items-center">
                            <p  className="uppercase text-center text-red-500"> { errorMessage.text } </p>
                        </div>
                    )}   

                    <div>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Ej: correo@correo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='border border-gray-300 dark:border-slate-700 w-full p-4 my-3 rounded-lg'
                                required/>

                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='border border-gray-300 dark:border-slate-700 w-full p-4 my-3 rounded-lg'
                                required/>

                            <button 
                                type="submit"
                                className='w-full mt-5 p-4 bg-blue-600 text-white uppercase cursor-pointer rounded-lg hover:opacity-75'>
                                    Iniciar sesión
                            </button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}