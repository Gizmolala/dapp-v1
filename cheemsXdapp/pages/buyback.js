import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

export default function Buyback() {
    return (
        <main>
            <Head>
                <title>Buyback Logs - CheemsX</title>
            </Head>
            <Header title='Buyback Logs' />
            <h3>Coming Soon!</h3>
            <img src='/coming_soon.svg' className='uc' />
        </main>
    )
}