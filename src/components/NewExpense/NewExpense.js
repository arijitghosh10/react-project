import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) =>{
    const saveExpenseHandler = (enteredData)=>{
        const ExpenseData={
            ...enteredData,
            id: Math.random().toString()
        };
        props.onAddExpense(ExpenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
    </div> 
}
export default NewExpense;