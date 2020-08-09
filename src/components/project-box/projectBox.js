import React, { useState } from 'react';
import './projectBox.css'
import {
  Button
} from 'reactstrap';
import Projtxt from './utils/projTextv2';

export default function projBox(props) {
    return (
      <div className='box-border'>
        <div id='box' pic={props.picSRC?'true':'false'}>
          {props.picSRC? <img src={props.picSRC} id='proj-img' alt='Project-img'/> : ''}

          <p id='proj-title'> {props.title} </p>

          <p id='proj-year'> {props.year} </p>

          <div id='proj-skill'>
            {props.skills.map((skill,ind)=>{
              return <i key={ind} className={skill} />
            })}
            {props.picSkills && props.picSkills.map((skill,ind)=>{
              return <img key={ind} src={`skills/${skill}`}/>
            })}
          </div>

          <div id='proj-text'>
            <Projtxt {...props} />

            <div style={{'margin':'1vh'}}>
              {props.demo? <Button href={props.demo} target="_blank" rel="noopener noreferrer" className='proj-button' outline color="primary">Online Demo</Button>:''}
              {props.github? <Button href={props.github} target="_blank" rel="noopener noreferrer" className='proj-button' outline color="danger">Source Code</Button>:''}
            </div>
          </div>
        </div> 
      </div>
    );
  }