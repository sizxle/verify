import React,{useState} from 'react'
import {Form, Button, Card,Alert} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContext"
import { Link , useNavigate} from 'react-router-dom';

const Login=()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login}=useAuth();
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate(); //redirction

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError('')
            setLoading(true);// disable button
            await login(email,password);
            navigate('/verify')
        }catch{
            setError('Failed to Log in')
        }

        setLoading(false);
    }
    return (
    <div>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In</h2>
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
                    <Button className='w-100 mt-4' type="submit" disabled={loading} style={{ backgroundColor: 'green' }}>Login</Button>
                </Form>
                <p className='mt-8 text-center relative'><Link to='/forgotPassword' >Forgot Password?</Link></p>
            </Card.Body>
        </Card>
        <p className=' text-center relative'>Not a User? <Link to='/register' >Register</Link></p>
    </div>
  )
}

export default Login;
