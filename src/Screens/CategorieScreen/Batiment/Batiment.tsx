import { Button } from '@mui/material'
import React from 'react'
import { FormControl, Image } from 'react-bootstrap'
import '../../CategorieScreen/CategorieScreen.css'
import image1 from '../../../images/temoin_seck.jpeg'
import PaginationScreen from '../../../Components/Users/Pagination/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import Card from '@mui/material/Card';

export default function Batiment() {
  return (
    <div className='w-100'>
      <div className='content-boutton-and-input-main'>
        <div >
        <FormControl placeholder='chercher un produit'/>
        </div>
        <div><Button className='content-boutton-and-input-main-btn' id='content-boutton-and-input-main-btn'>Rechercher</Button></div>
      </div>
      <div className='mt-4 card-content-main-content-priicipal'>
        <div>
        <Card variant="outlined" className='card-content-main'>
          <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723743386/fer_d7edva.png' style={{width:'80%',height:'80%'}} />
        </Card>
        <Card variant="outlined"  id='prix-content-product-main'>
          <div style={{paddingTop:'9px'}}><h6><FontAwesomeIcon  icon={faTag} style={{marginRight:'5px'}}/>2500FCFA</h6></div>
          <div><Button id='content-boutton-and-input-main-btn-product'style={{paddingTop:'10px'}} >Acheter</Button></div>
        </Card>
        </div>
        <div>
        <Card variant="outlined"    className='card-content-main'>
          <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723743486/poign%C3%A9-porte_cxpa4b.png' style={{width:'80%',height:'80%'}} />
        </Card>
        <Card variant="outlined"  id='prix-content-product-main'>
          <div style={{paddingTop:'9px'}}><h6><FontAwesomeIcon  icon={faTag} style={{marginRight:'5px'}}/>2500FCFA</h6></div>
          <div><Button id='content-boutton-and-input-main-btn-product'style={{paddingTop:'10px'}} >Acheter</Button></div>
        </Card>

        </div>
        <div>
        <Card variant="outlined"  className='card-content-main'>
          <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723743864/prise1_lawg7g.png' style={{width:'80%',height:'80%'}} />
        </Card>
        <Card variant="outlined"  id='prix-content-product-main'>
          <div style={{paddingTop:'9px'}}><h6><FontAwesomeIcon  icon={faTag} style={{marginRight:'5px'}}/>2500FCFA</h6></div>
          <div><Button id='content-boutton-and-input-main-btn-product'style={{paddingTop:'10px'}} >Acheter</Button></div>
        </Card>

        </div>
        <div>
        <Card variant="outlined"  className='card-content-main'>
          <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723743917/robinet_dtemqx.png' style={{width:'80%',height:'80%'}} />
        </Card>
        <Card variant="outlined"  id='prix-content-product-main'>
          <div style={{paddingTop:'9px'}}><h6><FontAwesomeIcon  icon={faTag} style={{marginRight:'5px'}}/>2500FCFA</h6></div>
          <div><Button id='content-boutton-and-input-main-btn-product'style={{paddingTop:'10px'}} >Acheter</Button></div>
        </Card>

        </div>
        <div>
        <Card variant="outlined"  className='card-content-main'>
          <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723744344/rolonge_oekyrq.png' style={{width:'80%',height:'80%'}} />
        </Card>
        <Card variant="outlined"  id='prix-content-product-main'>
          <div style={{paddingTop:'9px'}}><h6><FontAwesomeIcon  icon={faTag} style={{marginRight:'5px'}}/>2500FCFA</h6></div>
          <div><Button id='content-boutton-and-input-main-btn-product'style={{paddingTop:'10px'}} >Acheter</Button></div>
        </Card>

        </div>
        <div>
        <Card variant="outlined"  className='card-content-main'>
          <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723746371/ciment_ul2fko.png' style={{width:'80%',height:'80%'}} />
        </Card>
        <Card variant="outlined"  id='prix-content-product-main'>
          <div style={{paddingTop:'9px'}}><h6><FontAwesomeIcon  icon={faTag} style={{marginRight:'5px'}}/>2500FCFA</h6></div>
          <div><Button id='content-boutton-and-input-main-btn-product'style={{paddingTop:'10px'}} >Acheter</Button></div>
        </Card>

        </div>
      </div>
      <div style={{display:'flex',justifyContent:'flex-end', marginTop:'30px'}}>
        <PaginationScreen/>
      </div>
    </div>
  )
}
