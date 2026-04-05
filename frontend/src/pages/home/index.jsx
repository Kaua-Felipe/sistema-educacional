import React from "react"
import MenuLeft from "../../components/MenuLeft"
import MainContent from "../../components/MainContent"
import { NavMenuContext } from "../../contexts/NavMenuContext"

function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <NavMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <div className="flex">
        <MenuLeft />
        <MainContent />
      </div>
    </NavMenuContext.Provider>
  )
}

export default Home
