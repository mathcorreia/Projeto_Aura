import { useEffect, useState } from "react";
import { Pie, PieChart, Cell } from "recharts"; 
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import dataMock from '../../dataMock/data.json';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

const MAX_VALUE = 10.0;

type GaugeDataEntry = {
    status: "qualidade" | "restante";
    total: number;
};

const chartConfig = {
    total: { label: "Valor" },
    qualidade: {
        label: "Qualidade",
        color: "var(--chart-1)",
    },
    restante: {
        label: 'Restante',
        color: "var(--chart-2)", 
    }
} satisfies ChartConfig;

export function ChartRadialStacked() {
    const [gaugeData, setGaugeData] = useState<GaugeDataEntry[]>([]);
    const [currentValue, setCurrentValue] = useState(0);
    const mock_data = dataMock;

    useEffect(() => {
        function loadGaugeData() {
            const data = mock_data;
            if (data && data.dados_atuais) {
                const value = data.dados_atuais.razao_qualidade;
                let rest = MAX_VALUE - value;
                if (rest < 0) {
                    rest = 0;
                }
                setCurrentValue(value);
                const formattedData: GaugeDataEntry[] = [
                    { status: 'qualidade', total: value },
                    { status: 'restante', total: rest }
                ];
                setGaugeData(formattedData);
            }
        }
        loadGaugeData();
    }, [mock_data]);

    if (gaugeData.length === 0) {
        return <div>Carregando gráfico de Qualidade...</div>;
    }

    return (
        <Card className="h-70"> 
            <CardHeader >
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">Qualidade do Ar</CardTitle>
                  <Users className="ml-auto w-4 h-4"/>
                </div>
                <CardDescription>Razão atual (Rs/R0)</CardDescription>
            </CardHeader>    
            <CardContent className="flex-1  pb-0 relative">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-[180px]"
                >
                    <PieChart> 
                        <Pie
                            data={gaugeData}
                            dataKey="total"
                            nameKey="status"
                            innerRadius={60}  
                            outerRadius={90} 
                            startAngle={225}
                            endAngle={-45}
                            paddingAngle={0}
                        >
                           {gaugeData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={chartConfig[entry.status]?.color}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
                <div
                    className="absolute"
                    style={{
                        top: '50%', 
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center'
                    }}
                >
                    <span className="text-4xl font-bold">
                        {currentValue.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground block">
                        Razão
                    </span>
                </div>

            </CardContent>
        </Card>
    );
}