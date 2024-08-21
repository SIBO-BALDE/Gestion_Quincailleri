import Footer from "../../Components/Users/Footer/Footer";
import NavbarUser from "../../Components/Users/NavbarUser/NavbarUser";
import './ContactScreen.css'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { Button } from "@mui/material";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const customTheme = (outerTheme: Theme) =>
    createTheme({
      palette: {
        mode: outerTheme.palette.mode,
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              '--TextField-brandBorderColor': '#E0E3E7',
              '--TextField-brandBorderHoverColor': '#B2BAC2',
              '--TextField-brandBorderFocusedColor': '#6F7E8C',
              '& label.Mui-focused': {
                color: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: 'var(--TextField-brandBorderColor)',
            },
            root: {
              [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderHoverColor)',
              },
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: 'var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              '&::before, &::after': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
        MuiInput: {
          styleOverrides: {
            root: {
              '&::before': {
                borderBottom: '2px solid var(--TextField-brandBorderColor)',
              },
              '&:hover:not(.Mui-disabled, .Mui-error):before': {
                borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
              },
              '&.Mui-focused:after': {
                borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
              },
            },
          },
        },
      },
    });

export default function ContactScreen() {

    const outerTheme = useTheme();
  return (
    <div>
        <header>
          <div>
            
          </div>
            <div>
                <NavbarUser/>
            </div>

            <div className="content-large-devise">
              <Card variant="outlined" className='content-background-contact-first-content'>
                            <div className='content-backgoround-main-product-ban-home-okay' style={{paddingTop:'50px'}}>
                            <h2 style={{ marginLeft:'70px', }} className="text-white">Contactez nous pour tout vos besoins en matier d'équipage quincaillerie</h2>
                            <div style={{display:'flex', justifyContent:'center',marginTop:'50px', marginLeft:'600px'}}>
                              <div className="">
                                  <div className="flex justify-center align-items-center gap-4">
                                      <div className="content-contact-left-icon"><FontAwesomeIcon icon={faWhatsapp}/></div>
                                      <div className="content-contact-left-icon-text"><h6>+221 77 418 24 08/77 8</h6></div>
                                  </div>
                                  <div className="flex justify-center align-items-center gap-4 mt-3">
                                      <div className="content-contact-left-icon"><FontAwesomeIcon icon={faEnvelope}/></div>
                                      <div className="content-contact-left-icon-text"><h6>arrahmane@gmail.com</h6></div>
                                  </div>
                                
                              </div>
                            </div>
                            
                            </div>
                            <Card variant="outlined" className='content-position-relative-ban-product'>
                            <div><h2 className="text-center w-100" style={{color:'#fe5300'}}>Contactez Nous !</h2></div>
                  
                                <div className='flex-content-ban-product' id='flex-content-ban-product'>
                                      <Box
                                      sx={{
                                          display: 'grid',
                                          gridTemplateColumns: { sm: '1fr 1fr ' },
                                          gap: 2,
                                      }}
                                      id='box-content-form'
                                      >
                                      <ThemeProvider theme={customTheme(outerTheme)}>
                                          <TextField type="tex" label="Prenom" />
                                          <TextField type="tex" label="Nom" />
                                      </ThemeProvider>
                                      
                                      </Box>
                                      <Box
                                      sx={{
                                          display: 'grid',
                                          gridTemplateColumns: { sm: '1fr' },
                                          gap: 2,
                                      }}
                                      id='box-content-form'
                                      >
                                      <ThemeProvider theme={customTheme(outerTheme)}>
                                          
                                          <TextField type="tex" label="Telephone" />
                                      </ThemeProvider>
                                      
                                      </Box>
                                      <Box
                                      sx={{
                                          display: 'grid',
                                          gridTemplateColumns: { sm: '1fr' },
                                          gap: 2,
                                      }}
                                      id='box-content-form'
                                      >
                                      <ThemeProvider theme={customTheme(outerTheme)}>
                                      <TextField label="Message" variant="standard" />
                                      </ThemeProvider>
                                      
                                      </Box>
                                      <Button id="form-btn-box">Envoyer</Button>
                                  
                                  
                                
                                
                                </div>
                            </Card>
              </Card>

            </div>
            <div className="content-medium-devise">
              <Card variant="outlined" className='content-backgoround-main-product-ban-one-contact'>
                
                            <div className='content-backgoround-main-product-ban-two-middle' style={{paddingTop:'50px'}}>
                            <h2 style={{ marginLeft:'70px', }} className="text-white title-content-medium-content">Contactez nous pour tout vos besoins en matier d'équipage quincaillerie</h2>
                           
                            
                            </div>
                            <Card variant="outlined" className='content-position-relative-ban-product'>
                              <div><h2 className="text-center" style={{color:'#fe5300'}}>Contactez Nous!</h2></div>
                                <div className='flex-content-ban-product' id='flex-content-ban-product'>
                                      <Box
                                      sx={{
                                          display: 'grid',
                                          gridTemplateColumns: { sm: '1fr 1fr ' },
                                          gap: 2,
                                      }}
                                      id='box-content-form'
                                      >
                                      <ThemeProvider theme={customTheme(outerTheme)}>
                                          <TextField type="tex" label="Prenom" />
                                          <TextField type="tex" label="Nom" />
                                      </ThemeProvider>
                                      
                                      </Box>
                                      <Box
                                      sx={{
                                          display: 'grid',
                                          gridTemplateColumns: { sm: '1fr' },
                                          gap: 2,
                                      }}
                                      id='box-content-form'
                                      >
                                      <ThemeProvider theme={customTheme(outerTheme)}>
                                          
                                          <TextField type="tex" label="Telephone" />
                                      </ThemeProvider>
                                      
                                      </Box>
                                      <Box
                                      sx={{
                                          display: 'grid',
                                          gridTemplateColumns: { sm: '1fr' },
                                          gap: 2,
                                      }}
                                      id='box-content-form'
                                      >
                                      <ThemeProvider theme={customTheme(outerTheme)}>
                                      <TextField label="Message" variant="standard" />
                                      </ThemeProvider>
                                      
                                      </Box>
                                      <Button id="form-btn-box">Envoyer</Button>
                                  
                                  
                                
                                
                                </div>
                            </Card>
              </Card>

            </div>

            <div>

            </div>
        </header>
        <main>

        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
