import './ExpenseDate.css';
function ExpenseDate(props){
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    const date=props.date.getFullYear();
    return(
        <div className="expense-date">
            <div className="expense-date__month ">{month}</div>
            <div className="expense-date__year">{day}</div>
            <div className="expense-date__day ">{date}</div>
        </div>
    );
}
export default ExpenseDate;
