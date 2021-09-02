import React from 'react';
import './skill.css'

export default function Skill(props) {

    const skills = [
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
            name: 'Tensorflow',
            logo: 'devicon-tensorflow-original colored'

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
            name: 'C',
            logo: 'devicon-c-plain-wordmark colored'

        },
        {
            name: 'Linux',
            logo: 'devicon-linux-plain',
            color: 'white'
        },
        {
            name: 'Nginx',
            logo: 'devicon-nginx-original colored',
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
            name: 'CouchDB',
            logo: 'devicon-couchdb-plain colored'
        },
        {
            name: 'PostgreSQL',
            logo: 'devicon-postgresql-plain colored'
        },
        {
            name: 'Express',
            logo: 'devicon-express-original',
            color: 'white'

        },
        {
            name: 'JQuery',
            logo: 'devicon-jquery-plain colored'
        },
        {
            name: 'NPM',
            logo: 'devicon-npm-original-wordmark colored'
        },
        {
            name: 'Yarn',
            logo: 'devicon-yarn-plain colored'
        },
        {
            name: 'Git',
            logo: 'devicon-git-plain colored'
        },
        {
            name: 'RedHat Openshift',
            logo: 'devicon-redhat-plain colored'
        }
    ]

    return (<div style={{ position: 'relative' }}>

        <h1 className='title'>Skills</h1>

        <ul className="flex-container wrap-reverse">

            {skills.map((skill, indx) => {
                return <div className='flex-item' key={indx}>
                    <i className={`${skill.logo} logo`} style={skill.color ? { color: skill.color } : {}} />
                    <h3>{skill.name}</h3>
                </div>
            })}

        </ul>

    </div>)

}
