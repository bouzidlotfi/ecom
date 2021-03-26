import React,{useState} from 'react'
import { Button,Card } from "react-bootstrap";
import choco from "./choco.jpg"



function CardEx({produit,panier,setPanier}) {
  
  
 const addToPanier=(e,newProduct)=>
 {
   e.preventDefault();
   if(panier.includes(newProduct))
    {
      var prevProduct = panier.find(el => el.id == newProduct.id)
      console.log({prevProduct})
      var temp = {...prevProduct, quantity: prevProduct.quantity + 1}
      console.log({temp})
      var tempPanier = panier.filter(el => el.id != temp.id)
      setPanier([...tempPanier,temp])
    }else {
      setPanier([...panier,newProduct])
    }

 }

 
  const {name,id,price} = produit
    return ( 
        <Card style={{ width: '18rem',margin:'30px' }}>
         <Card.Img variant="top" src={choco}/>
         <Card.Body>
           <Card.Title>{name}</Card.Title>
           <div>{price}</div>
           <Card.Text>
             Some quick example text to build on the card title and make up the bulk of
             the card's content.
           </Card.Text>
        <Button onClick={(e) => addToPanier(e,produit)}> Ajouter  </Button>
                
        </Card.Body>
       </Card>
    )
}

export default CardEx
