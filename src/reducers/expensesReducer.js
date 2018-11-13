
const expenses = (state = [], action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
		return (
				[ ...state,
				  action.expense
				]
			)
		case 'EDIT_EXPENSE':
		return (
			[...state.slice(0, action.id),
				action.expense,
			...state.slice(action.id+1)
			]
			)
	}
	return state
};

export default expenses


