import React from "react";
import Chart from "../Chart/Chart.js";
function ExpenseChart(props) {
  const ChartDataPoint = [
    { lable: "Jan", value: 0 },
    { lable: "Feb", value: 0 },
    { lable: "Mar", value: 0 },
    { lable: "Apr", value: 0 },
    { lable: "May", value: 0 },
    { lable: "jun", value: 0 },
    { lable: "jul", value: 0 },
    { lable: "Aug", value: 0 },
    { lable: "Sep", value: 0 },
    { lable: "Oct", value: 0 },
    { lable: "Nov", value: 0 },
    { lable: "Dec", value: 0 },
  ];
  for(const expense of props.expensesItem){
  const expenseMonth=expense.date.getMonth();
  ChartDataPoint[expenseMonth].value += expense.amount;
  }

  return <Chart dataInfo={ChartDataPoint} />;
}
export default ExpenseChart;
