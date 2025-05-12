import React from 'react';
import "./EducationB1.css";

const EducationB1 = ({title,text,style,number}) => {
  return (
    <div style={{...style}} className='education1'>
        <h2>{title}</h2>
        <p>{text}</p>
        <h5 >cgpa: {number}</h5>

    </div>
  )
}

export default EducationB1