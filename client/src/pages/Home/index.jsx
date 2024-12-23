import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About';

const index = () => {
  return (
    <div>
      <Header></Header>
      <div className="bg-primary px-40 sm:px-5">
        <Intro></Intro>
        <About></About>
      </div>
    </div>
  );
}

export default index
