import React,{useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'


export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    return (
    <div>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Register</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} required></Form.Control>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} required></Form.Control>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" value={passwordConfirm} required></Form.Control>
                    </Form.Group>
                    <Button className='w-100 mt-4' type="submit" style={{ backgroundColor: 'green' }}>Register</Button>
                </Form>
                <p className='mt-8 text-center relative'>Already a User? Log In</p>
            </Card.Body>
        </Card>
    </div>
  )
}
