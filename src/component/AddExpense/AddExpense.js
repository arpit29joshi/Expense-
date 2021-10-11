import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./AddExpense.css";
function AddExpense(props) {
  function saveExpenseDataHandler(value) {
    const dataItem = {
      ...value,
      id: Math.random().toString(),
    };
    props.takeData(dataItem);
    setEdit(false);
  }

  const [isEdit, setEdit] = useState(false);
  function changeState() {
    setEdit(true);
  }
  function toggleState() {
    setEdit(false);
  }

  return (
    <div className="new-expense">
      {!isEdit && <button onClick={changeState}>Add New Item</button>}
      {isEdit && (
        <ExpenseForm onSaveData={saveExpenseDataHandler} onPressed={toggleState} />
      )}
    </div>
  );
}
export default AddExpense;
