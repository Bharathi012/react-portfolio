  import React from 'react';
  import {Link} from  "react-scroll";
  import "./Header.css";
  
  const Header = () => {
    return (
      <div className='header'>
       
       <div className='header__left'>

       <h1><span>Frontend</span>Developer</h1> 
         </div>



        <div className='header__right'>
            <Link to="about"  smooth={true} duration={500}>
            <h4>
              About Me
            </h4>
            </Link>

             <Link to="educated"  smooth={true} duration={500}>
            <h4>
         Education
            </h4>
            </Link>

            <Link to="skills"  smooth={true} duration={500}>
            <h4>
              Skills
            </h4>
            </Link>


            <Link to="contact"  smooth={true} duration={500}>
            <h4>
         Contact
            </h4>
            </Link>
        </div> 


        </div>
    )
  }
  
  export default Header
