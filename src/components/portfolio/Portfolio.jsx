import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='section'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio_item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='portfolio'/>
          </div>
          <h3>Portfolio item title</h3>
          <a href='https://github.com/' className='btn'>GitHub</a>
          <a href='https://.com' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='portdolio' ></img>
          </div>
          <h3>Portfolio item title</h3>
          <a href='https://github.com/' className='btn'>GitHub</a>
          <a href='https://.com' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='portdolio' ></img>
          </div>
          <h3>Portfolio item title</h3>
          <a href='https://github.com/' className='btn'>GitHub</a>
          <a href='https://.com' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='portdolio' ></img>
          </div>
          <h3>Portfolio item title</h3>
          <a href='https://github.com/' className='btn'>GitHub</a>
          <a href='https://.com' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='portdolio' ></img>
          </div>
          <h3>Portfolio item title</h3>
          <a href='https://github.com/' className='btn'>GitHub</a>
          <a href='https://.com' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='portdolio' ></img>
          </div>
          <h3>Portfolio item title</h3>
          <a href='https://github.com/' className='btn'>GitHub</a>
          <a href='https://.com' className='btn btn-primary'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio