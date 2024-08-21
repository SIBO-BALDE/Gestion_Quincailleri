
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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                    </Grid>
                    </Grid>
                    <Button
                    type="submit"
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
                        Mot de pass oublier! Réinitialiser
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
