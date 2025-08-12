import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';
import hire from '../../assets/hireme.png';
import bgimg from '../../assets/Myphoto.JPG';
const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Praveen Kumar</span><br/>Software Engineer | AI & ML</span>
            <p className='introPara'>I create intelligent solutions by blending Artificial Intelligence, Machine Learning, and solid software engineering skills. 
            <br/>Through hands-on projects and continuous learning, I’ve built predictive models, AI-driven applications, and scalable systems that turn data into impactful products. 
            <br/>Fueled by curiosity and precision, I bring ideas to life that push the boundaries of technology.</p>
            <Link><button className='btn'
            onClick={() =>{
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }
            }><img src={hire} alt='Hire Me' className='btnImg'/><span className='hiretext'>Hire Me</span></button></Link>
        </div>
        <img src={bgimg} alt=" " className='bg'/>

    </section>


  )
}

export default Intro