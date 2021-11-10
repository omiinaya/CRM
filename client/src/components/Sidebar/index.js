import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ComputerIcon from '@mui/icons-material/Computer';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ExtensionIcon from '@mui/icons-material/Extension';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import HealingIcon from '@mui/icons-material/Healing';
import BuildIcon from '@mui/icons-material/Build';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import HelpIcon from '@mui/icons-material/Help';
import AppBar from '../AppBar'

const drawerWidth = 180;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(7)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(props.state);

    const handleDrawerOpen = () => {
        setOpen(true);
        props.fnState()
    };

    const handleDrawerClose = () => {
        setOpen(false);
        props.fnState()
    };

    const handleTabSwitch = () => {
        props.fnPath()
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />



            <AppBar fn={handleDrawerOpen} open={open} title={props.title}/>



            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Home', 'Systems', 'Clients', 'Parts', 'Test'].map((text, index) => (
                        <Link
                            to={text}
                            color="inherit"
                            style={{ color: 'black', textDecoration: "none" }}
                            key={index}
                            onClick={handleTabSwitch}
                        >
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {
                                        text === 'Home' ? <HomeIcon /> :
                                            text === 'Systems' ? <ComputerIcon /> :
                                                text === 'Clients' ? <PeopleIcon /> :
                                                    text === 'Parts' ? <ExtensionIcon /> :
                                                        text === 'Tickets' ? <ConfirmationNumberIcon /> :
                                                            text === 'Test' ? <HelpIcon /> :
                                                                <HomeIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Assembly', 'Integration', 'Depo'].map((text, index) => (
                        <Link
                            to={text}
                            color="inherit"
                            style={{ color: 'black', textDecoration: "none" }}
                            key={index}
                            onClick={handleTabSwitch}
                        >
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {
                                        text === 'Assembly' ? <BuildIcon /> :
                                            text === 'Integration' ? <AddToQueueIcon /> :
                                                text === 'Depo' ? <HealingIcon /> :
                                                    <HomeIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Settings'].map((text, index) => (
                        <Link
                            to={text}
                            color="inherit"
                            style={{ color: 'black', textDecoration: "none" }}
                            key={index}
                            onClick={handleTabSwitch}
                        >
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {
                                        text === 'Settings' ? <SettingsIcon /> :
                                            <HomeIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <DrawerHeader />
                {props.content}
            </Box>
        </Box>
    );
}
