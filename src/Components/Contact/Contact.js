import React from 'react';
import { Element } from 'react-scroll';
import "./Contact.css";
import {IconButton} from "@mui/material";
import { LinkedIn, GitHub} from "@mui/icons-material";

const Contact = () => {
  return (

   <Element className='contact' id="contact">
    <h1>Contact</h1>
    <div className='contact__container'>
        <p>
            Email : <span>bharathi12022002@gmail.com</span>
        </p>

        <p>
            Github : <span>https://github.com/Bharathi012</span>
        </p>
        <div className='contact__icons'>
        <a href='google.com'>
          <IconButton>
            <LinkedIn />
          </IconButton>
        </a>
        <a href='https://github.com/Bharathi012'>
          <IconButton>
            <GitHub />
          </IconButton>
          

        </a>
        </div>
    </div>


    </Element>
  )
}

export default Contact



