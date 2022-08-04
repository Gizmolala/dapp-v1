import React, { useEffect } from 'react'
import { useMoralisCloudFunction, useMoralis } from 'react-moralis'
import BigNumber from 'bignumber.js'

export const useReflection = (tokenBalance) => {
    const { isAuthenticated } = useMoralis()
    const { data, error, isLoading, fetch } = useMoralisCloudFunction("calculateReflection", {}, { autoFetch: false })

    useEffect(() => {
        if (isAuthenticated) {
            fetch()
        }
    }, [isAuthenticated])

    function calReflection() {
        // console.log('amountInTotal', data?.amountInTotal)
        // console.log('amountOutTotal', data?.amountOutTotal)

        if (data?.amountOutTotal) {
            return BigNumber(data?.amountOutTotal).minus(BigNumber(tokenBalance))?.toFormat(2)
        }
        return BigNumber(tokenBalance)?.minus(BigNumber(data?.amountInTotal))?.toFormat(2)
    }

    const showReflection = (reflectionData) => {
        if (isAuthenticated && data) {
            return calReflection()
        }
        return '---'
    }

    return {
        reflectionData: showReflection(),
        reflectionError: error
    }
}
