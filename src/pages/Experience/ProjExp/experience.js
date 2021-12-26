import React, { useState } from 'react';
import Proj from '../../../components/project-box/projectBox'

export default function ProjExp() {
  const projectBio = [
    
    {
      title: 'Fast Regional Based Convolutional Neural Network Model to Detect Deep-Fake',
      year: 'July 2020 - December 2021',
      picSRC: 'deepfake.png',
      skills: ['devicon-python-plain colored','devicon-tensorflow-original colored','devicon-javascript-plain colored', 'devicon-react-plain colored'],
      picSkills: [
        {
          file: 'opencv.png',
          widthBig: '40px',
          widthSmall: '30px',
          word: 'OpenCV'
        },
        {
          file: 'flask.png',
          widthBig: '40px',
          widthSmall: '30px',
          word: 'Flask'
        }
      ],
      github: 'https://github.com/ThaiQ/Deepfake_Recognition',
      demo: '',
      aboutProj: 'Trained a machine learning R-CNN model that can detect popular Deep-Fake generators and data sources.',
      personal: [
        "Trained an ensemble machine learning of 5 R-CNN models to detect popular Deep-Fake generators and data sources.",
        "Designed RCNN model with Tensorflow 2.0 and tf.Keras.",
        "Wrote autonomous python scripts to scrape and clean-up datasets, preprocese, and normalize images before training.",
        "Developed an interactive React - Flask website to publish the model for online users.",
        "Models achieved 67% of accuracy under test datasets."
      ]
    },

    {
      title: 'SCE Development Chair',
      year: 'August 2018 - August 2021 | at SJSU Software and Computer Engineering Society (SCE)',
      picSRC: 'sce.png',
      skills: ['devicon-javascript-plain colored', 'devicon-react-plain colored', 'devicon-nodejs-plain colored', 'devicon-express-original',
        'devicon-mongodb-plain colored', 'devicon-npm-original-wordmark colored',
        'devicon-git-plain colored', 'devicon-docker-plain colored', 'devicon-html5-plain colored', 'devicon-css3-plain colored'],
      demo: 'https://sce.engr.sjsu.edu/',
      github: 'https://github.com/SCE-Development/Core-v4',
      aboutProj: 'Development Team Chair (2019-2020) / President (2020-2021) ',
      personal: [
        'Developed the organization website using full-stack: React, Mongo, Express, and Node.',
        'Write unit-test cases and implement a continuous integration pipeline with TravisCI, git, lint, and Jest.',
        'Containerized and deployed servers with Docker and load balancing traffic with Nginx.',
        'Led full-stack technical workshop and interviewed, recruited, and cultivated new student leaders and engineers for\
        projects and other organizations.',
      ]
    },

    {
      title: 'IBM Good Tech Scholars Hackathon',
      year: 'July 2020 - August 2020 | Virtual',
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
        "Built Epic-Education, an online educational platform, targeting low-income elementary school kids with disabilities.",
        "Developed the project's infrastructure and backend using NodeJS, Express, and React.",
        "Deployed the application on the cloud with integrated AI features from IBM cloud services: PostgreSQL, Watson's\
        Text-to-speech service, and IBM Cloud.",
        'Won 1st place in the hackathon program against 10 different teams.'
      ]
    },

    {
      title: 'Canvas Redesign - UI/UX ',
      year: 'November 2020 - December 2020',
      picSRC: 'canvas.png',
      skills: ['devicon-javascript-plain colored', 'devicon-react-plain colored', 'devicon-amazonwebservices-original colored',
      'devicon-nodejs-plain colored', 'devicon-javascript-plain colored', 'devicon-npm-original-wordmark colored'],
      github: 'https://github.com/ThaiQ/Canvas-Redesign',
      demo: 'https://www.youtube.com/watch?v=l12VM_q69ss&ab_channel=Rollin%27Potato',
      aboutProj: 'Redesign student Canvas dashboard.',
      personal: [
        "Redesigned the student Canvas dashboard - aiming to improve the user interface and user experience.",
        "Designed and implemented the new dashboard with ReactJS frontend.",
        "Integrated the product with AWS services: API Gateway, Lambda, and DynamoDB as backend stack.",
        "Wrote unit-test and lambda test cases to ensure cloud communications.",
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