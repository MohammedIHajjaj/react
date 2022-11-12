import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddHandler }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAddHandler={onAddHandler} />
    </div>
  );
};

export default NewExpense;
