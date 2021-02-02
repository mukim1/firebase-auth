import React from 'react';
import PersistentDrawerLeft from '../2-Drawer/Drawer';
import {Container} from 'react-bootstrap';

const LeadApp = ({ children }) => {
    return (
        <>
            <PersistentDrawerLeft />
            <Container className="p-5">
                {children}
            </Container>
        </>
    );
};

export default LeadApp;