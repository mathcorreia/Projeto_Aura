import { useEffect, useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import dataMock from '../../dataMock/data.json'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

  type TableDataEnty = {
    timestamp: string;
    temperatura: number;
    umidade: number;
    pressao: number;
    razao_qualidade: number;
  }

  const formattedHour = (timestamp: string) => {
    try {
        return timestamp.split(' ')[1] || timestamp;
    } catch (e) {
        return timestamp;
    }
};
 
export function TableChart() {
   const [tableData, setTableData] = useState<TableDataEnty[]>([])
    const mock_data = dataMock
    useEffect(() => {
      async function loadTableData() {
        const data = mock_data

        if(data && data.ultimas_5_leituras){
          const apiData = data.ultimas_5_leituras

          setTableData(apiData)
        }
      }
      loadTableData()
    }, [mock_data])

    if (tableData.length === 0) {
        return <div>Carregando tabela...</div>;
    }

  return (
      <Card className="flex-1">
            <CardHeader className="px-7">
                <CardTitle>Últimas Atualizações</CardTitle>
                <CardDescription>
                    As 5 leituras mais recentes do sensor.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>Ultimas 5 Leituras dos Sensores</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Hora</TableHead>
                            <TableHead className="text-right">Temp. (°C)</TableHead>
                            <TableHead className="text-right">Umid. (%)</TableHead>
                            <TableHead className="text-right">Pressão (hPa)</TableHead>
                            <TableHead className="text-right">Qualidade</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tableData.map((leitura) => (
                            <TableRow key={leitura.timestamp}>
                                <TableCell className="font-medium">
                                    {formattedHour(leitura.timestamp)}
                                </TableCell>
                                <TableCell className="text-right">
                                    {leitura.temperatura.toFixed(1)}
                                </TableCell>
                                <TableCell className="text-right">
                                    {leitura.umidade.toFixed(1)}
                                </TableCell>
                                <TableCell className="text-right">
                                    {leitura.pressao.toFixed(1)}
                                </TableCell>
                                <TableCell className="text-right">
                                    {leitura.razao_qualidade.toFixed(2)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
  )
}
