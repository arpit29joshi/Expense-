import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
function ExpenseList(props) {

    if(props.items.length===0){
        return <p className="expenses-list__fallback">No content found !</p>
    }

  return (
    <ul className="expenses-list">
      {props.items.map((eachValue) => (
        <ExpenseItem
          key={eachValue.id}
          name={eachValue.title}
          date={eachValue.date}
          amount={eachValue.amount}
        />
      ))}
    </ul>
  );
}
export default ExpenseList;
