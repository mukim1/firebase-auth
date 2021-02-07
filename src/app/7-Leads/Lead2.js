import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LeadApp from '../1-LeadApp/LeadApp';
import { Button, Card, CardContent, CardHeader, Divider, Grid } from '@material-ui/core';
import '../globals.css'
import { Link } from 'react-router-dom';


const item = [
    { name: 'Starter', title: 'For small sales teams just starting out, looking to find contact data on their prospects.', price: 5, uses: 'Maximum team size of 3 Users' },
    { name: 'Pro', title: 'For growing sales teams focused on building pipeline with a smooth outbound prospecting process.', price: 10, uses: 'Maximum team size of 3 Users' },
    { name: 'Starter', title: 'For small sales teams just starting out, looking to find contact data on their prospects.', price: 15, uses: 'Maximum team size of 3 Users' }
]











function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Lead2() {
    const priceRef = useRef()
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handlePrice = (e) => {
        const data = priceRef.current.innerText
        console.log("data:", data, priceRef);
    }

    return (
        <LeadApp>

            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs example"
                    //   centered
                    // variant="fullWidth"
                    >
                        {/* //icon={<PhoneIcon />} icon={<FavoriteIcon />} */}
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        <Tab label="Item Four" {...a11yProps(3)} />
                        <Tab label="Item Five" {...a11yProps(4)} />
                        <Tab label="Item Six" {...a11yProps(5)} />
                        <Tab label="Item Seven" {...a11yProps(6)} />
                    </Tabs>
                </AppBar>
                {item.map((item, index) => {
                    return (
                        <TabPanel value={value} index={index}>
                            <Grid container justify="center">
                                <Grid xs="12" sm="8" md="6" lg="5">
                                    <Card style={{padding: '50px 5px'}}>
                                        <Grid container>
                                            <h1 style={{ margin: '5px auto', display: 'block' }}>{item.name}</h1>
                                        </Grid>
                                        <CardContent>
                                        <Divider />
                                            <p>{item.title}</p>
                                            <h6
                                                style={{
                                                    fontFamily: 'Merriweather',
                                                    fontWeight: '600'
                                                }}> Pay $<span ref={priceRef}>{item.price}</span> per 100 lead </h6>
                                            <p>{item.uses}</p>
                                            <Link to="/app/stripe">
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    fullWidth size="large"
                                                    onClick={handlePrice}
                                                >Check out</Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    )
                })}
            </div>
        </LeadApp>
    );
}