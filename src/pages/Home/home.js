import React, { Component } from 'react';
import './home.css'
import '../../../node_modules/three/build/three'
import BIRDS from 'vanta/dist/vanta.net.min'
import * as THREE from 'three';
import Navbar from '../../components/navbar/navbar'
import About from '../About/about'
import Skill from '../Skill/skill'
import { profilePicture } from '../../components/svg/svg'
import WorkExp from '../Experience/WorkExp/experience'
import ProjExp from '../Experience/ProjExp/experience'
import Contact from '../Contact/contact'
import Footer from '../../components/footer/footer'
import { Link } from 'react-scroll'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        this.vantaRef = React.createRef()
    }

    componentDidMount() {
        this.vantaEffect = BIRDS({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            minHeight: window.innerHeight,
            minWidth: window.innerWidth,
            scale: 1.00,
            scaleMobile: 1.00,
            points: 14.00,
            maxDistance: 23.00,
            spacing: 17.00,
            backgroundColor: 0xffffff,
            color: 0xff3f81,
            THREE: THREE
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }

    render() {
        return <div style={{ backgroundColor: 'black' }}>

            <Navbar />
            
            <div id='vanta' ref={this.vantaRef}>
                <div className='intro'>
                    <h1>Hey there!</h1>
                    <p> Glad you are here!</p>
                    {profilePicture('20%')}
                    <p className='description'>Software Engineer | Full Stack Developer</p>
                </div>
            </div>

            <section id='nav-about'>
            <About/>
            </section>

            <section id='nav-skills'>
            <Skill/>
            </section>

            <section id='nav-wkexp'>
            <WorkExp/>
            </section>

            <section id='nav-prj'>
            <ProjExp/>
            </section>

            <section id='nav-contact'>
                <Contact />
                <Footer />
            </section>
        </div>
    }
}
