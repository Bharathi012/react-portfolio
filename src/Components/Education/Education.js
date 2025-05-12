import React from 'react';
import { Element } from 'react-scroll';
import "./Education.css";
import EducationB1 from '../EducationBox/EducationB1';

const Education = () => {
  return (
    <Element className='education' id="educated">
  <h1>Education</h1>
  <div className='education__info'>
    <EducationB1 number="7.7%" title="BE - Computer Science and Engineering" text="J.P College of Engineering Ayikudi, Tenkasi"  style={{backgroundColor:"#f64c08"}} />
    <EducationB1 number="69%" title="Higher Secondary" text="St.Michael's Girls Hr.Sec.School kizhapuliyur, Tenkasi"/>
    <EducationB1 number="82.8%" title="Secondary School" text="St.Michael's Girls Hr.Sec.School kizhapuliyur, Tenkasi" />
  </div>
  </Element>
  )
}

export default Education