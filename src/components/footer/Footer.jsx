import React from 'react';
import './footer.css';
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>LINABARIS</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Servvices</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://twitter.com'><FiTwitter/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; EGATOR Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer