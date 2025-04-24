import React from 'react'
import './skills.css';
import skillimage from '../../assets/skills.png';
const Skills = () => {
  return (
    <section id='skills'>
        <h1 className='skillPageTitle'>What I do</h1>
        <div className='skillsImgs'>
          <img src={skillimage} alt='skills' className='skillImg'/>
        </div>
    </section>
  )
}

export default Skills;