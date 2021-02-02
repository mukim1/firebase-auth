import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Signup(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Fail to create an account')
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit} >
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required ref={emailRef} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required ref={passwordRef} />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password confirmation</Form.Label>
                            <Form.Control type="password" required ref={passwordConfirmRef} />
                        </Form.Group>
                        <Button type="submit" disabled={loading} className="w-100" >Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    );
};
