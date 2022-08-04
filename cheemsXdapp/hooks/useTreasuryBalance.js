import React, { useEffect } from 'react'
import { useMoralisQuery, useMoralis } from "react-moralis"

export const useTreasuryBalance = () => {
    const { isAuthenticated, user } = useMoralis()
    const { fetch, error, isLoading, data } = useMoralisQuery("TreasuryBalance", query => {
        return query.descending('createdAt').limit(1)
    }, [], { autoFetch: false })

    useEffect(() => {
        if (isAuthenticated) {
            fetch()
        }
        return () => { }
    }, [isAuthenticated])

    const getTokens = () => {
        if (isAuthenticated && data?.length) {
            return data?.[0].get('tokens')
        }
        return []
    }

    const getTotalBalanceUsd = () => {
        if (isAuthenticated && data?.length) {
            return Number(data?.[0].get('totalBalanceUsd')).toFixed(2)
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
        tokens: getTokens(),
        totalBalanceUsd: getTotalBalanceUsd(),
        treasuryBalanceDateTime: getDateTime(),
        treasuryBalanceError: error,
        treasuryBalanceIsLoading: isLoading
    }
}
