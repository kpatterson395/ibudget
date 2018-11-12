import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import history from '../history';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

class ExpenseForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			expenses: []
		}
		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit = (e) => {
		e.preventDefault()

		if (e.target.elements[0].value === "" || e.target.elements[1].value === ""){
			alert("You must enter a description and amount!")
		} else {
			this.setState({
			description: e.target.elements[0].value,
			amount: e.target.elements[1].value,
			transaction: e.target.elements[2].value,
			date: e.target.elements[3].value,
			notes: e.target.elements[4].value
			})
			this.props.addExpense({
				description: e.target.elements[0].value,
				amount: e.target.elements[1].value,
				transaction: e.target.elements[2].value,
				date: e.target.elements[3].value,
				notes: e.target.elements[4].value
			})
			this.props.history.push('/');			
		}

		
	}

	render(){
		let today = new Date().toISOString().substr(0, 10);
		return (
			<form className="expenseForm" onSubmit={this.onSubmit}>
				<input type="text" placeholder="Description" autoFocus></input>
				<input type="number" placeholder="Amount"></input>
				<select name="transaction">
				  <option value="deposit">Deposit</option>
				  <option value="withdrawl">Withdrawl</option>
				</select>
				<input type="date" value={today} placeholder="Date"></input>
				<textarea placeholder="Notes"></textarea>
				<input type="submit" />
			</form>
		)
	}
}


const mapStateToProps = state => ({
	expenses: state
})



const mapDispatchToProps = (dispatch) => {
	return {
		addExpense: (expense) => dispatch(addExpense(expense))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm)