import { Button, Card, CardActions, CardContent, Divider, Grid } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import LeadApp from '../1-LeadApp/LeadApp';

const Lead = () => {
    const inputRef = useRef()

    const [price, setPrice] = useState()

    const handleCharge = () => {
        const quantity = inputRef.current.value
        setPrice(quantity / 10)
    }

    fetch('http://localhost:4000/excel')
        .then(res => res.json())
        .then(data => console.log(data))


    return (
        <LeadApp>
            <Grid container>
                <Grid container justify="center">
                    <h2 style={{ textAlign: 'center', textTransform: 'uppercase', color: '#999' }}>Genarate Lead</h2>
                </Grid>

                <Grid container justify="space-around" alignItems="center">
                    <Grid>
                        <h3>Features-</h3>
                        <ul>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </Grid>
                    <Card style={{maxWidth: '400px', padding: '20px 5px', marginTop: '20px'}}>
                        <CardContent>
                            <h5 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Pay $5 per 100 lead.</h5>
                            <hr />
                            <input style={{ padding: '10px', fontSize: '20px', marginBottom: '5px' }} onChange={handleCharge} ref={inputRef} type="number" name="" id="" />
                            <h5 style={{ color: '#999' }}>Price: ${price}</h5>
                            <Button fullWidth size="large" color="primary" variant="contained">Check out</Button>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </LeadApp>
    );
};

export default Lead;