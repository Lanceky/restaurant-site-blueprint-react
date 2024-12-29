import React from 'react';

import { AboutUs, Chef, FindUs, Footer,  Header,  Laurels } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Chef />
    <Laurels />
    <FindUs />
    <Footer />
  </div>
);

export default App;