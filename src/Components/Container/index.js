import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  center : {
    width: "100%",
    display: 'grid',
    placeItems: "center"
  }
}));

export default function SpacingGrid({produits,setPanier,panier}) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div className={classes.center}>
        <Grid style={{width: "80%"}} container xs={12} justify="flex-start"   spacing={spacing}>
          {produits.map((value) => (
            <Card key={value} produit={value} setPanier={setPanier} panier={panier} />
          ))}

      </Grid>
      </div>
  );
}
