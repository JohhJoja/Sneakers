import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Intro from '../components/Intro'
import CaruselText from '../components/style/CaruselText'

function LayOut() {
    return (
        <div>
            <Intro />
            <Header />

            <div className='mainpart'>
                <Outlet />
            </div>
            <CaruselText></CaruselText>
            <Footer />
        </div>
    )
}

export default LayOut