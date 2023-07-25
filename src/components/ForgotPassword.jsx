import React,{useState} from 'react'
import {Form, Button, Card,Alert} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContext"
import { Link} from 'react-router-dom';

const ForgotPassword=()=> {
    const [email, setEmail] = useState('');
    const { resetPassword }=useAuth();
    const [error,setError]=useState('');
    const [message,setMessage]=useState('');
    const [loading,setLoading]=useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setMessage('')
            setError('')
            setLoading(true);// disable button
            await resetPassword(email);
            setMessage("Check your emails!")
        }catch{
            setError('Failed to reset password')
        }

        setLoading(false);
    }
    return (
    <div>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Password Reset</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type="email"
                        value={email}
                        required
                        onChange={(e=>setEmail(e.target.value))}></Form.Control>
                    </Form.Group>
                    <Button className='w-100 mt-4' type="submit" disabled={loading} style={{ backgroundColor: 'green' }}>Reset Password</Button>
                </Form>
                <p className='mt-8 text-center relative'><Link to='/login'> Log In</Link></p>
            </Card.Body>
        </Card>
        <p className=' text-center relative'>Not a User? <Link to='/register' >Register</Link></p>
    </div>
  )
}

export default ForgotPassword;
