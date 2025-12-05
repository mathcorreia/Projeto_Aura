import { ChartOverview } from "@/components/chart";
import { CoolerChart } from "@/components/cooler";
import { ChartRadialStacked } from "@/components/Gauge";
import { MoistureChart } from "@/components/moisture";
import { PressureChart } from "@/components/pressure";
import { TableChart } from "@/components/table";
import { TemperatureChart } from "@/components/temperature";


export const DashboardPage = () => {
    return (

        <main className="sm:ml-14 p-4"> 
            <p className="text-center mb-4 text-5xl font-bold ">Dashboard</p>
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
               <TemperatureChart />
               <MoistureChart />
               <PressureChart />
               <ChartRadialStacked />
               
            </section>

            <section className="mt-4 flex flex-col md:flex-row gap-4">
                <CoolerChart />
                <ChartOverview />
                <TableChart/>         
            </section>


        </main>
    );
}