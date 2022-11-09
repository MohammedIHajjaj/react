import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props /*{item}*/) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
        <div className="expense-item__price">${props.item.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
