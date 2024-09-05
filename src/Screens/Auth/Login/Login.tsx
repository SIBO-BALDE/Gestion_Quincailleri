
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Card } from '@mui/material';
import './Login.css'
import { useState } from 'react';
import NotificationFailed from '../../../Components/Notifications/NotificationFailed';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { tokenToString } from 'typescript';
import { useAuth } from '../AuthContext/AuthContext'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        ar-rahmane
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function Login() {
  const [email, setEmail]=useState<string>('')
  const [password, setPassword]=useState<string>('')
  const { setToken, setRole } = useAuth()

  const navigate =useNavigate()

 

  const Signin = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    // alert('non')

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
      if (email ==='' || password ==='') {
        // <NotificationFailed message='Les champs ne peuvent pas être vides'/>
        // toast.error('Les champs ne peuvent pas être vides');
        alert(' champs vides')

        return
        
      }
      
      if (!emailPattern.test(email)) {
        // <NotificationFailed message=" Le format de l'email n'est pas valide"/>
        alert(' email invalid')
        return
        
      }
      if (password.length < 8) {
        // <NotificationFailed message=" Le mot de passe doit comporter au moins 8 caractères!"/>
        alert(' pass invalid')
        return
        
      }
      const credentials ={
        email,
        password,
      }
      try {
        const response = await axios.post(
          "http://localhost:8000/api/login",
          credentials,
           )
           if (response.status === 200) {
            const data = response.data;
            console.log('data', data)
            alert(' okay')
            const tokenAuth= data.token
            const roleAuth= data.roles[0]
            // console.log(tokenAuth, 'token')
            // console.log(roleAuth, 'roleAuth')
            setToken(tokenAuth);
            setRole(roleAuth);

            // localStorage.setItem("tokencle", tokenAuth);
            // localStorage.setItem("rolecle", roleAuth);

            if (tokenAuth || roleAuth === "Admin") {
                navigate("/dasboardadmin");
              } else{
                navigate("/dasboaruser");
              } 
          }
      
    } catch (error) {
      
    }

  }



  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <div className='login-main-content flex justify-center '>
        <Card variant="outlined" style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} className='pb-5 mt-10'>
            <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: '#fe5300' }}>
                <Link href='/' className='text-white'><FontAwesomeIcon icon={faLock}/></Link>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Connexion
                </Typography>
                <Box component="form" noValidate onSubmit={Signin} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Adresse e-mail"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Mot de passe"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="Je souhaite recevoir des inspirations, promotions marketing et mises à jour par e-mail."
                    />
                  </Grid>
                </Grid>
                {/* Bouton de soumission du formulaire */}
                <Button
                  type="submit"  // Le type doit être "submit" pour les formulaires
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  className='btn-content-material-background'
                >
                  Connexion
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2" style={{color:'#003e1c', textDecoration:'none'}}>
                      Mot de passe oublié? Réinitialiser
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
            </ThemeProvider>

        </Card>
    </div>
  );
}
