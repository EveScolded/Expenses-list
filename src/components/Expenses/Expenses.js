import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHendler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses =
    filteredYear === "all"
      ? props.items
      : props.items.filter((expense) => {
          return expense.date.getFullYear().toString() === filteredYear;
        });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHendler}
        />

        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
