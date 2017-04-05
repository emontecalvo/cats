import xmlToJson from '../components/xmlToJson';

const initialState = {
	picText: null,
	picFact: null,
	picCombo: [],
	showFacts: false,
	comboToEdit: '',
	comboToAdd: '',
	showEdit: false
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

	if (action.type === 'EDIT_PIC_FACTS') {
		let sub3 = []

		for (let i = 0; i < state.picCombo.length; i++) {
			if (action.data[1] != state.picCombo[i][1]) {
				sub3.push(state.picCombo[i]);
			} else {
				sub3.push(action.data);
			}
		}
		
		return {...state, picCombo: sub3, showEdit: false}
	}

	if (action.type === 'EDIT_PIC_START') {
		return {...state, picCombo: state.picCombo, showEdit: true, comboToEdit: action.data}
	}

	return state;

}

exports.reducer = reducer;


