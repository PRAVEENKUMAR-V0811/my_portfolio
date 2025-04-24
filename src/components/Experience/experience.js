import React from 'react'
import './experience.css';
import pcpl from '../../assets/pcpl.png';
import omnijobs from '../../assets/omnijob.png';
const Experience = () => {
  return (
    <section id='experience'>
        <span className='expTitle'>Experience</span>
        <div className='expBars'>
            <div className='expBar'>
                <img src={pcpl} alt='Java' className='expBarImg'/>
                <div className='expBarText'>
                    <h3>Business Analyst Intern</h3>
                    <h4>Power Centre Private Limited , Chennai (June 2024 - July 2024)</h4>
                    <ul>
                        <li>Analyzed live company sales data using Power BI, processing 100K+ records to identify trends and insights.</li>
                        <li>Created interactive dashboards and reports, enhancing data visualization and decision-making.</li>
                        <li>Collaborated with cross-functional teams to gather requirements and deliver actionable insights.</li>
                    </ul>
                </div>
            </div>

            <div className='expBar'>
                <img src={omnijobs} alt='C++' className='expBarImg'/>
                <div className='expBarText'>
                    <h3>Business Development Intern</h3>
                    <h4>The Omnijobs , Online (September 2023 - November 2023)</h4>
                    <ul>
                        <li>Conducted daily client meetings to promote sales and address inquiries,engaging with 10+ clients per day.</li>
                        <li>Participated in team meetings to discuss sales performance and strategize for future growth.</li>
                        <li>Utilized CRM software to track client interactions and sales progress.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience