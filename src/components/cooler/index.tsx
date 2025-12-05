import { useEffect, useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../ui/chart";
import dataMock from '../../dataMock/data.json'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Cell, Pie, PieChart } from "recharts";


type CoolerDataEntry = {
    status: "ligado" | "desligado"; 
    total: number;
};

export  const  CoolerChart = ()  => {
    const[coolerData, setCoolerData] = useState<CoolerDataEntry[]>([])
    const mock_data = dataMock


    const chartConfig = {
    total: {
        label: "Registros",
    },
    ligado: {
        label: "Tempo Ligado",
        color: "var(--chart-1)",
    },
    desligado: {
        label: "Tempo Desligado",
        color: "var(--chart-2)",
    },

} satisfies ChartConfig

    useEffect(() => {
       async function loadCoolerData() {
         const dados = mock_data

        if(dados && dados.atividade_cooler_24h) {
            const apiData = dados.atividade_cooler_24h;

            const formattedData: CoolerDataEntry[] = [
                {
                    status: "ligado",
                    total: apiData.ligado
                },
                {
                    status: "desligado",
                    total: apiData.desligado
                }
            ]

            setCoolerData(formattedData)
        }
       }
       loadCoolerData()
    }, [mock_data])

    if(coolerData.length === 0) {
        return <div>Carregando gráfico do cooler...</div>
    }

    return(
         <Card className="flex-1 ">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Atividade do Cooler </CardTitle>
                        <CardDescription>Ultimas 24 horas</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[280px]"
                        >
                        <PieChart>
                            <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                            />
                            <Pie
                            data={coolerData}
                            dataKey="total"
                            nameKey="status"
                            innerRadius={100}
                            >
                                {coolerData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={chartConfig[entry.status]?.color}
                                />
                            ))}
                            </Pie>
                        </PieChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
    )

}