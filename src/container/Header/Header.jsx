import React from 'react';
import images from '../../constants/images';
import './Header.css';

import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper__info'>
      <SubHeading title="Chase the new Flavour" />
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, doloremque consequatur molestias aspernatur aut amet excepturi pariatur vitae esse commodi</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="headerimg" />
    </div>
  </div>
);

export default Header;
