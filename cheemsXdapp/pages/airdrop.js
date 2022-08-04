import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

export default function Airdrop() {
    return (
        <main>
            <Head>
                <title>Giveway and Airdrops - CheemsX</title>
            </Head>
            <Header title='Giveway and Airdrops' />
            <h3>Coming Soon!</h3>
            <img src='/coming_soon.svg' className='uc' />
        </main>
    )
}