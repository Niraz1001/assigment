'use client'
import React from 'react'
import Cardpage from '@/component/card/page';

const Home = () => {
  return (
    <div className='flex gap-10 justify-center items-center h-screen '>
      <Cardpage releasetime ="Comming soon"  notify="nice"/>
      <Cardpage releasetime ="already come"  notify="wow"/>
      <Cardpage releasetime ="outed song"  notify="wah"/>
      
    </div>
  )
};

export default Home