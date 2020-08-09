import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './contact.css'

const api_key = 'lie';
const domain = 'lie';
const mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

export default function Contact() {

    const [modal, setModal] = useState(false)
    const [send, setSend] = useState(false)

    function sendEmail() {
        var data = {
            from: 'TestUser <thai.quach2000@gmail.com>',
            to: 'thai.quach2000@mail.com',
            subject: 'Hello',
            text: 'Testing some Mailgun awesomeness!'
        };

        mailgun.messages().send(data, function (error, body) {
            console.log(body);
            if (error) console.log(error)
            else {
                toggle()
                setSend(true)
            }
        });
    }

    function toggle() {
        setModal(!modal)
    }

    return <div id='form-div'>

        <h1 className='title'>Contact</h1>

        {send==false ? <Form className='form'>
            <FormGroup>
                <Label>Your Email</Label>
                <Input type="email" name="email" placeholder="Your email for communication!" />
            </FormGroup>
            <FormGroup>
                <Label>Your name</Label>
                <Input type="name" name="name" placeholder="Your name" />
            </FormGroup>
            <FormGroup>
                <Label>Message</Label>
                <Input type="textarea" name="text" id="exampleText" id='form-txt' />
            </FormGroup>
            <Button outline color="info" id='form-button' onClick={() => { toggle() }}>Submit</Button>
        </Form> : <h2 className='title'>Sent Email</h2>}

        <div>
            <Modal isOpen={modal} toggle={()=>{toggle()}}>
                <ModalHeader toggle={()=>{toggle()}}>Sending Emai</ModalHeader>
                <ModalBody>
                    Are you sure?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>{sendEmail()}}>Yes, send!</Button>{' '}
                    <Button color="secondary" onClick={()=>{toggle()}}>No, not yet!</Button>
                </ModalFooter>
            </Modal>
        </div>
    </div>
}
