import React from "react"

function MenuNavItem({ children, className }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default MenuNavItem
