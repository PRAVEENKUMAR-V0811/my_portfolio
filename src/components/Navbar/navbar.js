import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import menubar from '../../assets/menubar.png';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [showMenu , setShowMenu] = useState(false);
  return (
    <div className='navbar'>
        <img src={logo} alt="logo-img" className='logo'/>
        <div className='desktopMenu'>
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">About</Link>
              <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
              <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Experience</Link>
              <Link activeClass='active' to='education' spy={true} smooth={true} offset={-35} duration={500} className="desktopMenuListItem">Education</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() =>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }
        }>
          <img src={contact} alt="Contact" className='desktopMenuImg'/>Contact Me</button>

        <img src={menubar} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={-50} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
              <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={-50} className="ListItem" onClick={()=>setShowMenu(false)}>Experience</Link>
              <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={-50} className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
              <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={-50} className="ListItem" onClick={()=>setShowMenu(false)}>Education</Link>
        </div>
    </div>
  )
}

export default Navbar