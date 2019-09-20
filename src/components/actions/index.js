//ACTIONS GO IN HERE
//literally just say what ya wanna do, the type (can also pass data)


//GET COINS ACTION
export const getCoins = () => {
	return {
		type: 'GET_COINS',
		// payload: 
	}
}

//SEARCH COINS ACTION
export const searchCoinsAction = (value) => {
	return {
		type: 'SET_SEARCH',
		payload: value
	}
}

//FAVOURITES ACTION
export const addFavourite = (coin) => {
	return {
		type: 'ADD_FAVOURITE',
		payload: coin,
	}
}

export const removeFavourite = (coin) => {
	return {
		type: 'REMOVE_FAVOURITE',
		payload: coin,
	}
}

