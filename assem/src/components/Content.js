import React from 'react';
import { Link } from 'react-router-dom';
import spaceVideo from '../assets/space.mp4';

import './ContentStyle.css';

const Content = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id = 'video'>
            <source src={spaceVideo} type='video/mp4' />
        </video>
    <div className='content'>
        <h1>assem, Galaxy</h1>
        <p>영상 넣을게 없는데 그냥 이미지에 transition이나 넣을까</p>
    <div>
        <Link to='/traning' className='btn'>traning</Link>
        <Link to='/contact' className='btn btn-light'>contact</Link>
    </div>
    </div>
    </div>
  )
}

export default Content;