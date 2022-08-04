import BigNumber from 'bignumber.js'
import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import { useTreasuryBalance } from '../hooks/useTreasuryBalance'

export default function Treasury() {
    const { tokens, totalBalanceUsd } = useTreasuryBalance()
    return (
        <main>
            <Head>
                <title>Treasury Balance - CheemsX</title>
            </Head>
            <Header title='Treasury Balance' />
            <h2>{totalBalanceUsd ? `$ ${totalBalanceUsd}` : ''}</h2>
            <div className='total-assets'>
                <h2></h2>
                <table>
                    <thead>
                        <tr>
                            <th>Token</th>
                            <th>Balance</th>
                            <th>Percentage</th>
                            <th>Price</th>
                            <th>USD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tokens && tokens.length
                                ? tokens.map(token => (
                                    <tr key={token.token_address}>
                                        <td>{token.name}</td>
                                        <td>{BigNumber(token.balanceDecimal).toFormat(2)}</td>
                                        <td>{token.avg.toFixed(2)} %</td>
                                        <td>{token.price} <span className='text-muted'>({token.exchange})</span></td>
                                        <td>$ {BigNumber(token.totalPrice).toFormat(2)}</td>
                                    </tr>
                                ))
                                : <tr><td colSpan="5">---</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}
