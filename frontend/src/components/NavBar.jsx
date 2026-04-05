import { Menu } from "lucide-react"
import React from "react"
import { NavMenuContext } from "../contexts/NavMenuContext"

function NavBar() {
    const { isMenuOpen, setIsMenuOpen } = React.useContext(NavMenuContext)

    function teste() {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen)
    }

    return (
        <nav className="bg-white text-white p-4 pl-7 pr-7 flex justify-between">
            <div className="flex gap-6 items-center">
                <Menu size={25} color="blue" onClick={teste} className="lg:hidden" />
                <form action="" className="hidden md:flex">
                    <input type="text" name="search" id="search" placeholder="Buscar" className="bg-white text-black p-2 rounded-md w-96 border border-gray-300" />
                </form>
            </div>
            <div className="w-auto flex justify-center gap-4 text-black">
                <div className="bg-gray-500 p-3 rounded-full w-10 h-10">
                
                </div>
                <div className="bg-gray-500 p-3 rounded-full w-10 h-10">

                </div>
                <div className="bg-gray-500 p-3 rounded-full w-10 h-10">

                </div>
            </div>
        </nav>
    )
}

export default NavBar
