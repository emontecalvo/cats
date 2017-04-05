

const initialState = {

}
	
const reducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);

	return state;

}

exports.reducer = reducer;


