import React from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/style.css'
import Header from '../layout/header/Header';
const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            {/* <Header /> */}
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
