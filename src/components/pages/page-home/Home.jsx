import React from 'react'
import './style/home-style.css'
import {BsSearch} from 'react-icons/bs'
import background from './source/background.mp4'

const Create_input = () => {
  return (
    <input placeholder='Выберите фильм' />
  )
}

const Create_button = () => {
  return (
    <div className='home-button'>
      <button>
        <BsSearch />
      </button>
      </div>
  )
}

export const Home = () => {
  return (
    <div className='home'>
        <video src={background} autoplay="true" loop="true" muted="true"/>
        <div className='home-input'>
          <Create_input />
          <Create_button />
        </div>
    </div>
  )
}
