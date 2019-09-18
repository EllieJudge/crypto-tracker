import React from 'react';
// import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import StarRating from '../StarRating'
import Star from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
//TO ACCESS A PIECE OF STATE
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
      width: '70%',
      margin: '15%',
      marginTop: theme.spacing(3),
      overflowX: 'auto'
    },
    table: {
      minWidth: 650,
    },
    noFavsTxt: {
        fontSize: '25px',
        textAlign: 'center',
        marginTop: '150px' 
    },
    favTxt: {
        fontSize: '35px',
        textAlign: 'center',
        marginTop: '50px',
        marginLeft: '20px',
        marginRight: '20px',
    }

  }));

const Favourites = () => {
    const favState = useSelector(state => {
        return state.favourite
    })

const classes = useStyles();

    if(favState.length > 0) {      
        return (
            <div>
                <div className={classes.header}>
                   <div className={classes.favTxt}>Your Favourites:</div> 
                </div>
                  
                            
                {console.log('list of favs:', favState)}      
                    <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                        <TableRow>
                            <TableCell>Bitcoins (Top 100 from Coin Gecko)! <ArrowDownwardIcon fontSize="small" /></TableCell> 
                            <TableCell align="right">Symbol</TableCell>
                            <TableCell align="right">Price in gbp&nbsp;(£)</TableCell>
                            <TableCell align="right">Price in eur&nbsp;(€)</TableCell>
                            <TableCell align="right">Sym&nbsp;(g)</TableCell>
                            <TableCell align="right">Market Cap&nbsp;(£)</TableCell>
                            <TableCell align="right">Star&nbsp;(☆)</TableCell>
                        </TableRow>
                        </TableHead>
                    <TableBody>
                        {favState.map(coin => ( //map coin info into cells! woohoo!
                            <TableRow key={coin.id} >
                            <TableCell component="th" scope="row">{coin.name}</TableCell>
                            <TableCell align="right"><img src={coin.image.thumb} alt={coin.image.small}></img></TableCell>
                            <TableCell align="right">£{coin.market_data.current_price.gbp}</TableCell>
                            <TableCell align="right">€{coin.market_data.current_price.eur}</TableCell>
                            <TableCell align="right">{coin.symbol}</TableCell>
                            <TableCell align="right">£{coin.market_data.market_cap.gbp}</TableCell>
                            <TableCell align="right"><StarRating coin={coin} key={coin.id}/></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                        </Table>
                    </Paper>
                </div>
        )
    }
    else {
        return  (
        <div className={classes.noFavsTxt}>
                <p>You have no favourites yet... Star a bitcoin to add it to your list!</p> 
                <br />
            <div >
                <br />
                <Star color="primary"/>
            </div>
        
        </div>
        )  
    } 
}

export default Favourites;
