import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  Button,
  Popover, PopoverHeader, PopoverBody
} from 'reactstrap';

export default function NavigationBar(props) {
  const connect = [
    {
      icon: 'devicon-linkedin-plain',
      url: 'https://linkedin.com/in/thai-quach'
    },
    {
      icon: 'devicon-github-plain',
      url: 'https://github.com/ThaiQ'
    }
  ]
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  useEffect(() => {
    toggle()
  }, []);

  return (
    <div className='footer'>
      <div id='footer-content'>

        {connect.map((gate, ind) => {
          return <a href={gate.url} key={ind} target="_blank">
            <i className={`${gate.icon} footer-icon`} />
          </a>
        })}

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id='mail-icon' onClick={() => { toggle() }}>
          <path
            d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
        </svg>

        <Popover placement='bottom' isOpen={popoverOpen} target="mail-icon" toggle={toggle}>
          <PopoverBody>thai.quach2000@gmail.com</PopoverBody>
        </Popover>

      </div>
    </div>
  );
}