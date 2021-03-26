import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';



const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});


function BasicTable({panier,setPanier}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Produit</TableCell>
            <TableCell >Prix</TableCell>
            <TableCell >Quantité</TableCell>
            <TableCell >Total</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {panier.map((el) => (
            <TableRow key={el.id}>
              <TableCell >{el.id}</TableCell>
              <TableCell component="th" scope="row">
                {el.name}
              </TableCell>
              <TableCell >{el.price}</TableCell>
              <TableCell >{el.quantity}</TableCell>
              <TableCell >{el.quantity * el.price }</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


  
export default function SimpleDialog(props) {
    const { handleClose, open,panier,setPanier } = props;
  

    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <BasicTable panier={panier} setPanier={setPanier} />
      </Dialog>
    );
  }