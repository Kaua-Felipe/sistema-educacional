import React from "react"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

function NavItem({ itens, icon, title }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="text-[#4B5563]">
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`cursor-pointer flex items-center justify-between list-none p-2 ${isMenuOpen ? "bg-[#25A194] text-white" : "hover:text-[#25A194]"} rounded`}>
                <div className="flex gap-4 items-center">
                    {icon}
                    <h2>{title}</h2>
                </div>
                <ChevronRight className={isMenuOpen ? "rotate-90" : "rotate-0"} />
            </div>
            <ul className={` ${isMenuOpen ? "block" : "hidden"} mt-2 ml-4 text-sm pl-5 [&_li]:before:content-['\\2022'] [&_li]:before:text-xl [&_li]:before:text-[#D1D5DB] [&_li]:before:font-bold [&_li]:before:inline-block [&_li]:before:w-[1em] [&_li]:before:ml-[-1em]`}>
                {
                    itens.map((item) => {
                        return (
                            <li key={item.id} className="w-full p-2 rounded hover:text-[#25A194] cursor-pointer">
                                <a href={item.link} className="w-full">{item.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default NavItem
