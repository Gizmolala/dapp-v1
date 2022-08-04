import BigNumber from 'bignumber.js'
import React from 'react'
import contract from '../contract/data'
import { useBalance } from '../hooks/useBalance'

export const useBurnInfo = () => {
    const { balance: tokenBalance, isLoading, error } = useBalance(contract.nullAddress)

    const percentBurnt = (balance) => {
        if (balance === '---' || !balance) return balance
        return `${(balance / contract.totalSupply * 100).toFixed(2)} %`
    }

    const burnBalance = (balance) => {
        if (balance === '---' || !balance) return balance
        return BigNumber(tokenBalance).toFormat()
    }

    return {
        burnBalance: burnBalance(tokenBalance),
        burnPercent: percentBurnt(tokenBalance),
        burnIsLoading: isLoading,
        burnError: error
    }
}
