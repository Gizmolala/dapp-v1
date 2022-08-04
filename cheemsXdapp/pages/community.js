import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

export default function Community() {
    return (
        <main>
            <Head>
                <title>Community Involvement - CheemsX</title>
            </Head>
            <Header title='Community Involvement' />
            <h3>Coming Soon!</h3>
            <img src='/coming_soon.svg' className='uc' />
        </main>
    )
}