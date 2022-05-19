import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';

const Reference = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='자료실' text='이미지 추후 수정' />
            <Footer/>
        </div>
    )
}

export default Reference;