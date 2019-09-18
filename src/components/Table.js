import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import StarRating from './StarRating';
import TableSortLabel from '@material-ui/core/TableSortLabel';
//TO ACCESS A PIECE OF STATE
// import { useSelector } from 'react-redux';

//TO IMPORT OUR ACTIONS
// import { favourite } from './actions';
// import { orderBitName } from './actions';

//TO DEPORT (USE) OUR ACTIONS
// import { useDispatch } from 'react-redux';

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
}));

export default function SimpleTable(props) {

  //SAVE DISPATCH IN A VARIABLE
  // const dispatch = useDispatch();

  //STORE BITS OF STATE IN VARIABLE?
  // const favState = useSelector(state=>state.favourite)

  // if (favState === true ) {
  //   console.log('favState')
  // }

  const onHeaderClick = () => {
    console.log('header')
  }

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead onClick={onHeaderClick}>
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
              <TableCell component="th" scope="row"><Link to={{ pathname: 'CoinInfo' }}>{coin.name}</Link></TableCell>
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
  );
}

