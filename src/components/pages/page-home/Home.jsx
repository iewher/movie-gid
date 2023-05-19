import React from 'react'
import './style/home-style.css'
import background from './source/background.mp4'

export default function Home() {
  return (
    <div className='home'>
        <video src={background} autoplay="true" loop="true" muted="true"/>
        <div className='home-input'>
          <input placeholder='Выберите фильм' />
        </div>
    </div>
  )
}
