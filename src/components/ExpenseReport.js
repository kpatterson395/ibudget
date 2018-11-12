import React from 'react';
import ReactDOM from 'react-dom';



export default class ExpenseReport extends React.Component{
	constructor(props){
		super(props)
	}

	render(){

		return (
			
				<p className={this.props.expenses.transaction}> <span className="expenseDesc"> {this.props.expenses.description} </span> <span className="expenseAmt"> {this.props.expenses.amount} </span></p>

			
		)
	}
}


