import React, { useState, useEffect } from 'react';
import ReactRotatingText from 'react-rotating-text'
import './about.css'

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

export default function About () {

    const size = useWindowSize();

    return (<div id='about'>
        <div className='grid-container'>
            <h1 className='title'>About me!</h1>

            <p className='sub-title text'> Software engineering student at San Jose State University. </p>

            <p className='sub-title2 text'> Graduating on December-2021. </p>

            <p className='bio-text text'>
                My experiences revolve around developing
                full-stack application and quality assurance.
                I am well-versatile with web-development with embbed cloud technologies.
            </p>

            <p className='fun-text text'> 
            {size.width > 450 ?  'I am excited to' 
             : <div> I am excited to </div>}
             <ReactRotatingText items={[' discover new technologies!', ' learn new skills!', ' develop professionally!']} />
            </p>
        </div>
    </div>)
}
