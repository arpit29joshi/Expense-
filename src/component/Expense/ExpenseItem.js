import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../Ui/Card.js";

function ExpenseItem(props) {
  // const [title,newTitle]=useState(props.name);
  // function onClicking(){
  //   newTitle('Uppdate!')
  //   console.log('cick');
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.name}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
