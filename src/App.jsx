import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  
  function handleMenu(e){

   

    const menu = document.querySelector('.ul-slide-menu')
    const primTitle = document.querySelector('.primary-title')
    const secTitle = document.querySelector('.secondary-title')
    const coordenadas = menu.getBoundingClientRect()
    
    if(coordenadas.x == -165){
      menu.style.left = '0px'
      menu.style.transition = "all 0.50s"
    } else {
      menu.style.left = '-165px'
    }

    if(coordenadas.x == -165){
      primTitle.style.left = '-165px'
      primTitle.style.transition = "all 0.20s"
      secTitle.style.left = '0px'
      secTitle.style.transition = "all 0.20s"
      e.target.style.marginLeft = '3rem'
    } else {
      e.target.style.marginLeft = '5rem'
      primTitle.style.left = '0px'
      secTitle.style.left = '-165px'
    }
   
  }
  

  return (
  
    <>

   <nav className='navbar-menu'>
    <div className='divv'>
    <div className='first-div-nav'>
    <span className='primary-title'>MyMoney</span>
    <span className='secondary-title'>MyM</span>
    <img onClick={handleMenu} id='hamburger-menu-icon' src="./../public/icons/icons8-cardápio-100.png" alt="" />
    </div>
    </div>
    <ul className='ul-slide-menu'>
      <li>menu 1</li>
      <li>menu 2</li>
      <li>menu 3</li>
    </ul>
   </nav>
    </>
  )
}

export default App
