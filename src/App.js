import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "New Books", amount: 20, date: new Date(2022, 11, 9) },
    { title: "Laptop", amount: 2000, date: new Date(2022, 11, 9) },
    { title: "IPhone", amount: 1200, date: new Date(2022, 11, 9) },
  ];

  return (
    <div className="App">
      <h2>Hello..</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
