import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [expenseFilterYear, setExpenseFilterYear] = useState("2022");

  const filterYearHandler = (year) => {
    setExpenseFilterYear(year);
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        expenseFilterYear={expenseFilterYear}
        onFilteredYear={filterYearHandler}
      />
      {expenses.map((item) => (
        <ExpenseItem item={item} />
      ))}
    </Card>
  );
};

export default Expenses;
