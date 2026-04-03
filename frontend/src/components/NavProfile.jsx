import React from "react"
import { ChevronRight } from "lucide-react"

function NavProfile() {
    return (
        <div className="flex items-center justify-between mb-6 p-2 rounded cursor-pointer bg-[#eef2f6]">
            <div className="flex items-center gap-4">
                <img src="https://avatars.githubusercontent.com/u/105328583?v=4" alt="Profile" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col">
                    <span className="text-sm text-[#4B5563]">John Doe</span>
                    <span className="text-xs text-[#6B7280]">Admin</span>
                </div>
            </div>
            <ChevronRight size={16} className="text-[#6B7280]" />
        </div>
    )
}

export default NavProfile
