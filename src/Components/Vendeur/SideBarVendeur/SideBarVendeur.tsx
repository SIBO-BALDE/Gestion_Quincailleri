
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

export default function SideBarVendeur({ onSelectComponent, activeLinkComponent }: SidebarProps) {
    // const [activeLinkComponent, setActiveLinkComponent] = React.useState('DashboardVendeur');
  return (
    <div className='text-white' >
      <ListItemButton onClick={() => onSelectComponent('DashboardVendeur')}
      sx={{ backgroundColor: activeLinkComponent === 'DashboardVendeur' ? '#74cd9cc7' : 'inherit' }} 
        >
        <ListItemIcon className='text-white'>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard Vendeur" />
      </ListItemButton>
      <ListItemButton onClick={() => onSelectComponent('GestionVentesVendeur')}
      sx={{ backgroundColor: activeLinkComponent === 'GestionVentesVendeur' ? '#74cd9cc7' : 'inherit' }} 
        >
        <ListItemIcon className='text-white'>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Gestion-Ventes" />
      </ListItemButton>
     
      <ListItemButton onClick={() => onSelectComponent('GestionDettesVendeur')}
      sx={{ backgroundColor: activeLinkComponent === 'GestionDettesVendeur' ? '#74cd9cc7' : 'inherit' }} 
        >
        <ListItemIcon className='text-white'>
        <FontAwesomeIcon icon={faHandHoldingDollar} style={{fontSize:'25px'}} />
        </ListItemIcon>
        <ListItemText primary="Gestion Dettes" />
      </ListItemButton>
    </div>
  );
}


