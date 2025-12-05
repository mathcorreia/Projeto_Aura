import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Users } from 'lucide-react'
export  const MoistureChart = () => {
    const [moistData, setMoistData ] = useState<number>()

    // const mock_data = dataMock

    async function searchData() {
        const url = 'http://192.168.15.88/Monitor_Ar/get_dados.php'

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
       async function loadMoistData() {
            const data = await searchData()
            if(data && data.dados_atuais) {
                const apiData = data.dados_atuais.umidade

                setMoistData(apiData)

            } else {
                console.log('Dados nao encontrado');
            }     
        }

        loadMoistData()
    }, [])

    // useEffect(() => {
    //     async function loadMoistData() {
    //         const data = mock_data

    //         if(data && data.dados_atuais) {
    //             const apiData = data.dados_atuais.umidade

    //             setMoistData(apiData)

    //         }else {
    //             console.log('Dados nao encontrados');
    //         }
    //     }
    //     loadMoistData()
    // }, [])

    if(moistData === 0 ){
        return <div>Carregando gráfico de umidade</div>
    }

    return(
        <Card>
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                        Umidade
                    </CardTitle>

                    <Users className="ml-auto w-4 h-4"/>
                </div>
                    <CardDescription >
                    <p >Dados da Umidade do ambiente</p>
                </CardDescription>
            </CardHeader>
            
            <CardContent >
                <p className="text-base sm:text-7xl  text-center font-bold">{moistData}</p>
            </CardContent>
        </Card>
    )
}