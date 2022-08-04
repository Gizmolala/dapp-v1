import React from 'react'
import { WalletConnect } from './WalletConnect'

const Header = ({ title }) => {
    return (
        <div className='header'>
            <h1>{title}</h1>
            <WalletConnect />
        </div>
    )
}

export default Header