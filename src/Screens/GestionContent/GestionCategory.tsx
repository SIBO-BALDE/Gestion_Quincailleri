
import { Box, Button, createTheme, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, outlinedInputClasses, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Theme, ThemeProvider, Typography, useTheme } from '@mui/material'
import PaginationScreen from '../../Components/Users/Pagination/Pagination'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEnvelope, faGlobe, faLocation, faLocationDot, faMap, faPhone, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import CloseIcon from '@mui/icons-material/Close';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useAuth } from '../Auth/AuthContext/AuthContext';


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

export default function GestionCategory() {
  const { token, role } = useAuth();


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
      name: string,
      calories: string,
      
    ) {
      return { name, calories};
    }
    
    const rows = [
      createData('Menuiserie',' 24/11/2024' ),
      createData('Plomberie', '24/11/2024'),
      createData('Electricité','24/11/2024'),
      createData('Mençonnerie',' 24/11/2024'),
      
    ];
    interface CategoryData {
      id: number | null | undefined
      nom: string;
      created_at: string;
    }
    const [categories, setCategories] =useState<CategoryData[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);
    const itemsPerPage = 3; 
    const [categoriData, setCategoriData]= useState <CategoryData>({
      id: null,
      nom: '',
      created_at:''

    })
     //***************************** Function pour ajouter une categorie  *************************//
     const ajouterCategory = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Empêche le rechargement du formulaire
      console.log(e, 'evenement');
      if (categoriData.nom === '') {
          toast.error("La catégorie ne peut pas être vide", { /* options */ });
          return;
      }
      try {
          if (token || role === "Admin") {
              const response = await axios.post(
                  "http://localhost:8000/api/ajout/categorie",
                  categoriData,
                  { headers: { Authorization: `Bearer ${token}` } }
              );
              if (response.status === 200) {
                  setCategories([...categories, response.data]);
                  setCategoriData({ id: null, nom: "", created_at:'' });
                  toast.success("Catégorie ajoutée avec succès", { /* options */ });
                  fetchCategory();
                  handleClose();
              } else {
                  console.error("Erreur dans l'ajout de la catégorie");
              }
          }
      } catch (error) {
          console.error("Erreur lors de l'ajout de la catégorie", error);
      }
      };
      
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setCategoriData({ ...categoriData, nom: event.target.value });
      };

       //***************************** Function pour lister les  categories  *************************//

       const fetchCategory= async () => {
   
        try {
          if (token || role==="Admin") {
    
          }
          const response = await axios.get(
            "http://localhost:8000/api/liste/categorie",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            }
    
    
          );
          // console.log(response, "response");
          setCategories(response.data.categories);
          // console.log(response, 'response liste')
    
          // console.log(maison, "liste maison");
        } catch (error) {
          console.error("Erreur lors de la récupération des maisons:", error);
        }
      };

      useEffect(() => {
        fetchCategory();
        
      }, []);

      // function pour changer le format du date 
      const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0'); 
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      };


      //******************** Function pour la recherche input  list utilisateur  *******************//
      const handleSearchChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setSearchValue(event.target.value);
      };
      
       
      // Filtrage des utilisateurs
      
      const filteredUsers = categories.filter((cat) => {
        const fullName = `${cat?.nom || ''}`.toLowerCase();
        return fullName.includes(searchValue.toLowerCase());
      });
      
      
      // Pagination
      const displayUsers = searchValue === '' ? categories : filteredUsers;
      const indexOfLastUser = page * itemsPerPage;
      const indexOfFirstUser = indexOfLastUser - itemsPerPage;
      const currentCategorys = displayUsers.slice(indexOfFirstUser, indexOfLastUser); 
      const totalPages = Math.ceil(displayUsers.length / itemsPerPage);
       
      
      
    
    
  


  return (
    <div className=' container '>
    <div className='flex justify-around align-items-center  gap-3 mt-5'>
        <div><Button onClick={handleClickOpen} className='' style={{backgroundColor:'#fe5300', color:'#fff',border:'none'}}><FontAwesomeIcon icon={faPlus} className='text-white me-2' style={{fontSize:'20px'}} />Ajouter categorie</Button></div>
        <div className='flex gap-2'>
            <div>
            <input type="text" className="form-control" placeholder='Rechercher une catégorie'
            value={searchValue}
            onChange={handleSearchChange}
             />
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
              <TableCell className='text-white'>Titre</TableCell>
              <TableCell align="right" className='text-white'>Date</TableCell>
              <TableCell align="right" className='text-white'>Action</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {currentCategorys.map((category) => (
              <TableRow
                key={category.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {category.nom}
                </TableCell>
                <TableCell align="right">{formatDate(category.created_at)}</TableCell>
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
     {/* ************************************ Pagination   ******************************************* */}
     <div className='flex justify-end mt-5 container'>
          <PaginationScreen 
          page={page} 
          setPage={setPage} 
          totalPages={totalPages}  />
        </div>
       {/* ************************************ Modal ajout debut   ******************************************* */}
    <div>
    {/* PaperProps={{ sx: { width: '30%', maxWidth: 'none' } }} */}
    <Dialog onClose={handleClose} open={open}>
          <DialogTitle>
            Ajouter un Vendeur
            <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <form onSubmit={ajouterCategory}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr 1fr' }, gap: 2 }}>
                <TextField name="categorie" type="text" label="Categorie" value={categoriData.nom} onChange={handleChange} />
      
              </Box>
             
              <DialogActions>
                <Button type="submit" id="form-btn-box">Enregistrer</Button>
                <Button type="button" onClick={handleClose} style={{ border: '2px solid #fe5300', backgroundColor: '#fff', color: '#fe5300' }}>Annuler</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
        <ToastContainer />
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
            Modifier une Catégorie
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
                  gridTemplateColumns: { sm: '1fr 1fr' },
                  gap: 2,
              }}
              id='box-content-form'
              >
              <ThemeProvider theme={customTheme(outerTheme)}>
                  
                  <TextField type="text" label="Titre" />
                  <TextField type="text" label="Titre" />
                  
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
              <TextField type="text" label="Message" variant="standard" />
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
