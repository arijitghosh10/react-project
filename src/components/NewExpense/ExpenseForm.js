import React,{ useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props)=>{
    const [newTitle,setNewTitle] = useState('');
    const [newAmount,setNewAmount] = useState('');
    const [newDate,setNewDate] = useState('');
    const[isValidTitle,setIsValidTitle] = useState('true')
    const[isValidAmount,setIsValidAmount] = useState('true')
    
    const titleChangeHandler = (event)=>{
        if(event.target.value.trim().length){
            setIsValidTitle(true)
        }
         setNewTitle(event.target.value)
    }
    const amountChangeHandler = (event)=>{
        if(event.target.value.trim().length){
            setIsValidAmount(true)
        }
        setNewAmount(event.target.value)
    }
    const dateChangeHandler = (event)=>{
        setNewDate(event.target.value)
    }
    
    const formSubmitHandler = (event)=>{
        event.preventDefault() 
        const expenses = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        };
        if(newTitle.trim().length ===0) {
            setIsValidTitle(false);
            return;
        }
        if(newAmount.trim().length ===0){
            setIsValidAmount(false);
            return;
        }
        props.onSaveExpenseData(expenses);
        setNewTitle('')
        setNewAmount('')
        setNewDate('')
    }
    return (
        <form onSubmit={formSubmitHandler}>
        <div className="new-expense-outer">
            <div className="new-expense-inner">
                <label style={{color: !isValidTitle ? 'red' : 'black'}}>Title</label>
                <input value={newTitle} onChange={titleChangeHandler} type="text" />
            </div>
            <div className="new-expense-inner">
                <label style={{color: !isValidAmount ? 'red' : 'black'}}>Amount</label>
                <input value={newAmount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense-inner">
                <label>Date</label>
                <input value={newDate} onChange={dateChangeHandler} type="date" />
            </div>
            <div className="new-expense-action">
                <button type='submit'>Add Expense</button>
            </div>
        </div>
        </form>
    )
}

export default ExpenseForm;