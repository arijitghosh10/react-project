import React from "react";
import Card from "../UI/card";
import ExpenseDate from "./ExpenseDate"
import './ExpenseItem.css';

function ExpenseItem(props) {
    
    return (
        <Card className="outer-div">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="description-div">
                <h2>{props.title}</h2>
                <div className="price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;