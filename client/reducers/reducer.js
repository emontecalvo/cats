import xmlToJson from '../components/xmlToJson';

const initialState = {
	picText: null,
	picFact: null,
	picCombo: [],
	showFacts: false
}
	
const reducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);

	if (action.type === 'UPDATE_TEXT') {
		let textChop = JSON.parse(JSON.stringify(xmlToJson(action.data))).response.data.images.image;
		return {...state, picText: textChop}
	}

	if (action.type === 'UPDATE_FACT') {
		return {...state, picFact: action.data}
	}

	if (action.type === 'MAKE_COMBO') {
		let sub = []

		for (let i = 0; i < state.picText.length; i++) {
			sub.push([state.picText[i], state.picFact[i]]);
		}

		return {...state, picCombo: sub, showFacts: true}
	}
	
	return state;

}

exports.reducer = reducer;


