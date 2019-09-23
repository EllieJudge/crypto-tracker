import React from 'react';
import {Star, StarBorder} from '@material-ui/icons';

//TO ACCESS A PIECE OF STATE
import { useSelector } from 'react-redux';

//TO IMPORT OUR ACTIONS
import { addFavourite, removeFavourite } from './actions';

//TO DEPORT (USE) OUR ACTIONS
import { useDispatch } from 'react-redux';

//MY EXPERIMENT FUNCTION 
export default function StarRating (props){
		const { coin } = props;
		//SAVE DISPATCH IN A VARIABLE
		const dispatch = useDispatch();
		//STORE BITS OF STATE IN VARIABLE?
		const favState = useSelector(state => {
			return state.favourite
		})
		
		if (favState.some(r => r && (r.id === coin.id))) { // r is row
			return <Star color="primary" onClick={() => dispatch(removeFavourite(coin))} />
		} else {
			return <StarBorder color="primary" onClick={() => dispatch(addFavourite(coin))} />;
	}
}


