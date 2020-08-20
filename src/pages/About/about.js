import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text'
import './about.css'

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    render() {
        return (<div id='about'>
            <div className='grid-container'>
                <h1 className='title'>About me!</h1>

                <p className='sub-title text'> Software engineering student at San Jose State University. </p>

                <p className='sub-title2 text'> Graduating on December-2021. </p>

                <p className='bio-text text'>
                    My experiences revolve around developing
                    full-stack application and quality assurance.
                    I am well-versatile with web-development and web-frameworks such as React.
                </p>

                <p className='fun-text text'> 
                I am looking for opportunities to 
                <ReactRotatingText items={[' discover new technologies!', ' learn new skills!', ' develop professionally!']} /> 
                </p>
            </div>
        </div>)
    }
}
