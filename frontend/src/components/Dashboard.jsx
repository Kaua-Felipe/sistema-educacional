import React from "react"
import StatCard from "./StatCard"
import { BookOpen } from "lucide-react"

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    LabelList
} from "recharts"

const data = [
  { name: 'Jan', total: 25, collected: 15 },
  { name: 'Feb', total: 35, collected: 16 },
  { name: 'Mar', total: 50, collected: 24 },
  { name: 'Apr', total: 60, collected: 30 },
  { name: 'May', total: 26, collected: 20 },
  { name: 'June', total: 20, collected: 15 },
  { name: 'July', total: 40, collected: 20 },
  { name: 'Aug', total: 20, collected: 10 },
  { name: 'Sep', total: 50, collected: 25 },
  { name: 'Oct', total: 16, collected: 10 },
  { name: 'Nov', total: 10, collected: 6 },
  { name: 'Dec', total: 40, collected: 20 },
];
const CustomLegend = () => (
  <div className="flex justify-center gap-6 mb-6 text-sm">
    <div className="flex items-center gap-2">
      <span className="text-[#26a69a] text-xs">◆</span>
      <span className="text-gray-500">Total Fee: <b className="text-gray-800">$500</b></span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-[#ff7043] text-xs">◆</span>
      <span className="text-gray-500">Collected Fee: <b className="text-gray-800">$300</b></span>
    </div>
  </div>
);

function Dashboard() {

    return (
        <section className="p-7">
            <header className="mb-6">
                <h1 className="font-semibold text-2xl">Dashboard</h1>
                <p>Escola - Gerencie sua escola...</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                <div className="lg:col-span-4 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard title="Queda de rendimento" value="20,000" color="bg-white" iconColor="bg-orange-500" gradient="orange" icon={BookOpen} />
                        <StatCard title="Total de Professores" value="20" color="bg-white" iconColor="bg-blue-500" gradient="blue" icon={BookOpen} />
                        <StatCard title="Total de Turmas" value="10" color="bg-white" iconColor="bg-green-500" gradient="green" icon={BookOpen} />
                        <StatCard title="Total de Alunos" value="150" color="bg-white" iconColor="bg-purple-500" gradient="purple" icon={BookOpen} />
                        <StatCard title="Total de Professores" value="20" color="bg-white" iconColor="bg-red-500" gradient="red" icon={BookOpen} />
                        <StatCard title="Total de Turmas" value="10" color="bg-white" iconColor="bg-yellow-500" gradient="yellow" icon={BookOpen} />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm h-96">
                        <h3 className="font-bold mb-4">Revenue Statistic</h3>

                        <CustomLegend />
                        <ResponsiveContainer width="100%" height="80%">
                            <BarChart
                            data={data}
                            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                            barSize={40} // Ajusta a largura das barras
                            >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            
                            <XAxis 
                                dataKey="name" 
                                axisLine={false}      /* Remove a linha da base */
                                tickLine={false}      /* Remove os tracinhos dos nomes */
                                tick={{ fill: '#9ca3af', fontSize: 12 }} 
                                dy={10}
                            />
                            
                            <YAxis 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#9ca3af', fontSize: 12 }}
                                tickFormatter={(value) => `$${value}k`}
                            />

                            <Tooltip 
                                cursor={{ fill: '#f3f4f6' }}
                                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />

                            {/* 1. BARRA DE BAIXO (Verde Água) - Deve ser a primeira no código */}
                            <Bar dataKey="total" stackId="a" fill="#26a69a">
                                <LabelList dataKey="total" position="center" fill="#fff" fontSize={10} fontWeight="bold" />
                            </Bar>

                            {/* 2. BARRA DE CIMA (Laranja) - Deve ser a segunda no código */}
                            <Bar dataKey="collected" stackId="a" fill="#ff7043">
                                <LabelList dataKey="collected" position="center" fill="#fff" fontSize={10} fontWeight="bold" />
                            </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    {/* Attendance Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold mb-4">Ranking de Estudantes</h3>

                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img src="https://avatars.githubusercontent.com/u/105328583?v=4" alt="Profile" className="w-10 h-10 rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <span>Student Name</span>
                                        <span>Class: First</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <span>Marks</span>
                                    <span>20</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img src="https://avatars.githubusercontent.com/u/105328583?v=4" alt="Profile" className="w-10 h-10 rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <span>Student Name</span>
                                        <span>Class: First</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <span>Marks</span>
                                    <span>20</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img src="https://avatars.githubusercontent.com/u/105328583?v=4" alt="Profile" className="w-10 h-10 rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <span>Student Name</span>
                                        <span>Class: First</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <span>Marks</span>
                                    <span>20</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img src="https://avatars.githubusercontent.com/u/105328583?v=4" alt="Profile" className="w-10 h-10 rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <span>Student Name</span>
                                        <span>Class: First</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <span>Marks</span>
                                    <span>20</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img src="https://avatars.githubusercontent.com/u/105328583?v=4" alt="Profile" className="w-10 h-10 rounded-full" />
                                    <div className="flex flex-col gap-1">
                                        <span>Student Name</span>
                                        <span>Class: First</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <span>Marks</span>
                                    <span>20</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Calendar Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        {/* Seu componente de calendário */}
                    </div>
                    </div>
            </div>
        </section>
    )
}

export default Dashboard
