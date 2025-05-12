import React from 'react';
import  {Element} from "react-scroll"; 
import "./SkillContainer.css" ;
import skillimg from "../../assets/pic1.jpg";
import LinearProgress from "@mui/material/LinearProgress"

const SkillContainer = () => {
  return (
  <Element className='skillContainer' id="skills">
    <div className='skillContainer__image'>
        <img src={skillimg }  alt="" />

    </div>


    <div className='skillContainer__texxt'>

    <h2>Skillset</h2>

        <div className='skillContainer__skillSet' >
          <h5>Reactjs</h5>
         <div className='skillContainer__slider skillContainer__slider1' >
          {/* <LinearProgress variant="determinate" value={60}  /> */}
          <LinearProgress
            variant="determinate"
            value={70}
            sx={{
              ' .MuiLinearProgress-bar': {
                backgroundColor: '#00d8ff',
               
            
    
              },
            }}
/>

         </div>
        </div>



        <div className='skillContainer__skillSet' >
          <h5>Bootstrap</h5>
         <div className='skillContainer__slider skillContainer__slider2'>
          <LinearProgress variant="determinate" value={70} 

               sx={{
              ' .MuiLinearProgress-bar': {
               
                backgroundColor: "#563d7c",
    
              },
            }}
          
          />
         </div>
        </div>


        <div className='skillContainer__skillSet' >
          <h5>Javascript(Es6)</h5>
         <div className='skillContainer__slider skillContainer__slider3'>
          <LinearProgress variant="determinate" value={70}
          
               sx={{
              ' .MuiLinearProgress-bar': {
               
                backgroundColor: " #f0db4f",
    
              },
            }}
          
          
          
          />
         </div>
        </div>

        <div className='skillContainer__skillSet' >
          <h5>Css3</h5>
         <div className='skillContainer__slider skillContainer__slider4'>
          <LinearProgress variant="determinate" value={70} 
            sx={{
              ' .MuiLinearProgress-bar': {
               
                backgroundColor: "#264de4",
    
              },
            }}
          
          />
         </div>
        </div>


        <div className='skillContainer__skillSet' >
          <h5>Html5</h5>
         <div className='skillContainer__slider skillContainer__slider5'>
          <LinearProgress variant="determinate" value={80} 
          
            sx={{
              ' .MuiLinearProgress-bar': {
               
                backgroundColor: "#e34c26",
    
              },
            }}
          
          
          />
         </div>
        </div>
      
    </div>
    

  </Element>
  )
}

export default SkillContainer