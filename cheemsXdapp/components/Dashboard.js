import React, { useEffect } from 'react'
import { Statistic } from './Statistic'
import { useBalance } from '../hooks/useBalance'
import { useBurnInfo } from '../hooks/useBurnInfo'
import { useReflection } from '../hooks/useReflection'
import { useTokenStat } from '../hooks/useTokenStat'
import Header from './Header'
import Head from 'next/head'


export const Dashboard = () => {
    const { balance, balanceHuman, isLoading, error } = useBalance()
    const { burnPercent, burnBalance } = useBurnInfo()
    const { reflectionData } = useReflection(balance)
    const { tokenStatDateTime, tokenLiquidity, tokenMarketCap } = useTokenStat()

    return (
        <main>
            <Head>
                <title>My Portfolio - CheemsX</title>
            </Head>
            <Header title='My Portfolio' />

            {
                isLoading ? <div>Loading...</div> : ''
            }
            <div className="insights">
                <Statistic
                    containerClass='Balance'
                    heading='Total Balance'
                    value={balanceHuman}
                    subheading='CheemsX'
                />
                <Statistic
                    containerClass='Reflection'
                    heading='Total Reflection'
                    value={reflectionData}
                    subheading='Entire LifeTime'
                />
                <Statistic
                    containerClass='Burnt'
                    heading='Total Burnt'
                    value={burnPercent}
                    subheading={burnBalance}
                />
                <Statistic
                    containerClass='LP'
                    heading='Total LP'
                    value={tokenLiquidity}
                    subheading={`Last Update: ${tokenStatDateTime}`}
                />
                <Statistic
                    containerClass='MarketCap'
                    heading='Total Market Cap'
                    value={tokenMarketCap}
                    subheading={`Last Update: ${tokenStatDateTime}`}
                />
            </div>
        </main>
    )
}
