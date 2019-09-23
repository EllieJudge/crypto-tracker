import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputLabel} from '@material-ui/core';

// //TO ACCESS A PIECE OF STATE
// import { useSelector } from 'react-redux'; //lets you SELECT bits of state

// //TO IMPORT OUR ACTIONS
// import { getCoins } from './actions';
import {setSearch} from './actions';

// //TO DEPORT(use) OUR ACTION
import {useDispatch} from 'react-redux';

// //store bits of state in variable using selector
// const coins = useSelector(state=>state.getCoins); 

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '85%',
    marginTop: 0
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

export default function SearchBar(props) {

  //save useDispatch in variable
  const dispatch = useDispatch();

  const [name, setName] = React.useState('Search');
  const classes = useStyles();

  //SENDING SEARCH INFO TO SEARCH ACTION
  function handleChange(event) {
    setName(event.target.value); 
    console.log('EVENT TARGET VALUE', event.target.value)
    dispatch(setSearch(event.target.value))
  }

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="component-simple"></InputLabel>
        <Input id="component-simple" value={name} onChange={handleChange} />
      </FormControl>
    </div>
  );
}