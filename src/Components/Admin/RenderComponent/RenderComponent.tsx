import { Container, Grid, Paper } from "@mui/material";
import GestionCategory from "../../../Screens/GestionContent/GestionCategory";
import GestionProduct from "../../../Screens/GestionContent/GestionProduct";
import GestionVendeur from "../../../Screens/GestionContent/GestionVendeur";
import Deposits from "../Deposit/Deposit";
import { Copyright } from "@mui/icons-material";
import ContentRelatif from "../ContentRelatif/ContentRelatif";
import GestionDette from "../../../Screens/GestionContent/GestionDette";
import GestionVente from "../../../Screens/GestionContent/GestionVente";



// RenderComponent
const RenderComponent = ({ selectedComponent }: { selectedComponent: string }) => {
    switch (selectedComponent) {
      case 'Dashboard':
        return < ContentRelatif/>;
      case 'GestionVendeurs':
        return <GestionVendeur />;
      case 'GestionCategorie':
        return <GestionCategory />;
      case 'GestionProduits':
        return <GestionProduct />;
      case 'GestionDettes':
        return <GestionDette />;
      case 'GestionVentes':
        return <GestionVente />;
      default:
        return <GestionVendeur />;
    }
  };
  export default  RenderComponent;
  