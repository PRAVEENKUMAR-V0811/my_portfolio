import React from 'react'
import './education.css';
import ams from '../../assets/ams logo.png';
import thangamani from '../../assets/thangamani.png';
import skct from '../../assets/skct.png';
const Education = () => {
  return (
    <section id='education'>
        <span className='eduTitle'>Education</span>
        <div className='eduBars'>
            <div className='eduBar'>
                <img src={skct} alt='SKCT' className='eduBarImg'/>
                <div className='eduBarText'>
                    <h3>Under Graduate (2022 - 2026)</h3>
                    <p>BE CSE ( Artificial Intelligence and Machine Learning )</p>
                    <p>Sri Krishna College Of Technology , Coimbatore</p>
                </div>
            </div>

            <div className='eduBar'>
                <img src={thangamani} alt='Thangamani' className='eduBarImg'/>
                <div className='eduBarText'>
                    <h3>Higher Secondary Education (2020 - 2022)</h3>
                    <p>XI STD & XII STD</p>
                    <p>Thangamani Matriculation Higher Secondary School , Chennai</p>
                </div>
            </div>

            <div className='eduBar'>
                <img src={ams} alt='AMS' className='eduBarImg'/>
                <div className='eduBarText'>
                    <h3>Secondary Education (2019 - 2020)</h3>
                    <p>X STD</p>
                    <p>Amutha Matriculation School , Tiruvallur</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education