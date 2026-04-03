import React from "react"

import NavItem from "./NavItem"
import MenuNavItem from "./MenuNavItem"
import { House, GraduationCap, UsersRound, School, BookOpenCheck, CircleDollarSign, CalendarCheck, Clock, ShieldCheck, LibraryBig, UserRoundCog, MessageSquareText, IdCard } from "lucide-react"
import NavProfile from "./NavProfile"

function MenuLeft() {
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

    return (
        <aside className="w-78 h-screen bg-white p-4 start-s-0 fixed">
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
}

export default MenuLeft
