import { Box, Button, createTheme, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, outlinedInputClasses, styled, TextField, Theme, ThemeProvider, Typography, useTheme , Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import PaginationScreen from '../../Components/Users/Pagination/Pagination'
import React, { useEffect, useState } from 'react'
import { FormControl, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEnvelope, faGlobe, faList, faLocation, faLocationDot, faLock, faLockOpen, faMap, faPhone, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import CloseIcon from '@mui/icons-material/Close';
import { color } from 'framer-motion'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useAuth } from '../Auth/AuthContext/AuthContext';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2'


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
    

export default function GestionVendeur () {
  const { token, role } = useAuth();
  const [users, setUsers] =useState<UserData[]>([]);
  const [usersBloque, setUsersBloque] =useState<UserData[]>([]);
  const [usersPerPage] = useState(5);  
  const [page, setPage] = useState(1);
  const itemsPerPage = 3; 
  
  const [searchValue, setSearchValue] = useState('');
  const [searchValueBlock, setSearchValueBlock] = useState('');





    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));

      const [open, setOpen] = React.useState(false);
      const [openList, setOpenList] = React.useState(false);
      const [openModif, setOpenModif] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClickOpenList = () => {
        setOpenList(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
      const handleCloseList = () => {
        setOpenList(false);
      };
      const handleClickOpenModif = (id: any) => {
        setOpenModif(true);
      };
      const handleCloseModif = () => {
        setOpenModif(false);
      };

      const outerTheme = useTheme();

      //*********************** Etat pour initialiser les attribut de la function ajout **************************//
      interface UserData {
        id: number | null | undefined
        prenom: string;
        nom: string;
        email: string;
        password: string;
        telephone: string;
        addresse: string;
        img?: File; 
      }
      
      const [userData, setUserData] = useState<UserData>({
        id: null,
        prenom: '',
        nom: '',
        email: '',
        password: '',
        telephone: '',
        addresse: '',
        img: undefined,
      });
      
      //*********************** file images **************************//
      const [newFile, setNewFile] = useState("");
      const handleFileChange = (file: React.SetStateAction<string>) => {
        setNewFile(file);
      };
      
      //*********************** Function pour ajouter un vendeur **************************//
      const ajouterVendeur =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(!userData.prenom || !userData.nom || !userData.email || !userData.password  || !userData.telephone || !userData.addresse || !userData.img){
          toast.error('Les champs ne peuvent pas être vides', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          return
        }
        if (!emailPattern.test(userData.email)) {
          // <NotificationFailed message=" Le format de l'email n'est pas valide"/>
          toast.error(" Le format de l'email n'est pas valide", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          
          return
          
        }
        if (userData.password.length < 8) {
          // <NotificationFailed message=" Le mot de passe doit comporter au moins 8 caractères!"/>
          toast.error("Le mot de passe doit comporter au moins 8 caractères!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          
          
          return
          
        }
        try {
          const formData = new FormData();
           formData.append("prenom", userData.prenom);
           formData.append("nom", userData.nom);
           formData.append("email", userData.email);
           formData.append("password", userData.password);
           formData.append("addresse", userData.addresse);
           formData.append("telephone", userData.telephone);
           if (userData.img) {
            formData.append("img", userData.img);
          }
          if (token || role==="Admin"){
            const response = await axios.post(
              "http://localhost:8000/api/creation/vendeur",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            if (response.data.status === 422) {
              console.log(response.data.errors,'resp')
              return
              
              //   position: "bottom-center",
              //   autoClose: 5000,
              //   hideProgressBar: false,
              //   closeOnClick: true,
              //   pauseOnHover: true,
              //   draggable: true,
              //   theme: "light",
              // });
            }
            if (response.status === 200) {
              console.log(response,'resp')
              setUsers([...users, response.data]);
              setUserData({
                id:null,
                prenom: '',
                nom: '',
                email: '',
                password: '',
                telephone: '',
                addresse: '',
                img: undefined,
              });
              toast.success(" Vendeur ajouter avec succées", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
              })
              fetchVendeur();
              handleClose();
    
            } else {
              console.error("Erreur dans l'ajout de la maison");
            }
          }
          
    
          
        } catch (error) {
           console.log(error)
          
        }


      }
    
      const handleChange = (e:any) => {
        const { name, value, type, files } = e.target;
        setUserData(prev => ({
          ...prev,
          [name]: type === 'file' ? files[0] : value
        }));
      };
      const handlePhoneChange = (value: string) => {
        setUserData((prevData) => ({
          ...prevData,
          telephone: value,
        }));
      };

      //*********************** Function pour lister les vendeurs **************************//
      const fetchVendeur = async () => {
   
        try {
          if (token || role==="Admin") {
    
          }
          const response = await axios.get(
            "http://localhost:8000/api/liste/vendeur",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            }
    
    
          );
          // console.log(response, "response");
          setUsers(response.data.Admins);
          console.log(response, 'response liste')
    
          // console.log(maison, "liste maison");
        } catch (error) {
          console.error("Erreur lors de la récupération des maisons:", error);
        }
      };

      //*********************** Function pour lister les vendeurs bloquer **************************//
      const fetchVendeurBloquer = async () => {
   
        try {
          if (token || role==="Admin") {
    
          }
          const response = await axios.get(
            "http://localhost:8000/api/liste/vendeur/bloquer",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            }
    
    
          );
          // console.log(response, "response");
        setUsersBloque(response.data.Vendeur);
          console.log(response, 'response liste bloquer')
    
        } catch (error) {
          console.error("Erreur lors de la récupération des vendeurs bloque", error);
        }
      };
    
      // Mettre à jour  la liste tout les vendeurs
      useEffect(() => {
        fetchVendeur();
        fetchVendeurBloquer();
      }, []);

     //*********************** Function pour bloquer les vendeurs  **************************//
      const bloquerVendeur = async (id: number) => {
        try {
          if (token || role === "Admin") {
            const response = await axios.post(
              `http://localhost:8000/api/vendeur/${id}/bloquer`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
      
            if (response.status === 200) {
              // Met à jour la liste des vendeurs pour refléter le statut de blocage
              const updatedVendeurs = users.map((user) =>
                user.id === id ? { ...user, statut: 'bloqué' } : user
              );
              setUsers(updatedVendeurs);
      
              toast.success("Vendeur bloqué avec succès", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
              });
              fetchVendeur(); 
              fetchVendeurBloquer(); 
            } else {
              console.error("Erreur lors du blocage du vendeur");
            }
          }
        } catch (error) {
          console.error("Erreur lors de la requête de blocage:", error);
        }
      };

      //*********************** Function pour débloquer les vendeurs  **************************//
      const debloquerVendeur = async (id: number) => {
        try {
          if (token || role === "Admin") {
            const response = await axios.post(
              `http://localhost:8000/api/vendeur/${id}/debloquer`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${token}`, // Ajouter le token d'autorisation
                },
              }
            );
        
            // Afficher la réponse du serveur dans la console
            console.log(response.data.message || "Vendeur débloqué avec succès");
            console.log(response, "reponse debloquer");
            toast.success("Vendeur débloqué avec succès", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
            setUsersBloque((prevUsersBloque) =>
              prevUsersBloque.filter((user) => user.id !== id)
            );
        
            // Ajouter le vendeur débloqué à la liste des utilisateurs normaux
            setUsers((prevUsers) => [...prevUsers, response.data.User]);
            fetchVendeur();
            fetchVendeurBloquer();
          }
        } catch (error) {
          console.error("Erreur lors de la requête de blocage:", error);
        }
      };


    //******************** Function pour la recherche input  list utilisateur  *******************//
      const handleSearchChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setSearchValue(event.target.value);
      };
      
       
      // Filtrage des utilisateurs
      
      const filteredUsers = users.filter((user) => {
        const fullName = `${user?.prenom || ''} ${user?.nom || ''}`.toLowerCase();
        return fullName.includes(searchValue.toLowerCase());
      });
      
      
      // Pagination
      const displayUsers = searchValue === '' ? users : filteredUsers;
      const indexOfLastUser = page * itemsPerPage;
      const indexOfFirstUser = indexOfLastUser - itemsPerPage;
      const currentUsers = displayUsers.slice(indexOfFirstUser, indexOfLastUser); 
      const totalPages = Math.ceil(displayUsers.length / itemsPerPage); 
      

      //***************** Function pour la recherche input  list utilisateur bloqués  *************//
      const handleSearchChangeBlok = (event: { target: { value: React.SetStateAction<string> } }) => {
        setSearchValueBlock(event.target.value);
      };
  
      // Filtrage des utilisateurs bloqués
      const filteredUsersBloque = usersBloque.filter((userBloque) => {
        const fullName = `${userBloque?.prenom || ''} ${userBloque?.nom || ''}`.toLowerCase();
        return fullName.includes(searchValueBlock.toLowerCase());
      });
      
      const displayUsersBloque = searchValueBlock === '' ? usersBloque : filteredUsersBloque;

      interface UserDataModif {
        id: number | null | undefined
        prenom: string;
        nom: string;
        email: string;
        password: string;
        telephone: string;
        addresse: string;
        img?: File; 
      }

      const [editUserData, setEditUserData] = useState<UserDataModif>({
        id: null,
        prenom: '',
        nom: '',
        email: '',
        password: '',
        telephone: '',
        addresse: '',
        img: undefined,
      });

      //*********************** Function pour modifier un vendeur debut **************************//
      const modifierVendeur = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const formData = new FormData();
           formData.append("prenom", editUserData.prenom);
           formData.append("nom", editUserData.nom);
           formData.append("email", editUserData.email);
           formData.append("password", editUserData.password);
           formData.append("addresse", editUserData.addresse);
           formData.append("telephone", editUserData.telephone);
           if (editUserData.img) {
            formData.append("img", editUserData.img);
          }
          if (token || role==="Admin"){
            const response = await axios.post(
              "http://localhost:8000/api/creation/vendeur",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            if (response.data.status === 422) {
              console.log(response.data.errors,'resp')
              return
              
              
            }
            if (response.status === 200) {
              console.log(response,'resp')
              setUsers([...users, response.data]);
              setUserData({
                id:null,
                prenom: '',
                nom: '',
                email: '',
                password: '',
                telephone: '',
                addresse: '',
                img: undefined,
              });
              toast.success(" Vendeur ajouter avec succées", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
              })
              fetchVendeur();
              handleClose();
    
            } else {
              console.error("Erreur dans l'ajout de la maison");
            }
          }
          
    
          
        } catch (error) {
           console.log(error)
          
        }

      }
      //*********************** Function pour modifier un vendeur fin **************************//
      
      
      




  return (
    <div className=''>
        <div className='flex justify-around align-items-center  gap-3 mt-3'>
            <div className='flex justify-around align-items-center  gap-3 mt-3'>
              <div><button onClick={handleClickOpen} className='' style={{backgroundColor:'#fe5300', color:'#fff',border:'none', width:'50px', height:'50px' , borderRadius:'50%'}}><FontAwesomeIcon icon={faPlus} className='text-white' style={{fontSize:'40px'}} /></button></div>
              <div><Button onClick={handleClickOpenList} className='' style={{backgroundColor:'#fe5300', color:'#fff',border:'none'}}><FontAwesomeIcon icon={faList} className='text-white me-2' style={{fontSize:'20px'}} />Liste vendeur bloqué</Button></div>
              
            </div>
            <div className='flex gap-2'>
                <div>
                <FormControl placeholder='Rechercher un vendeur'
                value={searchValue}
                onChange={handleSearchChange}
                 />
                </div>
                <div>
                <Button sx={{backgroundColor:'#fe5300', color:'#fff',border:'none'}}>Rechercher</Button>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap justify-center align-content-center container gap-5 mt-5'> 
        {currentUsers && currentUsers.map((user) => (
        <div
          key={user.id} 
          className=" profile-card w-[300px]  rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
        >
          <div
            className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1"
          >
            <div
              className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#fe5300] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#fe5300] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300"
            >
              
              <Image
                className="size-36 z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                src={`http://localhost:8000/storage/${user.img}`} 
                alt={`${user.prenom} ${user.nom}`}
              />




            </div>
          </div>

          <div className="headings *:text-center *:leading-4">
            <p className="text-xl font-serif font-semibold text-[#434955]">{user.prenom}</p>
            <p className="text-sm font-semibold text-[#434955]">{user.nom}</p>
          </div>

          <div className="w-full items-center justify-center flex">
            <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
              <li>
                <FontAwesomeIcon icon={faPhone} style={{width:'15px',height:'15px'}} className='vendeurs-icons' />
                <p>{user.telephone}</p> 
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} style={{width:'15px',height:'15px'}} className='vendeurs-icons' />
                <p>{user.email}</p> 
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} style={{width:'15px',height:'15px'}} className='vendeurs-icons' />
                <p>{user.addresse}</p> 
              </li>
            </ul>
          </div>

          <div className='vendeurs-icons flex justify-around gap-10 '>
            <Button onClick={() => handleClickOpenModif(user.id)}><FontAwesomeIcon icon={faEdit} style={{color:'#fe5300', fontSize:'32px'}} /></Button>
            <Button  onClick={() => user.id && bloquerVendeur(user.id)}><FontAwesomeIcon icon={faLock} style={{color:'#fe5300', fontSize:'32px'}} /></Button>
          </div>

          <hr className="w-full group-hover:h-5 h-3 bg-[#fe5300] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
        </div>
      ))}
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
        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>
            Ajouter un Vendeur
            <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <form onSubmit={ajouterVendeur}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr 1fr' }, gap: 2 }}>
                <TextField name="prenom" type="text" label="Prenom" value={userData.prenom} onChange={handleChange} />
                <TextField name="nom" type="text" label="Nom" value={userData.nom} onChange={handleChange} />
                <TextField name="email" type="email" label="Email" value={userData.email} onChange={handleChange} />
                <TextField name="password" type="password" label="Password" value={userData.password} onChange={handleChange} />
                
                <Box sx={{ mb: 2 }}>
                <PhoneInput
                  country={'sn'} 
                  value={userData.telephone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: 'telephone',
                    required: true, // Facultatif, si tu veux rendre le champ obligatoire
                    autoFocus: true,
                  }}
                  inputStyle={{
                    width: '100%',
                    height: '55px', // Pour imiter la hauteur des TextField MUI
                    fontSize: '16px',
                    borderRadius: '4px',
                    borderColor: 'rgba(0, 0, 0, 0.23)', // Bordure similaire à MUI
                    paddingLeft: '50px', // Ajuste en fonction du drapeau de l'indicatif
                  }}
                  specialLabel="Téléphone"
                  containerClass="phone-input-container"
                  inputClass="phone-input"
                />
                </Box>
                <TextField name="addresse" type="text" label="Adresse" value={userData.addresse} onChange={handleChange} />
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr ' }, gap: 2 ,marginTop: 2 ,marginBottom: 2}}>
                <TextField name="img" type="file" label="Profile" onChange={handleChange} />
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
        {/* ************************************ Modal ajout fin   ******************************************* */}


        {/* ************************************ Modal modifier debut   ******************************************* */}
        <div>
            <BootstrapDialog
                onClose={handleCloseModif}
                aria-labelledby="customized-dialog-title"
                open={openModif}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Modifier un Vendeur
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
                                                    <TextField type="text" label="Prenom" />
                                                    <TextField type="text" label="Nom" />
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
                                                <TextField type="email" label="Email" />
                                                    <TextField type="password" label="Password" />
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
                                                    <TextField type="text" label="Telephone" />
                                                    <TextField type="text" label="Adresse" />
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
        {/* ************************************ Modal modifier fin   ******************************************* */}

        {/* ************************************ Liste utilisateur  bloquer debut   ******************************************* */}
        <Dialog onClose={handleCloseList} open={openList} maxWidth="lg" fullWidth >
        <DialogTitle>
            Liste Vendeurs Bloqués
            <IconButton aria-label="close" onClick={handleCloseList} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <div className='mt-3'>
            <div className='flex gap-2 mb-3 justify-end'>
              <div>
                <TextField 
                  placeholder='Rechercher un vendeur bloqué'
                  value={searchValueBlock}
                  onChange={handleSearchChangeBlok}
                  sx={{ width: '300px',
                    '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#ccc', // Couleur de bordure par défaut
                          },
                          '&:hover fieldset': {
                            borderColor: '#fe5300', // Couleur de bordure au survol
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#fe5300', // Couleur de bordure lorsqu'on est en focus
                          },
                        },

                   }} 
                />
              </div>
              <div>
                <Button sx={{ backgroundColor: '#fe5300', color: '#fff', border: 'none', height: '55px' }}>
                  Rechercher
                </Button>
              </div>
            </div>

    

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{backgroundColor:'#fe5300',color:'#fff'}}>
                  <TableRow>
                    <TableCell className='text-white'>Image</TableCell>
                    <TableCell align="right" className='text-white'>Prenom</TableCell>
                    <TableCell align="right" className='text-white'>Nom</TableCell>
                    <TableCell align="right" className='text-white'>Email</TableCell>
                    <TableCell align="right" className='text-white'>Adresse</TableCell>
                    <TableCell align="right" className='text-white'>Telephone</TableCell>
                    <TableCell align="right" className='text-white'>Action</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayUsersBloque.map((userBloque) => (
                    <TableRow
                      key={userBloque.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {/* <TableCell component="th" scope="row">
                        <Image
                          src={`http://localhost:8000/storage/${userBloque.img}`}
                          alt={`${userBloque.prenom} ${userBloque.nom}`}
                          width={50}  
                          height={50} 
                          style={{ objectFit: 'cover' }} 
                        />
                      </TableCell> */}
                      <TableCell component="th" scope="row">
                        {userBloque && userBloque.img ? (
                          <Image
                            src={`http://localhost:8000/storage/${userBloque.img}`} 
                            alt={`${userBloque.prenom} ${userBloque.nom}`}
                            width={50} // Exemple pour ajuster la taille
                            height={50}
                          />
                        ) : (
                          "Image non disponible" // Texte ou élément par défaut
                        )}
                      </TableCell>

                      <TableCell align="right">{userBloque.prenom}</TableCell>
                      <TableCell align="right">{userBloque.nom}</TableCell>
                      <TableCell align="right">{userBloque.email}</TableCell>
                      <TableCell align="right">{userBloque.addresse}</TableCell>
                      <TableCell align="right">{userBloque.telephone}</TableCell>
                      <TableCell align="right">
                        <Button onClick={() => userBloque.id && debloquerVendeur(userBloque.id)}><FontAwesomeIcon icon={faLockOpen} style={{color:'#003e1c', fontSize:'20px'}}/></Button>
                        
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
                <div className='flex justify-end mt-5'>
                   
                </div>

          </div>
        </DialogContent>

        </Dialog>

        {/* ************************************ Liste utilisateur bloquer fin   ******************************************* */}


    </div>
  )

}
