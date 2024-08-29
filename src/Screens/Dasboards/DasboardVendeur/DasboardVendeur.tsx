

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Deposits from '../../../Components/Admin/Deposit/Deposit';
import Orders from '../../../Components/Admin/Order/Order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronLeft, faClose, faHamburger } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ListItems from '../../../Components/Admin/ListItems/ListItems';
import RenderComponentVendeur from '../../../Components/Vendeur/RenderComponentVendeur/RenderComponentVendeur';
import { Image } from 'react-bootstrap';
import { Button } from '@mui/material';
import SideBarVendeur from '../../../Components/Vendeur/SideBarVendeur/SideBarVendeur';






function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


const defaultTheme = createTheme();

export default function DasboardVendeur() {
  const [open, setOpen] = React.useState(true);
  const [selectedComponent, setSelectedComponent] = React.useState('DashboardVendeur');
  const [activeLinkComponent, setActiveLinkComponent] = React.useState('DashboardVendeur');

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Définir la fonction onSelectComponent
  const onSelectComponent = (component: string) => {
    setSelectedComponent(component);
    setActiveLinkComponent(component);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} style={{backgroundColor:'#fff'}}>
          <Toolbar
            sx={{
              pr: '24px',
            }}
          >
            <IconButton
              edge="start"
              // color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
              style={{color:'#003e1c'}}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton sx={{color:'black'}}>
              <Badge badgeContent={4} color="success">
                <FontAwesomeIcon icon={faBell} />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}  sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#003e1c', 
          },
          }}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer} style={{color:'#fff'}}>
              <FontAwesomeIcon icon={faClose}/>
            </IconButton>
            
          </Toolbar>
          <Divider  className='custom-divider' />
          <div className='mt-2 flex-col'>
            <div className='flex justify-center'>
            <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723494812/temoin_seck_kudpbh.jpg' style={{width:'70px',height:'70px',borderRadius:'50%',  border:'2px solid #fff'}}/>
            </div>
            <h6 className='text-center mt-3 text-white'>Abdoulaye </h6>
            <h6 className='text-center text-white'>Diao</h6>

          </div>
          <Divider className="custom-divider" />
          <List component="nav" >
            {/* Passer la fonction onSelectComponent ici */}
            <SideBarVendeur onSelectComponent={onSelectComponent} activeLinkComponent={selectedComponent} />
          </List>
          <Divider className="custom-divider" />
          <div className='flex justify-center mt-5'>
            <Button 
            id='btn-deconnexion-admin'
            sx={{
              backgroundColor:'#fe5300',
              border:'none',
              color:'white',
              // height:'auto'

            }}>
              Deconnexion
            </Button>
            </div>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {/* Utiliser selectedComponent pour rendre le bon composant */}
          <RenderComponentVendeur selectedComponent={selectedComponent} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
