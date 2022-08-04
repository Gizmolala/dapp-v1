import React, { useEffect } from 'react'
import Moralis from 'moralis'
import { useMoralis, useMoralisWeb3Api, useMoralisWeb3ApiCall } from 'react-moralis'
import contract from '../contract/data'
import BigNumber from 'bignumber.js'

export const useBalance = (address) => {
    const { isAuthenticated, user } = useMoralis()
    const web3 = useMoralisWeb3Api()
    const { fetch, data, error, isLoading } = useMoralisWeb3ApiCall(
        web3.native.runContractFunction,
        {
            chain: 'avalanche',
            address: contract.address,
            abi: contract.abi,
            function_name: 'balanceOf',
            params: {
                account: address ? address : user?.get('ethAddress')
            }

        }
    )

    useEffect(() => {
        if (isAuthenticated) {
            fetch()
        }
    }, [isAuthenticated])

    const tokenBalance = (balance) => {
        return Moralis.Units.FromWei(balance, contract.decimal)
    }
    return {
        balance: data && isAuthenticated ? tokenBalance(data) : '---',
        balanceHuman: data && isAuthenticated ? BigNumber(tokenBalance(data)).toFormat(2) : '---',
        error,
        isLoading
    }
}
