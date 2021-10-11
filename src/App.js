import React,{useState} from "react";
import NewExpense from "./component/Expense/NewExpense";
import AddExpense from "./component/AddExpense/AddExpense";

const testData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {

const [expenses,setExpense]=useState(testData);

  function getData(value){
    setExpense([value,...expenses]);
    // or
    // setExpense((prevExpense)=>{return [value,...prevExpense]})
  }


  return (
    <div>
      <AddExpense takeData={getData}/>
      <div>
        <NewExpense data={expenses}/>
      </div>
    </div>
  );
}

export default App;
