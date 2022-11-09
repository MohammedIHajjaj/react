import ExpenseItem from "./ExpenseItem";

const Expenses = ({expenses}) => {
  return (
    <div>
      {expenses.map((item) => (
        <ExpenseItem item={item} />
      ))}
    </div>
  );
};

export default Expenses;
