import React, { useState, useEffect } from 'react';
import './projectBox.css'
import {
  Button
} from 'reactstrap';
import Projtxt from './utils/projTextv2';

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function ProjBox(props) {
  const size = useWindowSize();
  return (
    <div className='box-border'>
      <div id='box' pic={props.picSRC ? 'true' : 'false'}>
        {props.picSRC ? <img src={props.picSRC} id='proj-img' alt='Project-img' /> : ''}
        <p id='proj-title'> {props.title} </p>
        <p id='proj-year'> {props.year} </p>
        <ul id='proj-skill' className='flex-container-sk wrap-reverse-sk'>
          {props.skills.map((skill, ind) => {
            return <i key={ind} className={`${skill} flex-item-sk`} />
          })}
          {props.picSkills && props.picSkills.map((skill, ind) => { console.log(skill)
            return <nobr><img style={size.width>877?{width:skill.widthBig}:{width:skill.widthSmall}}
            key={ind} src={`skills/${skill.file}`} className='flex-item' />{skill.word?skill.word:''}</nobr>
          })}
        </ul>
        <div id='proj-text'>
          <Projtxt {...props} />
          <div style={{ 'margin': '1vh' }}>
            {props.demo ? <Button href={props.demo} target="_blank" rel="noopener noreferrer" className='proj-button' outline color="primary">Online Demo</Button> : ''}
            {props.github ? <Button href={props.github} target="_blank" rel="noopener noreferrer" className='proj-button' outline color="danger">Source Code</Button> : ''}
          </div>
        </div>
      </div>
    </div>
  );
}