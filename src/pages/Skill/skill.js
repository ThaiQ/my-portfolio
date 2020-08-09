import React, { Component } from 'react';
import './skill.css'

export default class Skill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            skills: [
                {
                    name: 'Java',
                    logo: 'devicon-java-plain colored'
                },
                {
                    name: 'Javascript',
                    logo: 'devicon-javascript-plain colored'
                },
                {
                    name: 'Python',
                    logo: 'devicon-python-plain colored'
                },
                {
                    name: 'React',
                    logo: 'devicon-react-original colored'

                },
                {
                    name: 'HTML',
                    logo: 'devicon-html5-plain colored'

                },
                {
                    name: 'CSS',
                    logo: 'devicon-css3-plain colored'

                },
                {
                    name: 'Express',
                    logo: 'devicon-express-original',
                    color: 'white'

                },
                {
                    name: 'Git',
                    logo: 'devicon-git-plain colored'
                },
                {
                    name: 'Linux',
                    logo: 'devicon-linux-plain',
                    color: 'white'
                },
                {
                    name: 'Heroku',
                    logo: 'devicon-heroku-original colored'
                },
                {
                    name: 'Docker',
                    logo: 'devicon-docker-plain colored',
                },
                {
                    name: 'NodeJS',
                    logo: 'devicon-nodejs-plain colored'
                },
                {
                    name: 'MongoDB',
                    logo: 'devicon-mongodb-plain colored'
                },
                {
                    name: 'PostgreSQL',
                    logo: 'devicon-postgresql-plain colored'
                },
                {
                    name: 'NPM',
                    logo: 'devicon-npm-original-wordmark colored'
                },
                {
                    name: 'Yarn',
                    logo: 'devicon-yarn-plain colored'
                },
            ]
        };
    }

    render() {
        return (<div style={{ position: 'relative' }}>

            <h1 className='title'>Skills</h1>

            <ul className="flex-container wrap-reverse">

                {this.state.skills.map((skill, indx) => {
                    // return <li key={indx} className="flex-item">
                    //     <img className='logo' src={skill.logo} />
                    //     <h3>{skill.name}</h3>
                    // </li>

                    return <div className='flex-item'>
                        <i key = {indx} className={`${skill.logo} logo`} style={skill.color? {color:skill.color} : {}}/>
                        <h3>{skill.name}</h3>
                    </div>
                })}

            </ul>

        </div>)
    }
}
