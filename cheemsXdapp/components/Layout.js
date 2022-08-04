import React, { useState } from 'react'
import { Aside } from "../components/Aside"
import useWindowDimensions from '../hooks/useWindowDimensions'

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { width } = useWindowDimensions()
    const toggleMenu = () => {
        if (width <= 768) {
            setMenuOpen(prev => !prev)
        }
    }
    return (
        <>
            <div className="container">
                <Aside isMenuOpen={menuOpen} onCloseMenu={toggleMenu} windowWidth={width} />
                {children}
                <div className="right">
                    <div className="top">
                        <button id="menu-btn" onClick={toggleMenu}>
                            <span className="material-icons-sharp">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout