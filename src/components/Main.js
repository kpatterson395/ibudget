import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseDetails from './ExpenseDetails';
import ExpenseForm from './ExpenseForm';
import ExpenseEdit from './ExpenseEdit';
import { withRouter } from 'react-router';





class Main extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			expenses : [
				{
					description: 'Rent',
					amount: '4500',
					date: '01/01/2018'
				}
			]
		}
	}

	render(){
		return (
			<Switch>
				<Route exact path='/' render={()=><ExpenseList expenses={this.state}/>} />
				<Route exact path='/expense/:id' component={ExpenseDetails} />
				<Route exact path='/expenseform' component={ExpenseForm} />
				<Route exact path='/edit/:id' component={ExpenseEdit} />
			</Switch>
		)
	}

};


export default withRouter(Main);


