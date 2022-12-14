import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { ImWhatsapp } from 'react-icons/im'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lina@gmail.com</h5>
            <a href='mailto:lina@gmail.com' target='_blank'>Send Me A Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>linabaris</h5>
            <a href='https://web-telegram.ru/' target='_blank'>Send Me A Message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+7(999)123-123-45</h5>
            <a href='https://web.whatsapp.com/send?phone=12345678' target='_blank'>Send Me A Message</a>
          </article>
        </div>
        <form>
          <input type='text' placeholder='Your Full Name' name='name' required/>
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact