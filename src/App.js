import React from 'react';

import Header from './components/header/Header';
import Navbar from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Members from './components/members/Members';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App () {
  return (
    <>
      <div className='bg-circle1'></div>
      <div className='bg-circle2'></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Members />
      <Contact />
      <Footer />
    </>
  );
}
export default App;