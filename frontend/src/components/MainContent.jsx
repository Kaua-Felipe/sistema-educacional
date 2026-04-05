import React from "react"
import Footer from "./Footer"
import Dashboard from "./Dashboard"
import NavBar from "./NavBar"

function MainContent() {

    return (
        <main className="w-full lg:ml-78 bg-[#eef2f6]">
            <NavBar />
            <Dashboard />
            <Footer />
        </main>
    )
}

export default MainContent
