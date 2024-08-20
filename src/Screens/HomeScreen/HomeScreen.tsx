  import React from 'react'
  import NavbarUser from '../../Components/Users/NavbarUser/NavbarUser'
  import './HomeScreen.css'
  import { Button, Image } from 'react-bootstrap'
  import  Imageappropo  from '../../images/appropos.png'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBellConcierge, faBurger, faCheck, faCopyright, faFaceSmile, faMoneyCheckDollar, faPhone } from '@fortawesome/free-solid-svg-icons'
  // import RetroGrid from "@/components/magicui/retro-grid";
  import RetroGrid from "../../@/components/magicui/retro-grid";
  import Marquee from "../../@/components/magicui/marquee";
  import { cn } from '../../@/lib/utils'
  import omar from '../../images/temoin_omar.jpeg'
  import ban from '../../images/ban-arrahmane-sans-contenu.png'
  import Footer from '../../Components/Users/Footer/Footer'

  //************************** */ pour la section partnaire debut ****************************//
  const reviews = [
    {
      name: "Ndeye Amy",
      username: "@ndeye",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Mereme Dia",
      username: "@dia",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://res.cloudinary.com/dtquwiu3x/image/upload/v1723494818/temoin_dia_j68rdk.jpg",
    },
    {
      name: "El hadji malick",
      username: "@malick",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://res.cloudinary.com/dtquwiu3x/image/upload/v1723494812/temoin_seck_kudpbh.jpg",
    },
    {
      name: "Omar diombaty",
      username: "@diombaty",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://res.cloudinary.com/dtquwiu3x/image/upload/v1723494815/temoin_omar_xrqrda.jpg",
    },
    {
      name: "Maguette",
      username: "@maguette",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "Issa Diop",
      username: "@diop",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];
   
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
   
  const ReviewCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };
  //************************** */ pour la section partnaire fin ****************************//

  




  export default function HomeScreen() {

    return (
    
      <div >
        <header>
        {/* ************************************ Navbar section Debut   ******************************************* */}
        <NavbarUser />
        {/* ************************************ Navbar section Fin   ******************************************* */}

        {/* ************************************ Banniere Debut   ******************************************* */}
        <div className=" contentent-ban-pc" style={{marginTop:'120px'}} >
          <div className="ban-images-home" style={{width:'100%', height:'480px'}}>
            <Image src={ban} style={{width:'100%',height:'100%'}} />
          </div>
          <div className='content-ban-seconde-content-absolutemain '>
            <h2 className='text-white '>AR-RAHMANE QUINCAILLERIE</h2>
            <h2 style={{color:'#fe5300'}} className='mt-4'>VOTRE QUINCAILLERIE EN LIGNE </h2>
            <div className='content-underline-ban'>
              <div className='content-underline-ban-line'></div>
              <div className='content-underline-ban-line' id='content-underline-ban-line'></div>
              <div className='content-underline-ban-line' id='content-underline-ban-line'></div>
            </div>
            <div>
              <h5 className='text-white leading-10'>Trouvez tout les outils que vous avez <br /> besoin chez ar-rahmane</h5>
            </div>
            <div className='flex gap-5 content-phone-number-ban-home'>
              <div className='d-flex  justify-content-center align-items-center'>
                <div className='content-icons-ban'><FontAwesomeIcon icon={faPhone}/></div>
                <div>
                  <div className='text-white ms-2'>77 418 85 17</div>
                </div>
              </div>
              <div className='d-flex  justify-content-center align-items-center'>
                <div className='content-icons-ban'><FontAwesomeIcon icon={faPhone}/></div>
                <div>
                  <div className='text-white ms-2'>33 802 27 43</div>
                </div>
              </div>
             

            </div>
          </div>
      
        </div>
        {/*********************************** *  Telephone debut *********************************************/}
        <div className='contentent-ban-telephone'>
          <div className="" style={{marginTop:'120px'}} >
            <div className="ban-images-home" style={{width:'100%', height:'480px'}}>
              <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1722205514/ban-quincaillerie1_nvhuzy.jpg' style={{width:'100%',height:'100%'}} />
            </div>
          
        
          </div>
        </div>
        {/*********************************** *  Telephone fin *********************************************/}
        {/* ************************************ Banniere Fin   ******************************************* */}
        </header>

        <main>
          {/* ************************************ Section1 Debut   ******************************************* */}
         
          {/* tout */}
          <div>
            <section className='tablette-section1'>
              <div className='d-flex justify-content-center ' style={{marginTop:'70px',marginBottom:'70px'}}>
                <div style={{backgroundColor:'#fe5300', width:'80%', height:'150px'}} className='d-flex justify-content-center align-items-center gap-5' id='content-background-section1'>
                  <div className='d-flex  align-items-center gap-2 content-icons-section-tablette' id='content-icons-section-tablette' >
                    <div className='d-flex justify-content-center align-items-center icons-first-content-cheked'>
                      <FontAwesomeIcon icon={faBurger} className='text-white' /></div>
                    <div> <h6 className='text-white'>Produit de qualité</h6></div>
                  </div>
                  <div className='d-flex  align-items-center gap-2 content-icons-section-tablette' id='content-icons-section-tablette'>
                    <div className='d-flex justify-content-center align-items-center icons-first-content-cheked'>
                      <FontAwesomeIcon icon={faMoneyCheckDollar} className='text-white' /></div>
                    <div> <h6 className='text-white'>Meilleur prix</h6></div>
                  </div>
                  <div className='d-flex  align-items-center gap-2 content-icons-section-tablette' id='content-icons-section-tablette'>
                    <div className='d-flex justify-content-center align-items-center icons-first-content-cheked'>
                      <FontAwesomeIcon icon={faBellConcierge} className='text-white' /></div>
                    <div> <h6 className='text-white'>Service impeccable</h6></div>
                  </div>
                  <div className='d-flex  align-items-center gap-2 content-icons-section-tablette' id='content-icons-section-tablette'>
                    <div className='d-flex justify-content-center align-items-center icons-first-content-cheked'>
                      <FontAwesomeIcon icon={faFaceSmile} className='text-white' /></div>
                    <div> <h6 className='text-white'>Satifaction garantie</h6></div>
                  </div>

                </div>
              </div>
            </section>

            {/* Telephoen */}
            <section className='telephone-section1'>
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
          </div>

          {/* ************************************ Section1 Fin   ******************************************* */}


          {/* ************************************ Section2 apropos Debut   ****************************************** */}
          <section>
            <div style={{backgroundColor:'#003e1c',paddingBottom:'30px',paddingTop:'60px',borderRadius:'10px'}}>
              <div >
              <h3 className='text-center' style={{color:'#fe5300'}}>A propos de nous</h3>
              </div>
              <div className=' container content-about-image-and-textsection2'style={{marginTop:'40px'}} >
                <div style={{width:'650px',height:'auto'}} className='content-image-about-home'><Image src={Imageappropo} style={{width:'100%', height:'100%'}} /></div>
                <div className='ms-3'>
                  <p className=' text-white' style={{textAlign:'justify'}}>
                            Bienvenue chez <strong style={{color:'#fe5300'}}>AR-RAHMANE</strong>, votre expert en quincaillerie en ligne. Nous sommes dédiés à offrir une vaste gamme de produits de quincaillerie de haute qualité, adaptés à vos besoins professionnels et personnels.

                              Notre plateforme de gestion innovante facilite l'achat et la gestion de vos produits de quincaillerie. Avec une interface intuitive et des fonctionnalités avancées, nous vous aidons à optimiser vos commandes, gérer vos stocks et suivre vos ventes avec une efficacité inégalée.
                  </p>
                  <p className=' text-white' style={{textAlign:'justify'}}>
                    Chez <strong style={{color:'#fe5300'}}>AR-RAHMANE</strong>, nous croyons en la qualité et en la satisfaction de nos clients. Nous sélectionnons avec soin chaque produit pour garantir que vous receviez uniquement le meilleur. Notre équipe est engagée à fournir un service client exceptionnel et à vous accompagner tout au long de votre expérience d'achat.

                    Merci de choisir AR-RAHMANE pour vos besoins en quincaillerie. Nous sommes impatients de vous aider à trouver les solutions parfaites pour vos projets.
                  </p>
                  <p className=' text-white' style={{textAlign:'justify'}}>
                  Chez <strong style={{color:'#fe5300'}}>AR-RAHMANE</strong>, nous ne nous contentons pas de vendre des produits de quincaillerie ; nous nous efforçons également de créer une expérience d'achat fluide et agréable. Notre plateforme est conçue pour vous offrir une recherche facile, des descriptions détaillées et des recommandations personnalisées, afin que vous trouviez exactement ce dont vous avez besoin. De plus, nous nous engageons à des délais de livraison rapides et à un service après-vente réactif pour garantir que chaque commande soit traitée avec le plus grand soin. Que vous soyez un professionnel du bâtiment ou un bricoleur passionné, AR-RAHMANE est là pour vous offrir des solutions fiables et pratiques pour tous vos projets.
                  </p>
                  <Button style={{width:'100%', marginTop:'30px', backgroundColor:'#fe5300',border:'none'}}>Savoir plus</Button>
                </div>
                
              </div>
            </div>
          </section>
          {/* ************************************ Section2 apropos Fin   ******************************************* */}


          {/* ************************************ Section3 Produits  Debut   ******************************************* */}
          <section className='section-principal-section3-content'>
            <h3 className='text-center mb-5'>Quelqu'un de nos produits</h3>
            <div className='content-section3-main pb-5'>
              <div className='content-section3-main-one '>
                <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723662979/you-will-never-leave-me-dark-anymore_pei2cy.jpg'style={{width:'100%',height:'100%'}} />
                <h6 className='text-center mt-3'>Prise electrique </h6>
              </div>
              <div className='content-section3-main-one'>
                <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723062363/chaise-anglais_teo2wl.png'style={{width:'100%',height:'100%'}} />
                <h6 className='text-center mt-3'>Chaise anglaise</h6>
              </div>
              <div className='content-section3-main-one'>
                <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723062363/file-produit_ipopc4.png' style={{width:'100%',height:'100%'}} />
                <h6 className='text-center  mt-3'>Filet electronique</h6>
              </div>
              <div className='content-section3-main-one'>
                <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723062375/broullette_avnnvr.png' style={{width:'100%',height:'100%'}} />
                <h6 className='text-center mt-3 '>Filet electronique</h6>
              </div>
              <div className='content-section3-main-one'>
                <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723062386/zing_kea99q.png' style={{width:'100%',height:'100%'}}/>
                <h6 className='text-center  mt-3'>Zinc</h6>
              </div>
              <div className='content-section3-main-one'>
                <Image src='https://res.cloudinary.com/dtquwiu3x/image/upload/v1723062383/fer-produit_zmzfcz.png' style={{width:'100%',height:'100%'}}/>
                <h6 className='text-center mt-3'>Fer</h6>
              </div>

            </div>

          </section>
          {/* ************************************ Section3 Fin   ******************************************* */}


          {/* ************************************ Section4 Catégorie Debut   ******************************************* */}
          <section className='section-principal mt-5' id='section-principal'>
          <h3 className='text-center mb-4' style={{color:'#fe5300',fontWeight:'bolder'}}>Nos catégories de produit</h3>
            <div className='content-main-bacground-section3-seconde-maincontent'>
           
              <div className='content-main-bacground-section3-seconde container'>
                <div style={{backgroundColor:'black'}}><div className='content-main-bacground-section3-one'><div className='line-content-section4'><h1>Plomberie</h1></div></div></div>
                <div style={{backgroundColor:'black'}}><div className='content-main-bacground-section3-two'><div className='line-content-section4'><h1>Construction</h1></div></div></div>
                <div style={{backgroundColor:'black'}}><div className='content-main-bacground-section3-three'><div className='line-content-section4'><h1>Electricité</h1></div></div></div>
                <div style={{backgroundColor:'black'}}><div className='content-main-bacground-section3-three'><div className='line-content-section4'><h1>Ménuiserie</h1></div></div></div>
              </div>
            </div>
              
            
          </section>
          {/* ************************************ Sectio4 Catégorie  Fin   ******************************************* */}


          {/* ************************************ Sectio5 Fin   ******************************************* */}
          
          <section className=''>
          
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  border bg-background md:shadow-xl" >
            <h3 className='text-center mb-5 mt-5 text-black'>Ce  qu'ils disent de nous</h3>
                <Marquee pauseOnHover className="[--duration:20s]">
                  {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                  {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
          </section>
          {/* ************************************ Sectio5 Fin   ******************************************* */}


          {/* ************************************ footer debut   ******************************************* */}
         <Footer />
          {/* ************************************ footer Fin   ******************************************* */}
          
        </main>


        
        
        
      </div>
    )
  }
