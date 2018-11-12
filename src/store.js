import {createStore, compose} from 'redux';
import expensesReducer from './reducers/expensesReducer';



	const store = createStore(expensesReducer, 
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);


export default store;