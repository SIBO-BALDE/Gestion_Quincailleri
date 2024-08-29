import { Container, Grid, Paper } from "@mui/material";
import GestionCategory from "../../../Screens/GestionContent/GestionCategory";
import GestionProduct from "../../../Screens/GestionContent/GestionProduct";
import GestionVendeur from "../../../Screens/GestionContent/GestionVendeur";
import { Copyright } from "@mui/icons-material";
import GestionDette from "../../../Screens/GestionContent/GestionDette";
import GestionVente from "../../../Screens/GestionContent/GestionVente";
import ContentRelatifVendeur from "../ContentRelatifVendeur/ContentRelatifVendeur";
import GestionDetteVendeur from "../../../Screens/ContentVendeur/GestionDetteVendeur";
import GestionVenteVendeur from "../../../Screens/ContentVendeur/GestionVenteVendeur";




// RenderComponent
const RenderComponent = ({ selectedComponent }: { selectedComponent: string }) => {
    switch (selectedComponent) {
      case 'DashboardVendeur':
        return < ContentRelatifVendeur/>;
      case 'GestionDettesVendeur':
        return <GestionDetteVendeur />;
      case 'GestionVentesVendeur':
        return <GestionVenteVendeur />;
      default:
        return <GestionVenteVendeur />;
    }
  };
  export default  RenderComponent;
  