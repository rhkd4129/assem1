import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import CalenderSection from '../components/Calender'

const Calender = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Calender' text='이미지 없이 Navbar만 두고 캘린더 퍼블리싱' />
            {/* <CalenderSection /> */}
            <Footer />
        </div>
    )
}

export default Calender;