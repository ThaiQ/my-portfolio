import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './contact.css'

export default function Contact() {

    const [modal, setModal] = useState(false)
    const [send, setSend] = useState(false)
    const [noti, setNoti] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMSG] = useState('')

    const api_key = 'key';
    const domain = 'domain';
    const mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

    function sendEmail() {

        if (name, email, msg) {
            const data = {
                from: `${name} <${email}>`,
                to: 'thai.quach2000@gmail.com',
                subject: `THAI PORTFOLIO - Message From ${name}`,
                text: `Name: ${name}\nEmail: ${email}\n---\n${msg}`
            };
    
            mailgun.messages().send(data, function (error, body) {
                if (error) {
                    setNoti('Sorry, could not send email at the moment, please contact me at thai.quach2000@gmail.com')
                }
                else {
                    toggle()
                    setSend(true)
                }
            });
        }
        else {
            setNoti('Please fill out your name, email, and message.')
        }
    }

    function toggle() {
        setModal(!modal)
        if (modal==false) setNoti('')
    }

    return <div id='form-div'>

        <h1 className='title'>Contact</h1>

        {send == false ? <Form className='form'>
            <FormGroup>
                <Label>Your Email</Label>
                <Input onChange={(event) => { setEmail(event.target.value) }}
                    type="email" name="email" placeholder="Your email for communication!" />
            </FormGroup>
            <FormGroup>
                <Label>Your name</Label>
                <Input onChange={(event) => { setName(event.target.value) }}
                    type="name" name="name" placeholder="Your name" />
            </FormGroup>
            <FormGroup>
                <Label>Message</Label>
                <Input onChange={(event) => { setMSG(event.target.value) }}
                    type="textarea" name="text" id="exampleText" id='form-txt' />
            </FormGroup>
            <Button outline color="info" id='form-button' onClick={() => { toggle() }}>Submit</Button>
        </Form> : <h2 className='title'>Sent Email</h2>}

        <div>
            <Modal isOpen={modal} toggle={() => { toggle() }}>
                <ModalHeader toggle={() => { toggle() }}>Sending Email</ModalHeader>
                <ModalBody>
                    {noti?noti:'Are you sure?'}
                </ModalBody>
                <ModalFooter>
                    {!noti && <Button color="primary" onClick={() => { sendEmail() }}>Yes, send!</Button>}{' '}
                    <Button color="secondary" onClick={() => { toggle() }}>{noti ? 'ok':'No, not yet!'}</Button>
                </ModalFooter>
            </Modal>
        </div>
    </div>
}
