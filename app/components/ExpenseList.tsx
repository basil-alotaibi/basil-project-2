"use client";

type Expense = { name: string; amount: number };

type ExpenseListProps = {
  expenses: { name: string; amount: number }[];
  onDelete: (index: number) => void;
};

export default function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="expense-list">
      {expenses.map((expense, index) => (
        <div key={index} className="expense-card">
          <span className="expense-name">{expense.name}</span>
          <span className="expense-amount">
            {expense.amount.toLocaleString()} SAR
          </span>
          <button className="delete-btn" onClick={() => onDelete(index)}>
            ✖
          </button>
        </div>
      ))}
      <div className="total">Total: {total.toLocaleString()} SAR</div>
    </div>
  );
}

