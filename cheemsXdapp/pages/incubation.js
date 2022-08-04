import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

export default function Incubation() {
    return (
        <main>
            <Head>
                <title>Project Incubation - CheemsX</title>
            </Head>
            <Header title='Project Incubation' />
            <h3>Coming Soon!</h3>
            <img src='/coming_soon.svg' className='uc' />
        </main>
    )
}