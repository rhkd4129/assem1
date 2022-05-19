import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import ProjectSection from '../components/Project'

const Project = () => {
    return (
        <div>
            <Navbar />
            <ProjectSection />
            <HeroImage heading='Project.' text='Choose your trip.' />
            <Footer />
        </div>
    )
}

export default Project;