import React, { useEffect } from 'react'
import { useMoralisQuery, useMoralis } from "react-moralis"
import BigNumber from 'bignumber.js'

export const useTokenStat = () => {
    const { isAuthenticated, user } = useMoralis()
    const { fetch, error, isLoading, data } = useMoralisQuery("TokenStat", query => {
        return query.descending('createdAt').limit(1)
    }, [], { autoFetch: false })

    useEffect(() => {
        if (isAuthenticated) {
            fetch()
        }
        return () => { }
    }, [isAuthenticated])

    const getLiquidity = () => {
        if (isAuthenticated && data?.length) {
            return `$ ${BigNumber(data?.[0]?.get('stat')?.liquidity?.usd)?.toFormat(0)}`
        }
        return '---'
    }

    const getMarketCap = () => {
        if (isAuthenticated && data?.length) {
            return `$ ${BigNumber(data?.[0]?.get('stat')?.fdv)?.toFormat(0)}`
        }
        return '---'
    }

    const getDateTime = () => {
        if (isAuthenticated && data?.length) {
            return data?.[0]?.createdAt
        }
        return '---'
    }

    return {
        tokenStat: isAuthenticated ? data : null,
        tokenLiquidity: getLiquidity(),
        tokenMarketCap: getMarketCap(),
        tokenStatDateTime: getDateTime(),
        tokenStatError: error,
        tokenStatIsLoading: isLoading
    }
}
