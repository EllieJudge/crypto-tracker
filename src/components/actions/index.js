//ACTIONS GO IN HERE
//literally just say what you wanna do, the type

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

//ORDER BIT NAME ACTION
export const orderBitName = () => {
	return {
		type: 'ORDER_BIT_NAME'
	}
}