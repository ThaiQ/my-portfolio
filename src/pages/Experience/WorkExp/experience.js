import React, { useState } from 'react';
import Proj from '../../../components/project-box/projectBox'

export default function WorkExp() {
  const projectBio = [
    {
      title: "IBM Extreme Blue Technical/Software Engineer Intern",
      year: 'May-August 2021 | Austin, TX',
      skills: ['devicon-javascript-plain colored', 'devicon-react-plain colored', 'devicon-nodejs-plain colored', 'devicon-express-original',
      'devicon-couchdb-plain colored', 'devicon-npm-original-wordmark colored', 'devicon-redhat-plain-wordmark colored',
      'devicon-git-plain colored', 'devicon-docker-plain colored', 'devicon-html5-plain colored', 'devicon-css3-plain colored'],
      picSRC: 'ibm.jpeg',
      picSkills: [
        {
          file: 'ibm.png',
          widthBig: '50px',
          widthSmall: '50px'
        },
        {
          file: 'agile.png',
          widthBig: '60px',
          widthSmall: '50px',
          word: 'Agile'
        }
      ],
      aboutProj: 'Collaborated with 3 other interns and applied\
       leadership, business, and technical skills to solve a business\
        problem under the guidance of IBM mentors and sponsor users’ weekly feedback.',
      personal: [
        'Developed an enterprise application on IBM Cloud Pak For Security that facilitates collaboration between security threat analysts',
        'Gathered problems and business and technical requirements to arrive at a solution.',
        'Designed frontend with ReactJS and NodeJS.',
        'Designed backend APIs with Express, GraphQL, and CouchDB database.',
        'Deployed application on IBM Cloud Paks using Docker, kubernetes, and Red Hat Openshift.',
        'Presented and delivered the product to executive panels and CTOs of IBM Security.'
      ]
    },
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
        'Write autonomous user-interface tests with Selenium and TestComplete for a new product’s interface.',
        'Generated test reports for test cases and delivered them to team leads.',
        'Practiced Agile - Scrum methodology to quickly deliver minimum viable products (MVPs).',
        'Presented testing practices and values at stakeholders panel.'
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