import { useEffect, useState } from "react"
import Login from "./components/auth/Login"
import AppLayout from "./layout/AppLayout"

export default function App() {

    const [auth, setAuth] = useState<boolean>(false)

    useEffect(() => {
        const token = localStorage.getItem('token');
        setAuth(!!token)
    })

    const handleLoginSuccess = () => {
        setAuth(true);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        setAuth(false);
    }

    if(!auth) {
        return <Login onLoginSuccess={handleLoginSuccess}/>
    }

    return <AppLayout onLogout={handleLogout}/>
}