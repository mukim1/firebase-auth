import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import logo from '../../images/leadIQ.svg'
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';

const drawerWidth = 240;



export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                color="inherit"
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Grid container alignItems="center" justify="space-between" style={{padding: '0 100px'}}>
                        <Grid>
                            <IconButton
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                // className={clsx(classes.menuButton, open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid>
                            {/* <div style={{marginLeft: '100px', }}>
                                <img style={{width: '120px'}} src={logo} alt="logo" />
                            </div> */}
                            <Link to="/app/accaunt"><SettingsPowerIcon/></Link>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        {/* <MenuIcon /> */}
                    </IconButton>
                </div>
                <Divider />
                {/* <ListItemText primary={text} /> */}
                <List>
                    <Link className={classes.list} to="/" >
                        <ListItem button>
                            campaigns
                        </ListItem>
                    </Link>
                    <Link  className={classes.list} to="/app/team" >
                        <ListItem button>
                            Team
                        </ListItem>
                    </Link>

                    <Link  className={classes.list} to="/app/university" >
                        <ListItem button>
                            University
                        </ListItem>
                    </Link>
                    <Link  className={classes.list} to="/app/accaunt" >
                        <ListItem button>
                            Accaunt
                        </ListItem>
                    </Link>
                    {/* <Link to="/app" >campaigns</Link> */}
                </List>
                <Divider />
            </Drawer>
            {/* <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptas fugiat modi suscipit ea accusantium ipsum saepe culpa cupiditate corporis, totam numquam asperiores qui quidem ratione necessitatibus voluptatibus, labore commodi.</p>
            </main> */}
            <h1>Bangdlk</h1>
        </div>
    );
}



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    // appBar: {
    //     transition: theme.transitions.create(['margin', 'width'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    // },
    // appBarShift: {
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     marginLeft: drawerWidth,
    //     transition: theme.transitions.create(['margin', 'width'], {
    //         easing: theme.transitions.easing.easeOut,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    list: {
        textTransform: 'uppercase',
        color: '#999',
        fontWeight: '600'
    }
}));