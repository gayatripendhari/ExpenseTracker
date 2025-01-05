import React, { useState } from "react";
import './styles.css';

function ExpenseTracker() {
  // Initial data (transactions and balance)
  const initialTransactions = [
    {
      id: 1,
      category: "Salary",
      date: "2025-01-01",
      amount: 5000,
      description: "Monthly salary for December",
      type: "income",
    },
    {
      id: 2,
      category: "Groceries",
      date: "2025-01-02",
      amount: 1200,
      description: "Grocery shopping at local market",
      type: "expense",
    },
    {
      id: 3,
      category: "Rent",
      date: "2025-01-03",
      amount: 2000,
      description: "Monthly house rent payment",
      type: "expense",
    },
    {
      id: 4,
      category: "Freelance",
      date: "2025-01-04",
      amount: 3000,
      description: "Payment for freelance project",
      type: "income",
    },
  ];

  const initialBalance = initialTransactions.reduce(
    (total, txn) =>
      txn.type === "income" ? total + txn.amount : total - txn.amount,
    0
  );

  const [transactions, setTransactions] = useState(initialTransactions);
  const [balance, setBalance] = useState(initialBalance);
  const [showForm, setShowForm] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    category: "",
    date: "",
    amount: "",
    description: "",
    type: "income",
  });
  const [searchQuery, setSearchQuery] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  // Add new transaction
  const handleAddTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      ...newTransaction,
      id: Date.now(),
      amount: parseFloat(newTransaction.amount),
    };
    setTransactions([...transactions, transaction]);
    setBalance(
      transaction.type === "income"
        ? balance + transaction.amount
        : balance - transaction.amount
    );
    setNewTransaction({
      category: "",
      date: "",
      amount: "",
      description: "",
      type: "income",
    });
    setShowForm(false);
  };

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter transactions by category
  const filteredTransactions = transactions.filter((txn) =>
    txn.category.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="expense-tracker">
      {/* Header */}
      <header className="header">
        <h2>Balance: ₹{balance}</h2>
        <button onClick={() => setShowForm(!showForm)}>Add</button>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by category..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Income and Expenses Summary */}
      <div className="summary">
        <div className="card income">
          <h3 style={{ color: "green" }}>Income</h3>
          <p>
            ₹
            {transactions
              .filter((txn) => txn.type === "income")
              .reduce((total, txn) => total + txn.amount, 0)}
          </p>
        </div>
        <div className="card expenses">
          <h3 style={{ color: "red" }}>Expenses</h3>
          <p>
            ₹
            {transactions
              .filter((txn) => txn.type === "expense")
              .reduce((total, txn) => total + txn.amount, 0)}
          </p>
        </div>
      </div>

      {/* Transactions Table */}
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((txn) => (
              <tr key={txn.id}>
                <td>{txn.category}</td>
                <td>{txn.date}</td>
                <td style={{ color: txn.type === "income" ? "green" : "red" }}>
                  ₹{txn.amount}
                </td>
                <td>
                  <button
                    onClick={() =>
                      alert(
                        `Details:\nCategory: ${txn.category}\nDate: ${txn.date}\nAmount: ₹${txn.amount}\nDescription: ${txn.description}`
                      )
                    }
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No transactions found for this category.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Add Transaction Form */}
      {showForm && (
        <form className="transaction-form" onSubmit={handleAddTransaction}>
          <h3>Add New Transaction</h3>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={newTransaction.category}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={newTransaction.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={newTransaction.amount}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={newTransaction.description}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label>
            Type:
            <select
              name="type"
              value={newTransaction.type}
              onChange={handleChange}
              required
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ExpenseTracker;
