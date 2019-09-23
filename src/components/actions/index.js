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
export const setSearch = (searchValue) => {
	return {
		type: 'SET_SEARCH',
		payload: searchValue
	}
}

//GET SEARCH
// export const getSearch = (coins) => {
// 	return {
// 		type: 'GET_SEARCH',
// 		payload: coins
// 	}
// }

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

