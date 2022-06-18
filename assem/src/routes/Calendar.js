import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
// import CalendarSection from '..//Calendar'
import CalendarSection from '../components/Calendar';

const Calender = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Calender' text='캘린더 퍼블리싱' />
            <CalendarSection />
            <Footer />
        </div>
    )
}

export default Calender;