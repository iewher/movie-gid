import React from 'react'
import './style/home-style.css'
import { BsSearch } from 'react-icons/bs'
import background from './source/background.mp4'

const CreateInput = () => {
  return (
    <div className='home-input'>
      <input placeholder='Выберите фильм' />
    </div>
  )
}

const CreateButton = () => {
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

      <div className='video-container'>
        <video src={background} autoPlay loop muted />
        <p>asfafsasfafasfasf</p>
        <div className='content'>
          <CreateInput />
          <CreateButton />
        </div>
      </div>
    </div>
  )
}
