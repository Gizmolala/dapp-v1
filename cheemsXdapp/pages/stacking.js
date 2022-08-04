import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

export default function Stacking() {
    return (
        <main>
            <Head>
                <title>Stacking & Bonding - CheemsX</title>
            </Head>
            <Header title='Stacking & Bonding' />
            <h3>Coming Soon!</h3>
            <img src='/coming_soon.svg' className='uc' />
        </main>
    )
}