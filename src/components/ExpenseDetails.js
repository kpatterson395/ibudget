import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class ExpenseDetails extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		let expense = this.props.expenses[this.props.match.params.id]
		let transaction = expense["transaction"]
		transaction = transaction.charAt(0).toUpperCase() + transaction.slice(1)
		return (
			<div className="expenseDetails">
				<h3>{expense["description"]} - {transaction} </h3>
				<h3>Amount: {expense["amount"]}</h3>
				<h3>{expense["date"]}</h3>
				<h3>Additional Notes: {expense["notes"]}</h3>
				<Link className="editButton" to={`/edit/${this.props.match.params.id}`}>Edit Expense</Link>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	expenses: state
})

export default connect(mapStateToProps)(ExpenseDetails)