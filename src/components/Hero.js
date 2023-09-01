import React from 'react';
import HeroImage from '../assests/img/hero/h1_hero.png'
import { Height } from '@mui/icons-material';
import './Hero.css'


export default function Hero() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${HeroImage})`}}
      >
        <div className=''>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-5'>BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE</h1>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
               BECAME A MEMBER
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}