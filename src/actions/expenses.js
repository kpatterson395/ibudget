export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
})


export const editExpense = (expense, id) => ({
	type: 'EDIT_EXPENSE',
	expense,
	id
})
