import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    { title: "New Books", amount: 20, date: new Date(2022, 11, 9) },
    { title: "Laptop", amount: 2000, date: new Date(2022, 11, 9) },
    { title: "IPhone", amount: 1200, date: new Date(2022, 11, 9) },
  ]);

  const addExpensesHandler = (data) => {
    setExpenses((prev) => {
      return [...prev, data];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddHandler={addExpensesHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
