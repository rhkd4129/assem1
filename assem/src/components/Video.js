import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>assem. Galaxy.</h1>
                <p>Develop & Security</p>
                {/* <div>
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn btn-light'>Launch</Link>
                </div> */}
            </div>
            <div className='team'>
                <p className='name'>이광현 지용욱 김아영</p>
            </div>
        </div>
    )
}

export default Video;