import React from "react"

import NavItem from "./NavItem"
import MenuNavItem from "./MenuNavItem"
import { House, GraduationCap, UsersRound, School, BookOpenCheck, CircleDollarSign, CalendarCheck, Clock, ShieldCheck, LibraryBig, UserRoundCog, MessageSquareText, IdCard } from "lucide-react"
import NavProfile from "./NavProfile"
import { NavMenuContext } from "../contexts/NavMenuContext"

function MenuLeft() {
    const { isMenuOpen } = React.useContext(NavMenuContext)
    let itens = [
        {
            id: 1,
            name: "School", 
            link: "/item1"
        },
        {
            id: 2,
            name: "Students",
            link: "/item2"
        },
        {
            id: 3,
            name: "Teachers",
            link: "/item3"
        }
    ]

    if (!isMenuOpen) {
        return (
            <aside className="h-screen bg-white p-4 start-s-0 w-10 hidden lg:w-78 lg:block lg:fixed">
                <NavProfile />
                <MenuNavItem className="flex flex-col gap-2">
                    <NavItem title="Dashboard" itens={itens} icon={<House size={20} />} />
                    <NavItem title="Graduation" itens={itens} icon={<GraduationCap size={20} />} />
                    <NavItem title="Users" itens={itens} icon={<UsersRound size={20} />} />
                    <NavItem title="School" itens={itens} icon={<School size={20} />} />
                    <NavItem title="Books" itens={itens} icon={<BookOpenCheck size={20} />} />
                    <NavItem title="Finances" itens={itens} icon={<CircleDollarSign size={20} />} />
                    <NavItem title="Calendar" itens={itens} icon={<CalendarCheck size={20} />} />
                    <NavItem title="Clock" itens={itens} icon={<Clock size={20} />} />
                    <NavItem title="Shield" itens={itens} icon={<ShieldCheck size={20} />} />
                    <NavItem title="Library" itens={itens} icon={<LibraryBig size={20} />} />
                    <NavItem title="User Settings" itens={itens} icon={<UserRoundCog size={20} />} />
                    <NavItem title="Messages" itens={itens} icon={<MessageSquareText size={20} />} />
                    <NavItem title="ID Card" itens={itens} icon={<IdCard size={20} />} />
                </MenuNavItem>
            </aside>
        )
    } else {
        return (
            <aside className="w-full bg-black/45 absolute z-10">
                <div className="h-screen bg-white p-4 start-s-0 w-78">
                    <NavProfile />
                    <MenuNavItem className="flex flex-col gap-2">
                        <NavItem title="Dashboard" itens={itens} icon={<House size={20} />} />
                        <NavItem title="Graduation" itens={itens} icon={<GraduationCap size={20} />} />
                        <NavItem title="Users" itens={itens} icon={<UsersRound size={20} />} />
                        <NavItem title="School" itens={itens} icon={<School size={20} />} />
                        <NavItem title="Books" itens={itens} icon={<BookOpenCheck size={20} />} />
                        <NavItem title="Finances" itens={itens} icon={<CircleDollarSign size={20} />} />
                        <NavItem title="Calendar" itens={itens} icon={<CalendarCheck size={20} />} />
                        <NavItem title="Clock" itens={itens} icon={<Clock size={20} />} />
                        <NavItem title="Shield" itens={itens} icon={<ShieldCheck size={20} />} />
                        <NavItem title="Library" itens={itens} icon={<LibraryBig size={20} />} />
                        <NavItem title="User Settings" itens={itens} icon={<UserRoundCog size={20} />} />
                        <NavItem title="Messages" itens={itens} icon={<MessageSquareText size={20} />} />
                        <NavItem title="ID Card" itens={itens} icon={<IdCard size={20} />} />
                    </MenuNavItem>
                </div>
            </aside>
        )
    }
}

export default MenuLeft
