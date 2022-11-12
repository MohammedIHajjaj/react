import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props /*{item}*/) => {
  const [itemTitle, setItemTitle] = useState(props.item.title);
  const clickHandler = () => {
    setItemTitle("Hello");
    console.log(itemTitle);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div
          onClick={() => alert(props.item.amount)}
          className="expense-item__price"
        >
          ${props.item.amount}
        </div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
