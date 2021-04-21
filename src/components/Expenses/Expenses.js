import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
