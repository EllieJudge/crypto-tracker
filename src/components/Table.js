import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Paper, TableRow, TableHead, TableCell, TableBody, Table } from '@material-ui/core';
import StarRating from './StarRating';
//IMPORT USESELECTOR THING
import {useSelector} from 'react-redux'; 

//IMPORT SEARCH ACTION

//TO DEPORT(use) OUR ACTION
import {useDispatch} from 'react-redux';


//call action to get search term 
dispatch

//if else function 
//if ('GET_SEARCH' > 1) {
//   return (
//   
//   )
// }

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    margin: '15%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  header: {
    marginLeft: '40%',
    marginTop: 0
  }
}));

export default function SimpleTable(props) {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.header}>Top 100 Bitcoins from Coin Gecko!</h3>
     
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell >Bitcoins (Top 100 from Coin Gecko)!</TableCell> 
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Price in gbp&nbsp;(£)</TableCell>
            <TableCell align="right">Price in eur&nbsp;(€)</TableCell>
            <TableCell align="right">Sym&nbsp;(g)</TableCell>
            <TableCell align="right">Market Cap&nbsp;(£)</TableCell>
            <TableCell align="right">Star&nbsp;(☆)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(coin => ( //map coin info into cells! woohoo!
            <TableRow key={coin.id} >
              <TableCell component="th" scope="row">
              <Link to={{ pathname: 'CoinInfo', aboutCoinProps: {
                coin: coin
              }}}>
              {coin.name}
              </Link>
              </TableCell>
              <TableCell align="right"><img src={coin.image.thumb} alt={coin.image.small}></img></TableCell>
              <TableCell align="right">£{coin.market_data.current_price.gbp}</TableCell>
              <TableCell align="right">€{coin.market_data.current_price.eur}</TableCell>
              <TableCell align="right">{coin.symbol}</TableCell>
              <TableCell align="right">£{coin.market_data.market_cap.gbp}</TableCell>
              <TableCell align="right"><StarRating coin={coin} key={coin.id} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

