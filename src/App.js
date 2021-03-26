import React ,{useEffect,useState} from "react";
import NavigationBar from "./Components/NavigationBar";
import Container from "./Components/Container";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleDialog from "./Components/CartModel";




function App (){
  const [open, setOpen] = useState(false);
  const handleClose = (value) => {
    setOpen(false);
  };

  const [produits,setproduits]=useState([])
  const [panier,setPanier]=useState([])


  useEffect(()=>{
    fetch('products.json')
    .then((res)=>res.json())
    .then((data)=>setproduits(data.products))
  },[]);

return (
  <div>
    <NavigationBar panier={panier} setOpen={setOpen} handleClose={handleClose} />
    <Container setPanier={setPanier} panier={panier} produits={produits} />
    <SimpleDialog panier={panier} setPanier={setPanier} open={open} handleClose={handleClose} />
  </div>
)
 
}

export default App;
