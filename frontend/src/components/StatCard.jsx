import React from "react"

function StatCard({ title, value, color, iconColor, gradient, icon: Icon }) {
    const gradientVariants = {
        orange: "bg-gradient-to-r from-white via-white to-orange-200/50",
        blue: "bg-gradient-to-r from-white via-white to-blue-200/50",
        green: "bg-gradient-to-r from-white via-white to-green-200/50",
        purple: "bg-gradient-to-r from-white via-white to-purple-200/50",
        red: "bg-gradient-to-r from-white via-white to-red-200/50",
        yellow: "bg-gradient-to-r from-white via-white to-yellow-200/50",
    }
    const selectedGradient = gradientVariants[gradient]

    return (
        <div className={`${color} p-5 rounded-xl flex flex-col gap-2 shadow-sm ${selectedGradient}`}>
            <div className="flex items-center gap-3">
                <div className={`${iconColor} p-2 rounded-lg text-white`}>
                    <Icon size={20} />
                </div>
                <span className="text-[#212529] text-[1rem] font-medium">{title}</span>
            </div>

            <ol className="list-decimal list-inside leading-relaxed">
                <li>Kauã Felipe Alves - <span className="font-bold text-xs text-emerald-500">10% ▲</span></li>
                <li>Kauã Felipe Alves - <span className="font-bold text-xs text-emerald-500">10% ▲</span></li>
                <li>Kauã Felipe Alves - <span className="font-bold text-xs text-emerald-500">15% ▲</span></li>
            </ol>
        </div>
    )
}

export default StatCard
