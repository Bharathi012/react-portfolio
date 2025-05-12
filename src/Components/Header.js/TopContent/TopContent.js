import React from 'react';
// import {Link} from "react-scroll";
import "./TopContent.css";
import  rec  from '../../../assets/avatarpic.png';



const TopContent = () => {
  return (
    <div className='topContent'>
      <div className='topContent__container'>
        <img src={rec}  alt="avatarr" />
        <h1>U.Bharathi</h1>
        <p>Frontend Developer</p>
        <a href="https://drive.google.com/file/d/1TBMKQvCiLYEsYhz8gX33kNOLJq81rgDU/view?usp=drive_link"><button className='topContent__downloadButton'>Download CV</button></a>
       

      </div>
        
        </div>

  )
}

export default TopContent