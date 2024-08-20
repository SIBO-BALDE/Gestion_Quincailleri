import React from 'react'
import { Link } from 'react-router-dom'
import './UserSidebar.css'
import Card from '@mui/material/Card';

export default function UserSidebar() {
  return (
    <div>
      <Card variant="outlined" id='card-content-sidebar-all' >
        <div className='content-link-content-userbar'>
        <div>
        <Link to={''}  id='content-link-content-userbar-link'>Menuiserie</Link>
        </div>
        <div>
        <Link to={''} id='content-link-content-userbar-link'>Plombrie</Link>
        </div>
        <div>
        <Link to={''} id='content-link-content-userbar-link'>Electricité</Link>
        </div>
        <div>
        <Link to={''} id='content-link-content-userbar-link' >Batiment</Link>
        </div>
        </div>
      </Card>
    </div>
  )
}
