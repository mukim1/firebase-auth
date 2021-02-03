import React, { useState } from 'react';
import { Alert, Button, Card, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import LeadApp from '../app/1-LeadApp/LeadApp';
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handlelogout() {
        setError('')

        try {
            await logout()
            history.push("/login")
        } catch {
            setError('Fail to log out')
        }
    }
    return (
        <>
            <LeadApp>
                <Container className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
                    <div className="w-100" style={{ maxWidth: '400px' }}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Profile</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <strong>Email:</strong> {currentUser.email}
                                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text-center mt-2">
                            <Button variant="link" onClick={handlelogout}>Log Out</Button>
                        </div>
                    </div>
                </Container>
            </LeadApp>
        </>
    );
};
