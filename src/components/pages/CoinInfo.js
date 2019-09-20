import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  bold: {
    //   backgroundColor: 'red',
      fontSize: '20px',
      fontWeight: 'bold'
  },
  header: {
    fontStyle: 'inherit',
    marginLeft: '35%',
    marginTop: '30px',
    marginBottom: '50px'
  }
}));


const CoinInfo = (props) => {
  const classes = useStyles();

  console.log("test", props.location.aboutCoinProps)
  let aboutCoin = props.location.aboutCoinProps;

  return (
      <div>
      <h2 className={classes.header}>Coin Statistics/More information</h2>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold}>{aboutCoin.coin.name}</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
            <TableRow key={aboutCoin.coin.id}>         
              <TableCell align="left">{aboutCoin.coin.id}*</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}1</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}*</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}1</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}*</TableCell>
            </TableRow>
            <TableRow key={aboutCoin.coin.id}>  
            <TableCell align="left">{aboutCoin.coin.id}*</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}1</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}*</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}1</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}*</TableCell>
             </TableRow> 
             <TableRow key={aboutCoin.coin.id}>  
            <TableCell align="left">{aboutCoin.coin.id}*</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}1</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}*</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}1</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}*</TableCell>
             </TableRow> 
             <TableRow key={aboutCoin.coin.id}>  
            <TableCell align="left">{aboutCoin.coin.id}*</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}1</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}*</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}1</TableCell>
              <TableCell align="left">{aboutCoin.coin.id}*</TableCell>
             </TableRow> 
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

export default CoinInfo;