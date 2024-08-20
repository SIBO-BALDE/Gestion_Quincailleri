import React from 'react'
import './footer.css'
import { Button, Image } from 'react-bootstrap'
import  Imageappropo  from '../../images/appropos.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellConcierge, faBurger, faCheck, faCopyright, faFaceSmile, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'

import omar from '../../images/temoin_omar.jpeg'

export default function Footer() {
  return (
    <div>
         {/* ************************************ footer debut   ******************************************* */}
         <section className='section-footer-main-pricipal'>
            <div className='section-footer-main'>
              <div className='content-footer-cards ' id='content-footer-cards'> <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723499427/AR-RAHMANE_eiu77r.png'   style={{width: '220px', height: '120px'}} alt=""  />
               <h6>Votre partenaire de réference</h6>
              </div>
              <div className='content-footer-cards'>
                <h5 className='mb-4'>A propos</h5>
                <p><a href="/" style={{color:'white',textDecoration:'none'}}>Qui sommes nous ?</a></p>
                <p><a href="/" style={{color:'white',textDecoration:'none'}}>Temoignages</a></p>
                
              </div>
              <div className='content-footer-cards'> 
               <h5 className='mb-4'>Contacts</h5>
                <p>77 418 85 18</p>
                <p>arrahmane@gmail.com</p>
                
              </div>
              <div className='content-footer-cards'>
                <h5 className='mb-4'>Produits</h5>
                <p><a href="/menuiserie" style={{color:'white',textDecoration:'none'}}>Menuiserie</a></p>
                <p><a href="/plomberie" style={{color:'white',textDecoration:'none'}}>Plomberie</a></p>
                
                
              </div>
              
            </div>
            <div className='d-flex justify-content-center m-3 text-white ' >
               <hr className='w-50 ' />
            </div>
            <div className='d-flex justify-content-center text-white ' id='content-footer-copyright'>
              <p className=''><FontAwesomeIcon icon={faCopyright} /> 2024 Copyright ar-rahmane tout droit reservé</p>
            </div>
          </section>
          {/* ************************************ footer Fin   ******************************************* */}
          
    </div>
  )
}
