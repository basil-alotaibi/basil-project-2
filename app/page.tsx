"use client";

import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default function Page() {
  const [expenses, setExpenses] = useState<{ name: string; amount: number }[]>(
    []
  );
  const [darkMode, setDarkMode] = useState(false);


  const addExpense = (name: string, amount: number) => {
    setExpenses([...expenses, { name, amount }]);
  };

  
  const deleteExpense = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <main className={darkMode ? "dark" : "light"} style={{ padding: "20px" }}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "6px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>💸 Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </main>
  );
}
