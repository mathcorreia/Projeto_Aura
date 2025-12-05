import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { 
    ChartContainer, 
    type ChartConfig,
    ChartTooltip,          
    ChartTooltipContent 
} from "../ui/chart";
import { 
    LineChart,           
    Line,                  
    CartesianGrid, 
    XAxis,
    YAxis                  
} from "recharts";
import dataMock from '../../dataMock/data.json'; 


type TendenciaDataEntry = {
    hora: string;
    media_qualidade: number;
    media_temperatura: number;
};

const chartConfig = {
    media_qualidade: {
        label: "Qualidade do Ar",
        color: "var(--chart-1)", 
    },
    media_temperatura: {
        label: "Temperatura",
        color: "var(--chart-2)", 
    },
} satisfies ChartConfig;

const formatarHoraXAxis = (horaCompleta: string) => {
    try {
        return horaCompleta.split(' ')[1] || horaCompleta;
    } catch (e) {
        return horaCompleta;
    }
};


export function ChartOverview() {
    const [chartData, setChartData] = useState<TendenciaDataEntry[]>([]);
    const mock_data = dataMock;

    useEffect(() => {
        if (mock_data && mock_data.historico_24h) {
            setChartData(mock_data.historico_24h);
        }
    }, [mock_data]);

    if (chartData.length === 0) {
        return <div>Carregando gráfico de tendência...</div>;
    }

    return (
        <Card className="flex-1"> 
            <CardHeader>
                <CardTitle>Tendência da Qualidade do Ar</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
                    <LineChart
                        data={chartData}
                        margin={{
                            left: 12, 
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <YAxis 
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <XAxis
                            dataKey={'hora'} 
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                            tickFormatter={formatarHoraXAxis} 
                        />
                        <ChartTooltip 
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <Line
                            dataKey={'media_qualidade'}
                            type="monotone" 
                            stroke="var(--color-media_qualidade)"
                            strokeWidth={2}
                            dot={false} 
                        />
                        <Line
                            dataKey={'media_temperatura'}
                            type="monotone"
                            stroke="var(--color-media_temperatura)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}