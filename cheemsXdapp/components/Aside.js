import React from 'react'
import Link from 'next/link'

export const Aside = ({ isMenuOpen, onCloseMenu, windowWidth }) => {
    return (
        <aside style={windowWidth && windowWidth <= 768 ? { display: isMenuOpen ? 'block' : 'none' } : {}}>
            <div className="top">
                <div className="logo">
                    <img src='/logo.png' />
                    <h2>Cheems <span className="danger">X</span></h2>
                </div>

                <div className="close" id="close-btn" onClick={onCloseMenu}>
                    <span className="material-icons-sharp">close</span>
                </div>
            </div>

            <div className="tab">

                <Link href='/'>
                    <a className="tablinks" onClick={onCloseMenu}>
                        <span className="material-icons-sharp">grid_view</span>
                        <h3 id="DashBoard" className="tabcontent">DashBoard</h3>
                    </a>
                </Link>


                <Link href='/treasury'>
                    <a className="tablinks" onClick={onCloseMenu}>
                        <span className="material-icons-sharp">account_balance_wallet</span>
                        <h3 id="Treasury-Balance" className="tabcontent">Treasury Balance</h3>
                    </a>
                </Link>

                <Link href='/buyback'>
                    <a className="tablinks" onClick={onCloseMenu}>
                        <span className="material-icons-sharp">arrow_back_ios</span>
                        <h3>Buyback Logs</h3>
                    </a>
                </Link>

                <Link href='/airdrop'>
                    <a className="tablinks" onClick={onCloseMenu}>
                        <span className="material-icons-sharp">redeem</span>
                        <h3>Giveway & Airdrops</h3>
                    </a>
                </Link>

                <Link href='/community'>
                    <a className="tablinks" onClick={onCloseMenu}>
                        <span className="material-icons-sharp">local_library</span>
                        <h3>Community Involvement</h3>
                    </a>
                </Link>

                <Link href='/incubation'>
                    <a className="tablinks" onClick={onCloseMenu}>
                        <span className="material-icons-sharp">egg</span>
                        <h3>Project Incubation</h3>
                    </a>
                </Link>

                <Link href='/stacking'>
                    <a className="tablinks" onClick={onCloseMenu}>
                        <span className="material-icons-sharp">view_list</span>
                        <h3>Stacking & Bonding</h3>
                    </a>
                </Link>

                <Link href='/news'>
                    <a className="tablinks" onClick={onCloseMenu}>
                        <span className="material-icons-sharp">feed</span>
                        <h3>News, Update & Blogs</h3>
                    </a>
                </Link>

            </div>
        </aside>
    )
}
