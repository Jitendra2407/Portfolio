import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'

const index = () => {
  return (
    <div>
      <Header></Header>
      <div className="bg-primary px-40">
        <Intro></Intro>
      </div>
    </div>
  );
}

export default index
