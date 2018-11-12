import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseReport from './ExpenseReport';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class ExpenseList extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	
	}

	componentWillMount(){
		this.setState({
			...this.props.expenses
		})
	}


	render(){
		let sum = 0
		this.props.expenses.forEach((val) => {
			if(val.transaction === "withdrawl"){
				sum -= Number(val.amount)
			}
			else {
				sum += Number(val.amount)
			}
			
		})
		return (

				<div className='report'>
					<div className='report-header'>
						<h3 className="balance">Balance: {sum}</h3>
						<Link className="newLink" to={'/expenseform'}> New Expense </Link>
					</div>
					<div className="summary">
						
						{this.props.expenses.map( (expense, id) => 
							<div key={expense.description} className="expenseReport">
								<Link to={`/expense/${id}`}  className="expense-link">{expense.description}</Link>
								<p className="expenseAmt">{expense.amount}</p>
							</div>
							)
						}
					</div>
				
			</div>
		)
	}
}


const mapStateToProps = state => ({
	expenses: state
})


export default connect(mapStateToProps)(ExpenseList)