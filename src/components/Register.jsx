import React,{useState} from 'react'
import {Form, Button, Card,Alert} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContext"

const Register=()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const {register,currentUser}=useAuth();
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        if(password !== passwordConfirm){
            return setError("Passwords do not match");
        }

        try{
            setError('')
            setLoading(true);// disable button
            await register(email,password);
        }catch{
            setError('Failed to create user account')
        }

        setLoading(false);
    }
    return (
    <div>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Register</h2>
                {currentUser && currentUser.email}
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type="email"
                        value={email}
                        required
                        onChange={(e=>setEmail(e.target.value))}></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        value={password}
                        required
                        onChange={(e=>setPassword(e.target.value))}></Form.Control>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                        type="password"
                        value={passwordConfirm}
                        required
                        onChange={(e=>setPasswordConfirm(e.target.value))}></Form.Control>
                    </Form.Group>
                    <Button className='w-100 mt-4' type="submit" disabled={loading} style={{ backgroundColor: 'green' }}>Register</Button>
                </Form>
                <p className='mt-8 text-center relative'>Already a User? Log In</p>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Register;
