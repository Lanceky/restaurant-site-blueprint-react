import React from 'react';

import './AboutUs.css';
import {images} from '../../constants'
const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center space__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="gletter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam, et hic mollitia deleniti voluptatem fugiat totam tempore ducimus repellat assumenda repellendus quasi </p>
        <button type='buttom' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam, et hic mollitia deleniti voluptatem fugiat totam tempore ducimus repellat assumenda repellendus quasi </p>
        <button type='buttom' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
