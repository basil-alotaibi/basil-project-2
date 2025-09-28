"use client";

import { useState } from "react";

type Props = {
  onAdd: (name: string, amount: number) => void;
};

export default function ExpenseForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount) return;
    onAdd(name, Number(amount));
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Expense name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
