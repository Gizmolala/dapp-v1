import React from 'react'
import { useMoralis } from "react-moralis"

export const WalletConnect = () => {
    const { authenticate, isAuthenticated, user, logout } = useMoralis()

    const connectWallet = async () => {
        await authenticate({
            signingMessage: "CheemsX Authentication",
            onError: authError,
            onSuccess: authSuccess
        })
    }

    const authSuccess = () => {
        console.log('wallet connect success')
    }

    const authError = (err) => {
        alert(err?.message)
    }

    const formatAddress = (str) => {
        return `${str.slice(0, 5)}...${str.slice(-4)}`
    }

    if (!isAuthenticated) {
        return (
            <input className="connect" type="button" value="Connect Wallet" onClick={connectWallet} />
        )
    }

    return (
        <input className="connect" type="button" value={formatAddress(user.get('ethAddress'))} onClick={() => logout()} />
    )
}
