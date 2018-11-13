import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';


class ExpenseEdit extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.handleDescChange = this.handleDescChange.bind(this)
		this.handleAmtChange = this.handleAmtChange.bind(this)
		this.handleDateChange = this.handleDateChange.bind(this)
		this.handleNotesChange = this.handleNotesChange.bind(this)
		this.handleTransactionChange = this.handleTransactionChange.bind(this)
	}

	componentWillMount(){
		this.setState({
				...this.props.expenses[this.props.match.params.id]
			})
	}


	onSubmit = (e) => {
		e.preventDefault();
		if (e.target.elements[0].value === "" || e.target.elements[1].value === ""){
			alert("You must enter a description and amount!")
		} else {
			this.props.editExpense({
				description: e.target.elements[0].value,
				amount: e.target.elements[1].value,
				transaction: e.target.elements[2].value,
				date: e.target.elements[3].value,
				notes: e.target.elements[4].value
			}, this.props.match.params.id)
			this.props.history.push('/');

		}
	}

	handleDescChange = (e) => {
		const description = e.target.value;
		this.setState(()=>( {description} ));
	}
	handleAmtChange = (e) => {
		const amount = e.target.value;
		this.setState(()=>( {amount} ));
	}
	handleDateChange = (e) => {
		const date = e.target.value;
		this.setState(()=>( {date} ));
	}
	handleNotesChange = (e) => {
		const notes = e.target.value;
		this.setState(()=>( {notes} ));
	}
	handleTransactionChange = (e) => {
		const transact = e.target.value;
		this.setState(()=>( {transact} ));
	}
	render(){
		let expense = this.props.expenses[this.props.match.params.id]
		return (
			<form className="expenseForm" onSubmit={this.onSubmit}>
				<input type="text" placeholder="Description" onChange={this.handleDescChange} value={this.state.description} autoFocus></input>
				<input type="number" placeholder="Amount" onChange={this.handleAmtChange}  value={this.state.amount}></input>
				<select name="transaction" onChange={this.handleTransactionChange} defaultValue={expense.transaction}>
				  <option value="deposit">Deposit</option>
				  <option value="withdrawal">Withdrawal</option>
				</select>
				<input type="date" onChange={this.handleDateChange}  value={this.state.date} placeholder="Date"></input>
				<textarea placeholder="Notes" onChange={this.handleNotesChange} value={this.state.notes}></textarea>
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
		editExpense: (expense, id) => dispatch(editExpense(expense, id))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEdit)