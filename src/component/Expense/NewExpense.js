import React, { useState } from "react";
import Card from "../Ui/Card.js";
import "./NewExpense.css";
import ExpensesFilter from "./ExpenseFilter.js";
import ExpenseList from "./ExpenseList.js";
import ExpenseChart from "./ExpenseChart.js";
function NewExpense(props) {
  const [selectYear, changeYear] = useState("2020");
  function getData(value) {
    changeYear(value);
  }

  const filteryear = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === selectYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter defaultYear={selectYear} takeData={getData} />
      <ExpenseChart expensesItem={filteryear}/>
      <ExpenseList items={filteryear} />
    </Card>
  );
}
export default NewExpense;
