import React, { useState } from 'react';
import Proj from '../../../components/project-box/projectBox'

export default function WorkExp() {
  const projectBio = [
    {
      title: "UCOP's Test Automation Engineering Intern",
      year: 'June-August 2019 | at University of California Office of the President',
      skills: ['devicon-javascript-plain colored'],
      picSkills: [
        {
          file: 'testcomplete.png',
          widthBig: '200px',
          widthSmall: '150px'
        },
        {
          file: 'agile.png',
          widthBig: '60px',
          widthSmall: '50px',
          word: 'Agile'
        }
      ],
      aboutProj: 'Writing frontend automation tests for the QA team. \
        Attend formal meetings and workshops to develop professional skills. \
        Worked closely with the Agile methodology with different development teams and interns. ',
      personal: [
        'Developed 7 software automation scripts and reports for test cases of new products’ interfaces using TestComplete.',
        'Received training in project management, leadership, and attended formal meetings with engineering teams.',
        'Secured a return offer from overachieved intern-projects by delivering automation scripts on strict personal deadlines with the guidance of experienced software engineers.'
      ]
    }
  ]

  return (
    <div>

      <h1 className='title'>Work Experience</h1>

      {projectBio.map((bio, ind) => {
        return <Proj key={ind} {...bio} />
      })}
    </div>
  );
}