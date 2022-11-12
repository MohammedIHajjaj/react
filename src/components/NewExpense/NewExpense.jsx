import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddHandler }) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const onCancelHandler = () => {
    setAddNewExpense(false);
  };
  

  return (
    <div className="new-expense">
      {!addNewExpense ? (
        <button onClick={() => setAddNewExpense(true)}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onAddHandler={onAddHandler}
          onCancelHandler={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
