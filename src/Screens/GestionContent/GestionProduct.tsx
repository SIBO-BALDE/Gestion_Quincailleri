
import { Box, Button, createTheme, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, outlinedInputClasses, Paper, Select, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Theme, ThemeProvider, Typography, useTheme } from '@mui/material'
import PaginationScreen from '../../Components/Users/Pagination/Pagination'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEnvelope, faGlobe, faLocation, faLocationDot, faMap, faPhone, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import CloseIcon from '@mui/icons-material/Close';
import { SelectChangeEvent } from '@mui/material/Select';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useAuth } from '../Auth/AuthContext/AuthContext'


interface ProductDataModif {
        id: number | null | undefined
        prix: string;
        nom: string;
        qteStock: string;
        categorie_id: string;
        description: string;
        img?: File; 
        categorie: Categorie;
        previewUrl?: string;
}
 // typage produit
interface ProductData {
      id: number | null | undefined
      prix: string;
      nom: string;
      qteStock: string;
      categorie_id: string;
      description: string;
      img?: File; 
      categorie: Categorie;
}

   // typage categorie
interface CategoryData {
      id: number | null | undefined
      nom: string;
      
}
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

  type Categorie = {
      id: number;
      nom: string;
      created_at: string;
      updated_at: string;
  };

     
// Function pour qjouter un produi
export default function GestionProduct() {
  const [products, setProducts] =useState<ProductData[]>([]);
  const [categories, setCategories] =useState<CategoryData[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 10; 
  const { token, role } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [openModif, setOpenModif] = React.useState(false);
  // const [openModif, setOpenModif] = React.useState(false);

  //******************** Function pour la recherche input  list utilisateur  *******************//
  const handleSearchChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchValue(event.target.value);
  };

 
  
   
  // Filtrage des utilisateurs
  
  const filteredProducts = products.filter((product) => {
    const fullName = `${product?.nom || ''}`.toLowerCase();
    return fullName.includes(searchValue.toLowerCase());
  });
  
  
  // Pagination
  const displayUsers = searchValue === '' ? products : filteredProducts;
  const indexOfLastUser = page * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentProducts = displayUsers.slice(indexOfFirstUser, indexOfLastUser); 
  const totalPages = Math.ceil(displayUsers.length / itemsPerPage); 
  
  const [productData, setProductData] = useState<ProductData>({
    id: null,
    nom: '',
    prix: '',
    qteStock: '',
    categorie_id: '',
    description: '',
    img: undefined,
    categorie: {
      id: 0,
      nom: '',
      created_at: '',
      updated_at: '',
    },
  });

  const [newFile, setNewFile] = useState("");
      const handleFileChange = (file: React.SetStateAction<string>) => {
        setNewFile(file);
      };
  const ajouterProduct =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // alert('cc') 
    
    
    if(!productData.nom || !productData.prix || !productData.qteStock  || !productData.categorie_id || !productData.description || !productData.img){
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
   
    try {
      const formData = new FormData();
       formData.append("nom", productData.nom);
       formData.append("prix", productData.prix);
       formData.append("qteStock", productData.qteStock);
       formData.append("categorie_id", productData.categorie_id);
       formData.append("description", productData.description);
       
       if (productData.img) {
        formData.append("img", productData.img);
      }
      if (token || role==="Admin"){
        const response = await axios.post(
          "http://localhost:8000/api/ajout/produit",
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
          setProducts([...products, response.data]);
          setProductData({
            id: null,
            nom: '',
            prix: '',
            qteStock: '',
            categorie_id: '',
            description: '',
            img: undefined,
            categorie: {
              id: 0,
              nom: '',
              created_at: '',
              updated_at: '',
            },
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
          fetchProduct();
          handleClose();

        } else {
          console.error("Erreur dans l'ajout de la maison");
        }
      }
      

      
    } catch (error) {
       console.log(error)
      
    }


  }
  

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
      fetchProduct();
      
    }, []);
    
// image onchange event
    const handleChange = (e:any) => {
      const { name, value, type, files } = e.target;
      setProductData(prev => ({
        ...prev,
        [name]: type === 'file' ? files[0] : value
      }));
    };


    // fecht product
    const fetchProduct = async () => {
   
      try {
        if (token || role==="Admin") {
  
        }
        const response = await axios.get(
          "http://localhost:8000/api/liste/produit",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
  
  
        );
        // console.log(response, "response");
        setProducts(response.data.Produit);
        console.log(response, 'response liste prod')
  
        // console.log(maison, "liste maison");
      } catch (error) {
        console.error("Erreur lors de la récupération des maisons:", error);
      }
    };

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));

      

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


       // Function pour supprimer les produits
       const supprimerProduct = async (id: number | null) => {
        try {
          if (token && role === "Admin") {
            const response = await axios.post(
              `http://localhost:8000/api/destroy/produit/${id}`,
              {}, 
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
      
            if (response.status === 200) {
              setProducts(products.filter((product) => product.id !== id));
              toast.success("Produit supprimée avec succès", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
              });
            } else {
              console.error("Erreur lors de la suppression du produit");
            }
          } else {
            console.error("Token ou rôle invalide");
          }
        } catch (error: any) {
          console.error("Erreur lors de la suppression du produit :", error);
          toast.error("Une erreur est survenue lors de la suppression", {
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

      

      const [editProductData, setEditProductData] = useState<ProductDataModif>({
        id: null,
        nom: '',
        prix: '',
        qteStock: '',
        categorie_id: '',
        description: '',
        img: undefined,
        categorie: {
          id: 0,
          nom: '',
          created_at: '',
          updated_at: '',
        },
        previewUrl: '',
      });


      // Function pour recuperer les valeurs des champs à modifier
      const recupererValeursUtilisateur = (productEl: ProductDataModif) => {
        // console.log(productEl, 'productEl edit')
        if (productEl && productEl.nom) {
          setEditProductData({
          id: productEl.id || 0,
          nom: productEl.nom || '',
          prix: productEl.prix || '',
          qteStock: productEl.qteStock || '',
          // password: '', 
          categorie_id: productEl.categorie_id || '',
          description: productEl.description || '',
          img: productEl.img, 
          categorie: productEl.categorie, 
          });
          setOpenModif(true);
        } else {
          console.error("info product modif ");
         
        }
      };

      // Function pour modifier les produits
      const modifierProduct = async (e: React.FormEvent<HTMLFormElement>, id: number | null) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append("nom", productData.nom);
          // formData.append("prix", productData.prix);
          // formData.append("qteStock", productData.qteStock);
          // formData.append("categorie_id", productData.categorie_id);
          formData.append("prix", parseFloat(productData.prix).toString());
          formData.append("qteStock", parseInt(productData.qteStock).toString());
          formData.append("categorie_id", productData.categorie_id.toString());
          formData.append("description", productData.description);
      
          if (productData.img) {
            formData.append("img", productData.img);
          }
      
          if (token || role === "Admin") {
            const response = await axios.post(
              `http://localhost:8000/api/update/produit/${id}`, 
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
      
            if (response.data.status === 422) {
              console.error(response.data.errors, "Erreur de validation");
              return;
            }
      
            if (response.status === 200) {
              console.log(response, "Produit mis à jour avec succès");
              toast.success("Produit modifié avec succès", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
              });
      
              fetchProduct();
              handleCloseModif();
            } else {
              console.error("Erreur lors de la modification du produit");
            }
          }
        } catch (error) {
          console.error("Erreur lors de la requête de modification", error);
          toast.error("Une erreur est survenue lors de la modification", {
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

      const handleFileChangeFour = (file: File) => {
        if (file) {
          const objectUrl = URL.createObjectURL(file);
          setEditProductData((prevData) => ({
            ...prevData,
            img: file, 
            previewUrl: objectUrl, 
          }));
        }
      };

    
  
  
    
  


  return (
    <div className=' container '>
    <div className='flex justify-around align-items-center  gap-3 mt-5'>
        <div><Button onClick={handleClickOpen} className='' style={{backgroundColor:'#fe5300', color:'#fff',border:'none'}}><FontAwesomeIcon icon={faPlus} className='text-white me-2' style={{fontSize:'20px'}} />Ajouter produit</Button></div>
        <div className='flex gap-2'>
            <div>
            <input type="text" className="form-control" placeholder='Rechercher un produit'
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
          <TableHead style={{ backgroundColor: '#fe5300', color: '#fff' }}>
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
            {currentProducts && currentProducts.map((product) => (
              <TableRow
                key={product.id} // Assurez-vous que chaque produit a une propriété `titre` unique ou utilisez `product.id` si disponible
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Image src={`http://localhost:8000/storage/${product.img}`} alt='' style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                </TableCell>
                <TableCell align="right">{product.nom}</TableCell>
                <TableCell align="right">{product.qteStock}</TableCell>
                <TableCell align="right">{product.categorie?.nom || "Non spécifiée"}</TableCell>
                <TableCell align="right">{product.prix}</TableCell>
                <TableCell align="right">
                  <Button ><FontAwesomeIcon icon={faEdit} style={{ color: '#003e1c', fontSize: '20px' }} onClick={() => recupererValeursUtilisateur(product)} /></Button>
                  <Button ><FontAwesomeIcon icon={faTrash} style={{ color: '#003e1c', fontSize: '20px' }} onClick={() => product.id && supprimerProduct(product.id)} /></Button>
                  {/* <Button onClick={() => handleClickOpenModif(product)}><FontAwesomeIcon icon={faEdit} style={{ color: '#003e1c', fontSize: '20px' }} /></Button> */}
                  {/* <Button onClick={() => handleDeleteProduct(product.id)}><FontAwesomeIcon icon={faTrash} style={{ color: '#003e1c', fontSize: '20px' }} /></Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

    <div className='flex justify-end mt-5'>
     {/* <PaginationScreen/> */}
      {/* ************************************ Pagination   ******************************************* */}
      <div className='flex justify-end mt-5 container'>
          <PaginationScreen 
          page={page} 
          setPage={setPage} 
          totalPages={totalPages}  />
        </div>
    </div>
       {/* ************************************ Modal ajout debut   ******************************************* */}
    <div>
        <Dialog
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
            <form onSubmit={ajouterProduct} encType="multipart/form-data"> 
              <div className='flex-content-ban-product' >
                  <Box
                    sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr 1fr' }, gap: 2 }}
                    id='box-content-form'
                    >
                   
                        <TextField type="text" label="Titre"
                        name='nom'
                         value={productData.nom}
                         onChange={handleChange}
                         />
                        <FormControl fullWidth variant="outlined">
    
                          <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
                          <Select
                               
                                id="demo-simple-select"
                                label="Categorie"
                                name="categorie_id"
                                value={productData.categorie_id}
                                onChange={handleChange}
                              >
                                {categories.map((category: CategoryData) => (
                                  <MenuItem  key={category.id} value={category.id ?? ''}>
                                    {category.nom}
                                  </MenuItem>
                                ))}
                          </Select>
                        </FormControl>
                        <TextField 
                          type="number" 
                          label="Prix"
                          name='prix' 
                          value={productData.prix}
                          onChange={handleChange}
                          />

                          <TextField 
                            type="number" 
                            label="Quantité"
                            name='qteStock'
                            value={productData.qteStock}
                            onChange={handleChange}
                          />
                                                
                                            
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
                        <TextField type="file" 
                        label="Produit" style={{width:'100%'}} 
                        name="img"
                        onChange={handleChange}
                        />
                                                
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
                    
                        
                        <TextField  
                        type='text' 
                        id="standard-basic" 
                        label="Description" 
                        variant="standard"
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                        style={{width:'100%'}} 
                         />
                                                
                   
                                            
                  </Box>                    
              </div>
            
            <DialogActions>
            <Button  type='submit'  id="form-btn-box">
                Ajouter
            </Button>
            <Button autoFocus onClick={handleClose} style={{border:'2px solid #fe5300', backgroundColor:'#fff', color:'#fe5300'}}>
                Annuler
            </Button>
            </DialogActions>
            </form>
            </DialogContent>
        </Dialog>
        <ToastContainer />
    </div>
    {/* ************************************ Modal ajout debut   ******************************************* */}


    {/* ************************************ Modal modifier debut   ******************************************* */}
    <div>
    <Dialog
        onClose={handleCloseModif}
        aria-labelledby="customized-dialog-title"
        open={openModif}>
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
            <form onSubmit={(e) => {
                if (editProductData.id !== null && editProductData.id !== undefined) {
                  modifierProduct(e, editProductData.id);
                } else {
                  console.error("L'ID de l'utilisateur est manquant.");
                }
              }}>
            <div className="flex-content-ban-product">
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { sm: '1fr 1fr' },
                  gap: 2,
                }}
                id="box-content-form"
              >
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    type="text"
                    label="Titre"
                    value={editProductData.nom}
                    onChange={(e) => setEditProductData({ ...editProductData, nom: e.target.value })}
                  />
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={editProductData.categorie_id}
                      onChange={(e) => setEditProductData({ ...editProductData, categorie_id: e.target.value })}
                      label="Categorie"
                    >
                    {categories.map((category: CategoryData) => (
                      <MenuItem  key={category.id} value={category.id ?? ''}>
                      {category.nom}
                      </MenuItem>
                      ))}
                    </Select>
                </FormControl>
                </ThemeProvider>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { sm: '1fr 1fr' },
                  gap: 2,
                }}
                id="box-content-form"
              >
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    type="number"
                    label="Prix"
                    value={editProductData.prix}
                    onChange={(e) => setEditProductData({ ...editProductData, prix: e.target.value })}
                  />
                  <TextField
                    type="number"
                    label="Quantité"
                    value={editProductData.qteStock}
                    onChange={(e) => setEditProductData({ ...editProductData, qteStock: e.target.value })}
                  />
                </ThemeProvider>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { sm: '1fr' },
                  gap: 2,
                }}
                id="box-content-form"
              >
                
                <div>
                  <label htmlFor="inputimage">Image</label>
                    <div>
                      {editProductData.previewUrl ? (
                        <img src={editProductData.previewUrl} alt="Preview" width={200} height={100} />
                      ) : typeof editProductData.img === 'string' ? (
                        <img
                          src={`http://localhost:8000/storage/${editProductData.img}`}
                          alt="Current"
                          width={200}
                          height={100}
                        />
                      ) : (
                        <p>Aucune image sélectionnée.</p>
                      )}
                    </div>
                    <input
                      type="file"
                       id="inputimage"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleFileChangeFour(e.target.files[0]);
                          }
                        }}
                      />
                </div>
              </Box>
            </div>
            <DialogActions>
            <Button autoFocus type='submit' id="form-btn-box">
              Modifier
            </Button>
            <Button
              autoFocus
              onClick={handleCloseModif}
              style={{ border: '2px solid #fe5300', backgroundColor: '#fff', color: '#fe5300' }}
            >
              Annuler
            </Button>
          </DialogActions>
            </form>

          </DialogContent>
         
    </Dialog>

    </div>
    {/* ************************************ Modal modifier debut   ******************************************* */}

    </div>
  )
}
