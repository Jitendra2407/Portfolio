import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Courses from './Courses';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';

const index = () => {
  return (
    <div>
      <Header></Header>
      <div className="bg-primary px-40 sm:px-5">
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        <Courses/>
        <Contact/>
        <Footer/>
        <LeftSider/>
      </div>
    </div>
  );
}

export default index
