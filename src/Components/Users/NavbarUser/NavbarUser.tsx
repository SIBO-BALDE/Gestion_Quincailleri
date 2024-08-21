
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {Container, Image, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import './NavbarUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function NavbarUser() {
  // Etats d'initialisation
  const [linkNav, setLinkNav] =useState('')

  // Fonction
  // useLocation() est utilisé pour obtenir l'emplacement actuel de l'utilisateur.
  //  useEffect() est utilisé pour surveiller les changements d'emplacement. Chaque fois 
  //  que l'utilisateur navigue vers une nouvelle route, le pathname est extrait de location 
  //  et utilisé pour mettre à jour l'état (via ssetLinkNav). Cela pourrait être utilisé, par exemple,
  //   pour mettre en surbrillance un lien actif dans un menu de navigation.
 
  const location =useLocation()
  useEffect(() =>{
    setLinkNav(location.pathname)
  },[location])


   


  return (
    <div>
     
     <div className="container1">
    <div className="Container_Header">
        <div className="first_menu">
        <ul>
          <li>(+221) 77 418 85 18 <span id="mail">arrahmane@gmail.com</span></li>
          <li className="Social_Media d-flex ">
        
        <span className='content-icon-topbar'><FontAwesomeIcon icon={faFacebookF} className='icons-content1' /></span>
        <span className='content-icon-topbar'><FontAwesomeIcon icon={faTwitter} className='icons-content1' /></span>
        <span className='content-icon-topbar'><FontAwesomeIcon icon={faInstagram} className='icons-content1' /></span>
        <span className='content-icon-topbar'><FontAwesomeIcon icon={faLinkedinIn} className='icons-content1' /></span>
       </li>
        </ul>
        </div>
        <Navbar collapseOnSelect expand="lg"  id='navbarcontentmain'>
          <Container fluid>
            <Navbar.Brand href="#"><Link to={'/'}><Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1722176235/AR-RAHMANE-fond-blanc-removebg-preview_n0oqaf.png'   style={{width: '90px', height: '50px'}} alt=""  /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto  my-lg-0 navbarcontent" navbarScroll >
                    <Link to={"/"}  className='navlinkcontenthome' style={{borderBottom: linkNav === '/'? '3px solid #fe5300' : 'none'}}> Accueil</Link>
                    <Link to={"/product"}  className='navlinkcontenthome' style={{marginLeft:'30px', borderBottom: linkNav === '/product' ? '3px solid #fe5300' : 'none'}}>Produits</Link>
                    <Link to={"/contact"}  className='navlinkcontenthome' style={{marginLeft:'30px', borderBottom: linkNav === '/contact' ? '3px solid #fe5300' : 'none'}}>Contacts</Link>
                  </Nav>
                  {/* {token || role==='user' ? <ButtonLogOut handleLogout={handleLogout} /> : <ButtonLogin />} */}
                  <Button  style={{marginRight:'80px', backgroundColor:'#003E1C', border:'none'}} id='button-nabar-contentmain-one-2' >
                  <Link  to={'/login'}  style={{textDecoration:'none', color:'white'}}>Connexion</Link >
                  </Button>
              </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
</div>
     

</div>
  )
}
