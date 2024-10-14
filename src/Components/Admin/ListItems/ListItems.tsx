
import * as React from 'react';
import { ListItemIcon, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Category, ProductionQuantityLimits, ProductionQuantityLimitsOutlined } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';


interface SidebarProps {
  onSelectComponent: (component: string) => void;
  activeLinkComponent: string;
}

export default function ListItems({ onSelectComponent , activeLinkComponent}: SidebarProps) {
  return (
    <div className='text-white' >
      <ListItemButton onClick={() => onSelectComponent('Dashboard')}
      sx={{ backgroundColor: activeLinkComponent === 'Dashboard' ? '#74cd9cc7' : 'inherit' }}
        
        >
        <ListItemIcon className='text-white'>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => onSelectComponent('GestionVendeurs')}
      sx={{ backgroundColor: activeLinkComponent === 'GestionVendeurs' ? '#74cd9cc7' : 'inherit' }}
        >
        <ListItemIcon className='text-white'>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Gestion-Vendeurs" />
      </ListItemButton>
      <ListItemButton onClick={() => onSelectComponent('GestionCategorie')}
       sx={{ backgroundColor: activeLinkComponent === 'GestionCategorie' ? '#74cd9cc7' : 'inherit' }}
        
        >
        <ListItemIcon className='text-white'>
          <Category />
        </ListItemIcon>
        <ListItemText primary="Gestion Catégories" />
      </ListItemButton>
      <ListItemButton onClick={() => onSelectComponent('GestionProduits')}
      sx={{ backgroundColor: activeLinkComponent === 'GestionProduits' ? '#74cd9cc7' : 'inherit' }}
        
        >
        <ListItemIcon className='text-white'>
          {/* <ProductionQuantityLimitsOutlined /> */}
          <FontAwesomeIcon icon={faCartShopping} style={{fontSize:'20px'}} />
        </ListItemIcon>
        <ListItemText primary="Gestion Produits" />
      </ListItemButton>
      <ListItemButton onClick={() => onSelectComponent('GestionVentes')}
      sx={{ backgroundColor: activeLinkComponent === 'GestionVentes' ? '#74cd9cc7' : 'inherit' }}
        >
        <ListItemIcon className='text-white'>
          {/* <ProductionQuantityLimitsOutlined /> */}
          <FontAwesomeIcon icon={faShopify} style={{fontSize:'20px'}} />
        </ListItemIcon>
        <ListItemText primary="Gestion Ventes" />
      </ListItemButton>
      <ListItemButton onClick={() => onSelectComponent('GestionDettes')}
      sx={{ backgroundColor: activeLinkComponent === 'GestionDettes' ? '#74cd9cc7' : 'inherit' }}
        >
        <ListItemIcon className='text-white'>
        <FontAwesomeIcon icon={faHandHoldingDollar} style={{fontSize:'25px'}} />
        </ListItemIcon>
        <ListItemText primary="Gestion Dettes" />
      </ListItemButton>
    </div>
  );
}


