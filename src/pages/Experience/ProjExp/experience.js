import React, { useState } from 'react';
import Proj from '../../../components/project-box/projectBox'

export default function ProjExp() {
  const projectBio = [
    {
      title: 'IBM Good Tech Scholars',
      year: 'July 2020 | Virtual',
      picSRC: 'epicedu.png',
      skills: ['devicon-javascript-plain colored', 'devicon-react-plain colored', 'devicon-nodejs-plain colored', 'devicon-express-original',
        'devicon-postgresql-plain colored', 'devicon-npm-original-wordmark colored',
        'devicon-git-plain colored', 'devicon-docker-plain colored', 'devicon-html5-plain colored', 'devicon-css3-plain colored'],
      picSkills: [
        {
          file: 'ibm.png',
          widthBig: '50px',
          widthSmall: '50px'
        }
      ],
      github: 'https://github.com/ThaiQ/IBMScholars',
      demo: 'http://epicedu-demo.mybluemix.net/',
      aboutProj: 'Learned and used the IBM-cloud technology to build an impactful project and\
        competing against 10 different teams under the guidance of IBM mentors.\
        Built Epic-Education, an online educational platform, targeting low-income elementary school\
        kids with disabilities. The project aims to give children with autism and ADHD a personalized\
        workspace to fit their educational needs. The project won 1st place in the internship program.',
      personal: [
        "Developed the project's infrastructure and backend using NodeJS, Express, and React.",
        "Used IBM cloud services: Elephant-SQL database (PostgreSQL), Watson's Text-to-speech service, and Cloud Foundry to build and deploy the application to the cloud.",
        'Fixes bugs and refactoring frontend.',
        'Won 1st place in the internship program against 10 different teams.'
      ]
    },
    {
      title: 'SCE Development Chair',
      year: 'August 2018 - present | at SJSU Software and Computer Engineering Society (SCE)',
      picSRC: 'sce.png',
      skills: ['devicon-javascript-plain colored', 'devicon-react-plain colored', 'devicon-nodejs-plain colored', 'devicon-express-original',
        'devicon-mongodb-plain colored', 'devicon-npm-original-wordmark colored',
        'devicon-git-plain colored', 'devicon-docker-plain colored', 'devicon-html5-plain colored', 'devicon-css3-plain colored'],
      demo: 'https://sce.engr.sjsu.edu/',
      github: 'https://github.com/SCE-Development/Core-v4',
      aboutProj: 'Led a team of 20 software engineering students and coordinated different events and development projects for SCE.',
      personal: [
        'Developed the organization website using the full-stack React, Mongo, Express, and Node.',
        'Used TravisCI, git, lint, and Jest to manage and write test cases for components allowing better controls and scalable future development.',
        'Planned and executed infrastructure works with MERN-stack, Dockers Compose, and Google Firebase.',
        'Led a team of 20 software engineering students and coordinated different development projects for SCE.',
        'Elected to be the next president of SCE in 2020.'
      ]
    },
    {
      title: 'STAKr-Calendar Developer',
      year: 'March - June 2020',
      picSRC: 'https://user-images.githubusercontent.com/18486562/81507215-ad713b80-92b0-11ea-9276-de252fd8e82d.png',
      skills: ['devicon-python-plain colored', 'devicon-javascript-plain colored', 'devicon-html5-plain colored', 
        'devicon-css3-plain colored', 'devicon-git-plain colored', 'devicon-heroku-original colored', 'devicon-jquery-plain-wordmark colored'],
      picSkills:[
        {
          file: 'flask.png',
          widthBig: '40px',
          widthSmall: '30px',
          word: 'Flask'
        },
        {
          file: 'travis.png',
          widthBig: '50px',
          widthSmall: '40px'
        }
      ],
      github: 'https://github.com/ThaiQ/CalendarApp_STAKr',
      demo: 'https://stakr-calendar.herokuapp.com/',
      aboutProj: 'Built a calendar application allowing the customer and owner to communicate with one another by creating meetings through a calendar interface.',
      personal: [
        "Built the project's backend with Python and Flask-framework.",
        'Developed the appointment API and its interactive UI using Jquery and SQLite.',
        'Designed the application frontend with Bootstrap.',
        'Wrote backend tests and integrated auto-integration using TravisCI.',
        'Deployed the application on Heroku.'
      ]
    },
    {
      title: 'Personal Porfolio',
      year: 'June - August 2020',
      skills: ['devicon-javascript-plain colored', 'devicon-react-plain colored', 'devicon-npm-original-wordmark colored',
        'devicon-github-plain', 'devicon-git-plain colored', 'devicon-html5-plain colored', 'devicon-css3-plain colored'],
      github: 'https://github.com/ThaiQ/my-porfolio',
      demo: '/',
      aboutProj: 'Designed a personal portfolio.',
      personal: [
        'Developed frontend with ReactJS and integrated animation from various open-source libraries.',
        'Deployed with Github.',
      ]
    },
    {
      title: 'First Robotic Competition',
      year: 'October 2015 - June 2018 | Software Lead at Team 5027',
      skills: ['devicon-java-plain colored', 'devicon-python-plain colored'],
      aboutProj: 'Built robots to compete in First Robotic Competition under the guidance of mentors from Qualcomm and Apple.\
        The team held the Home Championship for two years: Houston, CalGame 2017 and CalGame 2016.',
      personal: [
        "Worked with a team of 5 leads to organize 20 members throughout the construction process of robots.",
        'Recruited and trained new members in Java, OpenCV and automation mechanics.',
        'Contributed to the design and construction of robots’ circuit boards with the electrical team.'
      ]
    }
  ]

  return (
    <div>
      <h1 className='title'>Projects</h1>
      {projectBio.map((bio, ind) => {
        return <Proj key={ind} {...bio} />
      })}
    </div>
  );
}