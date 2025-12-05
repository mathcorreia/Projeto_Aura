import { DollarSign } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Members() {
    return(
       <div className="grid-column grid-cols-3 flex-col  gap-4 sm:grid">
            <Card className="mt-8">
                <CardHeader className="flex flex-col items-center gap-2">
                    <div className="flex flex-col items-center gap-1">
                        <Avatar className="w-60 h-60">
                            <AvatarImage src="https://github.com/danieloliveeira.png" />
                            <AvatarFallback>DV</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-lg sm:text-xl text-center text-gray-800">
                            Daniel Vitor
                        </CardTitle>
                    </div>
                    <CardDescription className="text-center">
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card  className="mt-8">
                <CardHeader className="flex flex-col items-center gap-2 ">
                    <div className="flex-col items-center justify-center">
                        <Avatar className="w-60 h-60">
                            <AvatarImage src="src\assets\giovanna_graco.png"/>
                            <AvatarFallback>DV</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-lg sm:text-xl text-center text-gray-800">
                            Giovanna Graço
                        </CardTitle>
                        
                    </div>
                    <CardDescription>
                    </CardDescription>
                    </CardHeader>
            </Card>
            <Card className="mt-8">
                <CardHeader className="flex flex-col items-center gap-2">
                    <div className="flex-col items-center justify-center">
                        <Avatar className="w-60 h-60">
                            <AvatarImage src="src\assets\matheus_henrique.png"/>
                            <AvatarFallback>DV</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-lg sm:text-xl text-center text-gray-800">
                            Mateus Henrique
                        </CardTitle>
                        
                    </div>
                    <CardDescription>
                    </CardDescription>
                    </CardHeader>
            </Card>    
       </div>
    )
}