import React, { useState } from 'react'
import {Alert, Button, Card,Form} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link,useNavigate } from 'react-router-dom';


function Dashboard() {
    const [error,setError]=useState('');
    const {currentUser,logout}=useAuth();
    const [idNumber,setIdNumber]=useState('');
    const [message,setMessage]=useState('');
    const navigate=useNavigate();

    function handleVerify(e){
        e.preventDefault();
        setMessage('');
        //regular expression for testing format
        const pattern = /(([0-9]{2})(0|1)([0-9])([0-3])([0-9]))([ ]?)(([0-9]{4})([ ]?)([0-1][8]([ ]?)[0-9]))/;
        if(pattern.test(idNumber)){
            //Luhms Algorithm for ID validation
            let sum = 0;
            let shouldDouble = false;

            for (let i = idNumber.length - 1; i >= 0; i--) {
                let digit = parseInt(idNumber.charAt(i));
                if (shouldDouble) {
                    digit *= 2;
                    if (digit > 9) {
                        digit -= 9;
                    }
                }
                sum += digit;
                shouldDouble = !shouldDouble;
            }

            if(sum % 10 === 0){
                setMessage('Valid ID Number')
            }else{
                setMessage('Invalid ID Number')
            }
        }else{
            setMessage('Invalid ID Number')
        }
    }

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
        <Card style={{background:"black", color:"white"}}>
            <Card.Body style={{background:"green"}}>
                <h2 className='text-center mb-2'>VERIFY</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <strong>Current user: </strong>{currentUser.email}
                <Link to="/profileUpdate" className="btn btn-primary w-50">UPDATE PROFILE</Link>
            </Card.Body>
            <Card.Body>
                <h4 className='text-center mb-4'>Validate RSA ID here</h4>
                {message && <Alert variant='danger'>{message}</Alert>}
                <Form>
                    <Form.Label>RSA ID Number</Form.Label>
                    <Form.Control
                        type="text"
                        value={idNumber}
                        onChange={e=>setIdNumber(e.target.value)}
                        ></Form.Control>
                    <Button onClick={handleVerify} className='w-100 mt-4' type="submit" style={{ backgroundColor: 'green' }}>Verify</Button>
                </Form>
            </Card.Body>
        </Card>
        <p className='mt-8 text-center relative'>
            <Button variant='link' onClick={handleLogOut}>Log Out</Button>
        </p>
     </>

  )
}

export default Dashboard