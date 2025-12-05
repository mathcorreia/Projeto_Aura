import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import LoginImage from '@/assets/login-image.webp'

export const LoginPage = () => {
    const navigate = useNavigate();
    const handleStart = () => {
        navigate('/homepage')
    }
    return (
        <div className="flex  w-full h-screen">
            <div 
                className="hidden md:block w-1/2 bg-cover bg-center" 
                style={{ backgroundImage: `url(${LoginImage})` }}
            />
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-green-100">
                <div className="max-w-md w-full text-center">
                    <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Carbono-360</h1>
                    <p className="text-muted-foreground mb-8">
                        Clique no botão abaixo para começar a sua jornada.
                    </p>
                    <Button onClick={handleStart} size="lg" className="w-full">
                        Iniciar
                    </Button>
                </div>
            </div>
        </div>
    )
}