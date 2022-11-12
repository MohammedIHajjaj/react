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

  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === expenseFilterYear
  );

  let expensesContent = <p>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem key={item.id} item={item} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        expenseFilterYear={expenseFilterYear}
        onFilteredYear={filterYearHandler}
      />
      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredExpenses.map((item) => (
          <ExpenseItem key={item.id} item={item} />
        ))
      )} */}

      {expensesContent}
    </Card>
  );
};

export default Expenses;
