import React from 'react'
import { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import {  } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { RiServiceLine} from 'react-icons/ri'
import { TiContacts } from 'react-icons/ti'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#'
        onClick ={() => setActiveNav('#')} 
        className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome/>
      </a>
      <a href='#about' 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser/>
      </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav==='#experience'?'active':''} > <BsBook/> </a>
      <a href='#services' 
        onClick={() => setActiveNav('#services')} 
        className={activeNav==='#services'?'active':''}>
        <RiServiceLine/> 
      </a>
      <a href='#contact' 
        onClick={() => setActiveNav('#contact')} 
        className={activeNav==='#contact'?'active':''}> 
        <TiContacts/>
      </a>
    </nav>
  )
}

export default Nav