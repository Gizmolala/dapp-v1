import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
export default function News() {
    return (
        <main>
            <Head>
                <title>News, Update & Blogs - CheemsX</title>
            </Head>
            <Header title='News, Update & Blogs' />
            <h3>Coming Soon!</h3>
            <img src='/coming_soon.svg' className='uc' />
        </main>
    )
}