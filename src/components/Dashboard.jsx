import React, { useState } from 'react'
import {Alert, Button, Card} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link,useNavigate } from 'react-router-dom';


function Dashboard() {
    const [error,setError]=useState('');
    const {currentUser,logout}=useAuth();
    const navigate=useNavigate();
    async function handleLogOut(){
        setError('');

        try{
            await logout();
            navigate('/login')
        }catch{
            setError('Failed to Log out')
        }
    }
  return (
     <>
        <Card>
            <Card.Body style={{background:"green"}}>
                <h2 className='text-center mb-2'>VERIFY</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <strong>Current user: </strong>{currentUser.email}
                <Link to="/profileUpdate" className="btn btn-primary w-50">UPDATE PROFILE</Link>
            </Card.Body>
            <Card.Body>
                <h4 className='text-center mb-4'>Validate RSA ID here</h4>
            </Card.Body>
        </Card>
        <p className='mt-8 text-center relative'>
            <Button variant='link' onClick={handleLogOut}>Log Out</Button>
        </p>
     </>

  )
}

export default Dashboard