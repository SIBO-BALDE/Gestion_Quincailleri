import Footer from '../../Components/Users/Footer/Footer'
import NavbarUser from '../../Components/Users/NavbarUser/NavbarUser'
import React from 'react'
import './ProductScreen.css'
import { Link } from 'react-router-dom'
import { FormControl, Image } from 'react-bootstrap'
import UserSidebar from '../../Components/Users/UserSidebar/UserSidebar'
import Batiment from '../CategorieScreen/Batiment/Batiment'
import Card from '@mui/material/Card';



export default function ProductScreen() {
  return (
    <div>
         {/* ************************************ header Debut   ******************************************* */}
        <header>
            <div>
                <NavbarUser/>
                <div>
                    
                        <div className='content-backgoround-main-product-ban-one'>
                          <div className='content-backgoround-main-product-ban'>
                           
                           </div>
                           <div className='content-position-relative-ban-product'>
                               <div className='flex-content-ban-product' id='flex-content-ban-product'>
                               
                               <h2 id='title-ban-product-relative-position'>Nos differents produits selon les catégories</h2>
                              
                               </div>
                           </div>
                        </div>
                   
                </div>
            </div>

        </header>
         {/* ************************************ header Fin   ******************************************* */}

          {/* ************************************ main Debut   ******************************************* */}
        <main>
            {/* ************************************ produits Debut   ***************************************** */}
            <section>
              <div className='contenu-large-ecran'>
                <Card variant="outlined" className='content-production-categories-main container' style={{backgroundColor:'#E9FBF0'}}>
                        <div style={{height:'auto'}}>
                            <UserSidebar/>
                        </div>
                        <div>
                            <Batiment/>
                        </div>
                </Card>

              </div>
              <div className='contenu-moyenne-ecran' id='contenu-moyenne-ecran'>
                <Card variant="outlined" className=' container' id='content-production-categories-main-seconde' style={{backgroundColor:'#E9FBF0'}}>
                        <div style={{height:'auto'}} id='content-first-moyen-contenu'>
                            <UserSidebar/>
                        </div>
                        <div id='content-first-moyen-contenu-deux'>
                            <Batiment/>
                        </div>
                </Card>

              </div>
               
            </section>
            {/* ************************************ produits Fin   ******************************************* */}
         
        </main>
         {/* ************************************ main Fin   ******************************************* */}

          {/* ************************************ footer Debut   *************************************** */}
        <footer>
            <Footer/>

        </footer>
         {/* ************************************ footer Fin   ******************************************* */}
    </div>
  )
}
