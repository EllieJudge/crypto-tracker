
//REDUCER - FOR SAVING TO FAVS
//reducer changes the state !
//state = empty array
const favouriteReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_FAVOURITE':
		  	console.log('adding...', state.concat([action.payload]));  //push payload (coins data) into state (empty array)
			return state.concat([action.payload]); //push payload (coins data) into state (empty array)
		case 'REMOVE_FAVOURITE':
			console.log('removing... LIKE A BOSS', state.filter(coin => coin !== action.payload ))
			return state.filter(coin => coin !== action.payload )				
		default:
			return state;
	}
}

export default favouriteReducer;