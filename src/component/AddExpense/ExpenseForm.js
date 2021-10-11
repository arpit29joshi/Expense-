import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitile, SetEnteredTitile] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");
  const [enteredDate, SetEnteredDate] = useState("");

  function changeText(event) {
    SetEnteredTitile(event.target.value);
  }
  function changeAmount(event) {
    SetEnteredAmount(event.target.value);
  }
  function changeDate(event) {
    SetEnteredDate(event.target.value);
  }

  function onSubmitting(event) {
    event.preventDefault();
    const saveData = {
      title: enteredTitile,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveData(saveData);
    SetEnteredTitile("");
    SetEnteredAmount("");
    SetEnteredDate("");
  }

  return (
    <form onSubmit={onSubmitting}>
      <div className="new-expense__controls ">
        <div className="new-expense__controls ">
          <label>Title</label>
          <input type="Text" value={enteredTitile} onChange={changeText} />
        </div>
        <div className="new-expense__controls ">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={changeAmount}
          />
        </div>
        <div className="new-expense__controls ">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2020-12-31"
            onChange={changeDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.onPressed}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
