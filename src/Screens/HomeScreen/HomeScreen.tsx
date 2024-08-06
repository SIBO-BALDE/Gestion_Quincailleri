  import React from 'react'
  import NavbarUser from '../../Components/Users/NavbarUser/NavbarUser'
  import './HomeScreen.css'
  import { Image } from 'react-bootstrap'
  import  Imageappropo  from '../../images/appropos.png'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBellConcierge, faBurger, faCheck, faFaceSmile, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'


  export default function HomeScreen() {

    return (
    
      <div >
        <header>
        {/* ************************************ Navbar section Debut   ******************************************* */}
        <NavbarUser />
        {/* ************************************ Navbar section Fin   ******************************************* */}

        {/* ************************************ Banniere Debut   ******************************************* */}
        <div className="" style={{marginTop:'120px'}} >
          <div className="" style={{width:'100%', height:'480px'}}>
            <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1722802268/banniere-arrahmane-accueile_ma335d.png' style={{width:'100%',height:'100%'}} />
          </div>
      
        </div>
        {/* ************************************ Banniere Fin   ******************************************* */}
        </header>

        <main>
          {/* ************************************ Section1 Debut   ******************************************* */}
          <section>
            <div className='d-flex justify-content-center' style={{marginTop:'70px',marginBottom:'70px'}}>
              <div style={{backgroundColor:'#fe5300', width:'80%', height:'150px'}} className='d-flex justify-content-center align-items-center gap-5'>
                <div className='d-flex  align-items-center gap-2'>
                  <div className='d-flex justify-content-center align-items-center icons-first-content-cheked'>
                    <FontAwesomeIcon icon={faBurger} className='text-white' /></div>
                  <div> <h6 className='text-white'>Produit de qualité</h6></div>
                </div>
                <div className='d-flex  align-items-center gap-2'>
                  <div className='d-flex justify-content-center align-items-center icons-first-content-cheked'>
                    <FontAwesomeIcon icon={faMoneyCheckDollar} className='text-white' /></div>
                  <div> <h6 className='text-white'>Meilleur prix</h6></div>
                </div>
                <div className='d-flex  align-items-center gap-2'>
                  <div className='d-flex justify-content-center align-items-center icons-first-content-cheked'>
                    <FontAwesomeIcon icon={faBellConcierge} className='text-white' /></div>
                  <div> <h6 className='text-white'>Service impeccable</h6></div>
                </div>
                <div className='d-flex  align-items-center gap-2'>
                  <div className='d-flex justify-content-center align-items-center icons-first-content-cheked'>
                    <FontAwesomeIcon icon={faFaceSmile} className='text-white' /></div>
                  <div> <h6 className='text-white'>Satifaction garantie</h6></div>
                </div>

              </div>
            </div>
          </section>

          {/* ************************************ Section1 Fin   ******************************************* */}


          {/* ************************************ Section2 Debut   ****************************************** */}
          <section>
            <div style={{backgroundColor:'#003e1c',paddingBottom:'30px',paddingTop:'60px'}}>
              <div >
              <h3 className='text-center' style={{color:'#fe5300'}}>A propos de nous</h3>
              </div>
              <div className=' container content-about-image-and-textsection2'style={{marginTop:'40px'}} >
                <div style={{width:'650px',height:'auto'}}><Image src={Imageappropo} style={{width:'100%', height:'100%'}} /></div>
                <div className='ms-3'>
                  <p className='text-align-justify text-white'>
                            Bienvenue chez AR-RAHMANE, votre expert en quincaillerie en ligne. Nous sommes dédiés à offrir une vaste gamme de produits de quincaillerie de haute qualité, adaptés à vos besoins professionnels et personnels.

                              Notre plateforme de gestion innovante facilite l'achat et la gestion de vos produits de quincaillerie. Avec une interface intuitive et des fonctionnalités avancées, nous vous aidons à optimiser vos commandes, gérer vos stocks et suivre vos ventes avec une efficacité inégalée.

                              Chez AR-RAHMANE, nous croyons en la qualité et en la satisfaction de nos clients. Nous sélectionnons avec soin chaque produit pour garantir que vous receviez uniquement le meilleur. Notre équipe est engagée à fournir un service client exceptionnel et à vous accompagner tout au long de votre expérience d'achat.

                              Merci de choisir AR-RAHMANE pour vos besoins en quincaillerie. Nous sommes impatients de vous aider à trouver les solutions parfaites pour vos projets.
                  </p>
                  <p className='text-align-justify text-white'>
                  Chez AR-RAHMANE, nous ne nous contentons pas de vendre des produits de quincaillerie ; nous nous efforçons également de créer une expérience d'achat fluide et agréable. Notre plateforme est conçue pour vous offrir une recherche facile, des descriptions détaillées et des recommandations personnalisées, afin que vous trouviez exactement ce dont vous avez besoin. De plus, nous nous engageons à des délais de livraison rapides et à un service après-vente réactif pour garantir que chaque commande soit traitée avec le plus grand soin. Que vous soyez un professionnel du bâtiment ou un bricoleur passionné, AR-RAHMANE est là pour vous offrir des solutions fiables et pratiques pour tous vos projets.
                  </p>
                </div>
                
              </div>
            </div>
          </section>
          {/* ************************************ Section2 Fin   ******************************************* */}
          
        </main>


        
        
        
      </div>
    )
  }
