import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import {FiX, FiFacebook, FiInstagram} from 'react-icons/fi'
import './Footer.css';
import images from '../../constants/images';

const Footer = () => (
  <div className='app__footer section__padding'>
    {/*<FooterOverlay />*/}
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact us</h1>
        <p className='p__opensans'>455-23 Balwas Galore street</p>
        <p className='p__opensans'>+254748021788</p>
        <p className='p__opensans'>+25474803123445</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="gerichtlogo" />
        <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others</p>
        <img src={images.spoon} alt="spoon"  className='spoon__img' style={{marginTop: 15}}/>]
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday- Friday</p>
        <p className='p__opensans'>Monday- Friday</p>
        <p className='p__opensans'> Welcome all</p>
      </div>
    </div>
    <div className='footer__copyright'>
      
    <div className='app__footer-links_icons'>
        <FiFacebook />
        <FiX />
        <FiInstagram />
      </div>
      <p className='p__opensans'>2024 Gericth. All rights Reserved</p>

    </div>
  </div>
);

export default Footer;
