
import { Box, Button, createTheme, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, outlinedInputClasses, Paper, Select, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Theme, ThemeProvider, Typography, useTheme } from '@mui/material'
import PaginationScreen from '../../Components/Users/Pagination/Pagination'
import React from 'react'
import { Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEnvelope, faGlobe, faLocation, faLocationDot, faMap, faPhone, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import CloseIcon from '@mui/icons-material/Close';
import { SelectChangeEvent } from '@mui/material/Select';



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

export default function GestionProduct() {


    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));

      const [open, setOpen] = React.useState(false);
      const [openModif, setOpenModif] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenModif = () => {
    setOpenModif(true);
  };
  const handleCloseModif = () => {
    setOpenModif(false);
  };

    const outerTheme = useTheme();

    function createData(
      image: string,
      titre: string,
      quantite: number,
      category: string,
      prix: number,
      
    ) {
      return { titre, quantite, category, prix , image};
    }
    
    const rows = [
      createData('img', 'Porte', 40 , 'Menuiserie', 25000 ),
      createData('img', 'Chaise anglaise', 10 , 'Plombrie', 10000 ),
      createData('img', 'Ampoule', 20 , 'Electricité', 25000 ),
      createData('img', 'Ciment', 30 , 'Mençonnerie', 25000 ),
      
      
     
      
    ];
    const [categori, setCategori] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategori(event.target.value as string);
  };
    
  


  return (
    <div className=' container '>
    <div className='flex justify-around align-items-center  gap-3 mt-5'>
        <div><Button onClick={handleClickOpen} className='' style={{backgroundColor:'#fe5300', color:'#fff',border:'none'}}><FontAwesomeIcon icon={faPlus} className='text-white me-2' style={{fontSize:'20px'}} />Ajouter produit</Button></div>
        <div className='flex gap-2'>
            <div>
            <input type="text" className="form-control" placeholder='Rechercher un produit' />
            </div>
            <div>
            <Button sx={{backgroundColor:'#fe5300', color:'#fff',border:'none'}}>Rechercher</Button>
            </div>
        </div>
    </div>
    <div className='mt-5'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{backgroundColor:'#fe5300',color:'#fff'}}>
            <TableRow>
              <TableCell className='text-white'>Image</TableCell>
              <TableCell align="right" className='text-white'>Titre</TableCell>
              <TableCell align="right" className='text-white'>Quantité</TableCell>
              <TableCell align="right" className='text-white'>Catégorie</TableCell>
              <TableCell align="right" className='text-white'>Prix</TableCell>
              <TableCell align="right" className='text-white'>Action</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.titre}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.image}
                </TableCell>
                <TableCell align="right">{row.titre}</TableCell>
                <TableCell align="right">{row.quantite}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.prix}</TableCell>
                <TableCell align="right">
                  <Button onClick={handleClickOpenModif}><FontAwesomeIcon icon={faEdit} style={{color:'#003e1c', fontSize:'20px'}}/></Button>
                  <Button><FontAwesomeIcon icon={faTrash} style={{color:'#003e1c', fontSize:'20px'}} /></Button>
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
    <div className='flex justify-end mt-5'>
     <PaginationScreen/>
    </div>
       {/* ************************************ Modal ajout debut   ******************************************* */}
    <div>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Ajouter un Produit
            </DialogTitle>
            <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <div className='flex-content-ban-product' >
                    <Box
                                            sx={{
                                                display: 'grid',
                                                gridTemplateColumns: { sm: '1fr 1fr ' },
                                                gap: 2,
                                            }}
                                            id='box-content-form'
                                            >
                                            <ThemeProvider theme={customTheme(outerTheme)}>
                                                <TextField type="text" label="Titre" />
                                                <FormControl fullWidth variant="outlined">
    
                                                 <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
                                                  <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={categori}
                                                    label="Categorie"
                                                    onChange={handleChange}
                                                  >
                                                    <MenuItem value={10}>Menuiserie</MenuItem>
                                                    <MenuItem value={20}>Plomberie</MenuItem>
                                                    <MenuItem value={30}>Electricité</MenuItem>
                                                    <MenuItem value={30}>Maçonneie</MenuItem>
                                                  </Select>
                                                  </FormControl>
                                                
                                            </ThemeProvider>
                                            
                    </Box>
                    <Box
                                            sx={{
                                                display: 'grid',
                                                gridTemplateColumns: { sm: '1fr 1fr ' },
                                                gap: 2,
                                            }}
                                            id='box-content-form'
                                            >
                                            <ThemeProvider theme={customTheme(outerTheme)}>
                                            <TextField type="number" label="Prix" />
                                                <TextField type="number" label="Quantité" />
                                            </ThemeProvider>
                                            
                    </Box>
                    <Box
                                            sx={{
                                                display: 'grid',
                                                gridTemplateColumns: { sm: '1fr ' },
                                                gap: 2,
                                            }}
                                            id='box-content-form'
                                            >
                                            <ThemeProvider theme={customTheme(outerTheme)}>
                                                <TextField type="file" label="Produit" style={{width:'100%'}} />
                                                
                                            </ThemeProvider>
                                            
                    </Box>
                                            
                                            
                                        
                                        
                                        
                                        
                </div>
            
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleClose} id="form-btn-box">
                Enregistrer
            </Button>
            <Button autoFocus onClick={handleClose} style={{border:'2px solid #fe5300', backgroundColor:'#fff', color:'#fe5300'}}>
                Annuler
            </Button>
            </DialogActions>
        </BootstrapDialog>
    </div>
    {/* ************************************ Modal ajout debut   ******************************************* */}


    {/* ************************************ Modal modifier debut   ******************************************* */}
    <div>
        <BootstrapDialog
            onClose={handleCloseModif}
            aria-labelledby="customized-dialog-title"
            open={openModif}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Modifier un Produit
            </DialogTitle>
            <IconButton
            aria-label="close"
            onClick={handleCloseModif}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>
            <DialogContent dividers>
            <div className='flex-content-ban-product' >
                    <Box
                                            sx={{
                                                display: 'grid',
                                                gridTemplateColumns: { sm: '1fr 1fr ' },
                                                gap: 2,
                                            }}
                                            id='box-content-form'
                                            >
                                            <ThemeProvider theme={customTheme(outerTheme)}>
                                                <TextField type="text" label="Titre" />
                                                <FormControl fullWidth variant="outlined">
    
                                                 <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
                                                  <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={categori}
                                                    label="Categorie"
                                                    onChange={handleChange}
                                                  >
                                                    <MenuItem value={10}>Menuiserie</MenuItem>
                                                    <MenuItem value={20}>Plomberie</MenuItem>
                                                    <MenuItem value={30}>Electricité</MenuItem>
                                                    <MenuItem value={30}>Maçonneie</MenuItem>
                                                  </Select>
                                                  </FormControl>
                                                
                                            </ThemeProvider>
                                            
                    </Box>
                    <Box
                                            sx={{
                                                display: 'grid',
                                                gridTemplateColumns: { sm: '1fr 1fr ' },
                                                gap: 2,
                                            }}
                                            id='box-content-form'
                                            >
                                            <ThemeProvider theme={customTheme(outerTheme)}>
                                            <TextField type="number" label="Prix" />
                                                <TextField type="number" label="Quantité" />
                                            </ThemeProvider>
                                            
                    </Box>
                    <Box
                                            sx={{
                                                display: 'grid',
                                                gridTemplateColumns: { sm: '1fr ' },
                                                gap: 2,
                                            }}
                                            id='box-content-form'
                                            >
                                            <ThemeProvider theme={customTheme(outerTheme)}>
                                                <TextField type="file" label="Produit" style={{width:'100%'}} />
                                                
                                            </ThemeProvider>
                                            
                    </Box>
                                            
                                            
                                        
                                        
                                        
                                        
                </div>
            
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleCloseModif} id="form-btn-box">
                Modifier
            </Button>
            <Button autoFocus onClick={handleCloseModif} style={{border:'2px solid #fe5300', backgroundColor:'#fff', color:'#fe5300'}}>
                Annuler
            </Button>
            </DialogActions>
        </BootstrapDialog>
    </div>
    {/* ************************************ Modal modifier debut   ******************************************* */}

    </div>
  )
}