import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [itemTitle, setItemTitle] = useState("");
  const [itemDate, setItemDate] = useState("");
  const [itemAmount, setItemAmount] = useState("");

  // const [userInput, setUserInput] = useState({
  //   itemTitle: "",
  //   itemDate: "",
  //   itemAmount: "",
  // });

  const titleChangeHandler = (event) => {
    setItemTitle(event.target.value);
    // setUserInput({ ...userInput, itemTitle: event.target.value }); // we shouldnt use this approach
    // and use this instead |
    // setUserInput((prevState) => {
    //   return { ...prevState, itemTitle: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setItemDate(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, itemDate: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setItemAmount(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, itemAmount: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      id: parseInt(Math.random() * 1000),
      title: itemTitle,
      amount: itemAmount,
      date: new Date(itemDate),
    };

    props.onAddHandler(expenseData);

    setItemTitle("");
    setItemAmount("");
    setItemDate("");

    props.onCancelHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={itemTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={itemAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={itemDate}
            onChange={dateChangeHandler}
            min="2022-10-10"
            max="2027-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
