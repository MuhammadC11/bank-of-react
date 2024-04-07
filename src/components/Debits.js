/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, { useState } from "react";
import AccountBalance from "./AccountBalance";
import "../styles/Debits.css";

const Debits = ({ debits, accountBalance, addDebit }) => {
  // Create the list of Debit items
  const renderDebits = () => {
    return debits.map((debit) => {
      //sort the debits array by date
      debits.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      const date = debit.date.slice(0, 10); // Splice the date string to get the desired format
      return (
        <ul key={debit.id}>
          <div className="debit-item">
            <div className="debit-description">{debit.description}</div>
            <div className="debit-amount">+ ${debit.amount}</div>
            <br />
            <div className="debit-date">{date}</div>
          </div>
        </ul>
      );
    });
  };

  // State variables
  const [description, setDescription] = useState(""); // Description of the debit
  const [amount, setAmount] = useState(""); // Amount of the debit

  // Handle form field changes
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    if (name === "description") {
      setDescription(value);
    } else if (name === "amount") {
      setAmount(value);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (description && amount) {
      const debit = {
        id: debits.length + 1,
        description: description,
        amount: parseFloat(amount),
        date: new Date().toISOString(),
      };
      addDebit(debit);
      setDescription("");
      setAmount("");
    }
  };

  // Render the list of Debit items and a form to input new Debit item
  return (
    <div className="container">
      <h1>Debits</h1>
      <br />

      <div className="content">
        <div className="debits">
          <div className="debit-content">
            {/* Left section: Debit History */}
            <div className="debit-content-left">
              <h1>Debit History</h1>
              <ul className="debit-list">{renderDebits()}</ul>
            </div>

            {/* Right section: Account Balance and Add Debit Form */}
            <div className="debit-content-right">
              <h1 className="account-balance">
                <AccountBalance accountBalance={accountBalance} />
              </h1>
              {/* Add Debit Form */}
              <form onSubmit={handleSubmit} className="debit-form">
                <div className="form-row">
                  <label htmlFor="description" className="form-label">
                    Description:
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={handleFieldChange}
                    className="form-input"
                    required
                    placeholder="Enter description"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="amount" className="form-label">
                    Amount:
                  </label>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={handleFieldChange}
                    className="form-input"
                    required
                    min="0.01"
                    step="0.01"
                    placeholder="Enter amount (e.g., 100.00)"
                  />
                </div>
                <button type="submit" className="form-button">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debits;
