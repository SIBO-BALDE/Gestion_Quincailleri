

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
import RenderComponent from '../../../Components/Admin/RenderComponent/RenderComponent';
import { Image } from 'react-bootstrap';
import { Button } from '@mui/material';
import axios from 'axios';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext/AuthContext'







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

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [selectedComponent, setSelectedComponent] = React.useState('Dashboard');
  const [activeLinkComponent, setActiveLinkComponent] = React.useState('Dashboard');
  const navigate =useNavigate()
  const { token, role } = useAuth();
  
  



  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Définir la fonction onSelectComponent
  const onSelectComponent = (component: string) => {
    setSelectedComponent(component); 
    setActiveLinkComponent(component);
  };


   //*********************** Function pour logout  **************************//

   const Signout = async () => {
    if (!token || role !== "Admin") {
      toast.error("Vous devez être connecté en tant qu'administrateur pour vous déconnecter.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }
  
    try {
      // Appeler l'API pour la déconnexion
      const response = await axios.post(
        "http://localhost:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 200) {
        
        localStorage.removeItem("tokencle");
        localStorage.removeItem("rolecle");
  
        // Afficher un message de succès
        toast.success("Déconnexion réussie. À bientôt !", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
  
        // Rediriger vers la page de connexion
        navigate("/login");
      } else {
        toast.error("Erreur lors de la déconnexion. Veuillez réessayer.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la déconnexion", error);
      toast.error("Une erreur est survenue lors de la déconnexion.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
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
            <h6 className='text-center mt-3 text-white'>Cheikh Omar</h6>
            <h6 className='text-center text-white'>Mballo</h6>

          </div>
          <Divider className="custom-divider" />
          <List component="nav" >
            {/* Passer la fonction onSelectComponent ici */}
            <ListItems onSelectComponent={onSelectComponent}  activeLinkComponent={selectedComponent} />
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

            }}
            onClick={Signout}
            >
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
          <RenderComponent selectedComponent={selectedComponent} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
