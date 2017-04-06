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

	if (action.type === 'REMOVE_PIC_FACTS') {
		let sub2 = []

		for (let i = 0; i < state.picCombo.length; i++) {
			if (action.data[1] != state.picCombo[i][1]) {
				sub2.push(state.picCombo[i]);
			}
		}

		return {...state, picCombo: sub2}
	}

	if (action.type === 'ADD_PIC') {
		let newCombo = [];

		for (let i = 0; i < state.picCombo.length; i++) {
			newCombo.push(state.picCombo[i]);
		}

		let text = {url: action.data[0]}
		let fact = action.data[1];
		newCombo.unshift([text, fact]);
		return {...state, picCombo: newCombo}
	}

	if (action.type === 'SORT_FACTS') {
		let sortedFacts = [];

		for (let i = 0; i < state.picCombo.length; i++) {
			sortedFacts.push(state.picCombo[i]);
		}

		sortedFacts.sort(function(a, b) {
			return a[1].length - b[1].length;
		});

		return {...state, picCombo: sortedFacts}
	}

	return state;
}

exports.reducer = reducer;


