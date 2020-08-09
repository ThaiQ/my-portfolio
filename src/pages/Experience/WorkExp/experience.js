import React, { useState } from 'react';
import Proj from '../../../components/project-box/projectBox'

export default function WorkExp() {
    const projectBio = [
      {
        title:"UCOP's Test Automation Engineering Intern",
        year:'June-August 2019 | at University of California Office of the President',
        skills: ['devicon-javascript-plain colored'],
        picSkills:['testcomplete.png', 'agile.png'],
        aboutProj: 'Writing frontend automation tests for the QA team. \
        Attend formal meetings and workshops to develop professional skills. \
        Worked closely with the Agile methodology with different development teams and interns. ',
        personal: [
          'Developed software automation scripts and reports for test cases of new products’ interfaces using TestComplete.',
          'Received training in project management, leadership, and attended formal meetings with engineering teams.',
          'Strategized and executed plans to deliver products on strict personal deadlines with experienced software engineers resulting in overachieved intern-projects and a return offer.'
        ]
      }
    ]

    return (
      <div>

        <h1 className='title'>Work Experience</h1>

        {projectBio.map((bio, ind)=>{
          return <Proj key={ind} {...bio}/>
        })}
      </div>
    );
  }