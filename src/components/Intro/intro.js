import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';
import hire from '../../assets/hireme.png';
import bgimg from '../../assets/bgimg.png';
const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Praveen Kumar</span><br/>Software Engineer</span>
            <p className='introPara'>I am a software engineer with a passion for building innovative solutions. <br/>I have experience in various programming languages and frameworks, <br/>and I am always eager to learn new technologies.</p>
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