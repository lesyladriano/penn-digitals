'use client'

import React from 'react';
import MeetKai from './meetKai';
import Inspiration from './inspiration';
import History from './history';

const About = () => {
  return (
    <div className='overflow-hidden'>
      <MeetKai />
      <Inspiration />
      <History />
    </div>
  );
}

export default About;
