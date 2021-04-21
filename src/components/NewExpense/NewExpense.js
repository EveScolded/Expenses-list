import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormContent(false);
  };

  const [formContent, setFormContent] = useState(false);

  const newExpenseHandler = () => {
    setFormContent(true);
  };

  const cancelHandler = () => {
    setFormContent(false);
  };

  if (!formContent)
    return (
      <div className="new-expense">
        <button onClick={newExpenseHandler}>Add new expense</button>
      </div>
    );

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelForm={cancelHandler}
      />
    </div>
  );
};

export default NewExpense;
