import React, { useState } from "react";
import ExpenseItem from "./ExpenseItems";
import './Expense.css';
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/card";
import ExpensesFilter from "./ExpensesFiler";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expenses found</p>;
  if(filteredExpense.length>0){
    expensesContent = filteredExpense.map((expense) => (
      <ExpenseItem 
      key={expense.id} 
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} />
      ))
  }
  return (
    <div>
      <Card className="allExpenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpense}/>
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expense;