import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Users } from 'lucide-react'

export const PressureChart = () => {
    const [pressData, setPressData] = useState<number>()
    // const mock_data = dataMock


    async function searchData() {
        const url = 'http://192.168.15.88/Monitor_Ar/receber_dados.php'

            try {
            const response = await fetch(url);
            
            if (!response.ok) {
            throw new Error(`Erro na rede: ${response.statusText}`);
            }
            
            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Falha ao buscar dados do dashboard:", error);

            return null; 
        }
    }

     useEffect(() => {
       async function loadPressData() {
            const data = await searchData()
            if(data && data.dados_atuais) {
                const apiData = data.dados_atuais.pressao

                setPressData(apiData)

            } else {
                console.log('Dados nao encontrado');
            }     
        }

        loadPressData()
    }, [])

    // useEffect(() => {
    //    async function loadPressData() {
    //         const data = mock_data

    //         if(data && data.dados_atuais) {
    //             const apiData = data.dados_atuais.pressao

    //             setPressData(apiData)

    //         } else {
    //             console.log('Dados nao encontrado');
    //         }     
    //     }

    //     loadPressData()
    // }, [])

    if(pressData === 0) {
        return <div>Carregando gráfico de Pressão</div>
    }

    return(
        <Card >
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                        Pressão
                    </CardTitle>

                    <Users className="ml-auto w-4 h-4"/>
                </div>
                <CardDescription >
                    <p>Dados da Pressão do Ambiente</p>
                </CardDescription>
            </CardHeader>
            
            <CardContent className="text-base sm:text-7xl font-bold text-center">
                <p>{pressData}</p>
            </CardContent>
        </Card>
    )
} 