import { DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "../ui/avatar";

export default function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Ultimos Temperaturas
                    </CardTitle>
                    <Users className="ml-auto w-4 h-4"/>
                </div>
                <CardDescription>
                    Temperaturas Registradas
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/danieloliveeira.png"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Daniel Oliveira</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/danieloliveeira.png"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Daniel Oliveira</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/danieloliveeira.png"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Daniel Oliveira</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}