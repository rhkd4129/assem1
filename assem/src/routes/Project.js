import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';

const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='프로젝트' text='이미지 추후 수정' />
            <Footer/>
        </div>
    )
}

export default Project;