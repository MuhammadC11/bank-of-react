/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, { useState } from "react";
import AccountBalance from "./AccountBalance";
import Navbar from "./Navbar";
import "../styles/Credits.css";

const Credits = ({ credits, accountBalance, addCredits }) => {
  // State variables
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

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
    addCredits(description, amount);
    setDescription("");
    setAmount("");
  };

  // Render credit history
  const renderCredits = () => {
    return credits.map((credit) => (
      <li key={credit.id}>
        <div className="credit-item">
          <div className="credit-description">{credit.description}</div>
          <div className="credit-amount">${credit.amount}</div>
        </div>
      </li>
    ));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Credits</h1>
        <br />

        <div className="content">
          <div className="credits">
            <div className="credit-content">
              {/* Left section: Credit History */}
              <div className="credit-content-left">
                <h1>Credit History</h1>
                <ul className="credit-list">{renderCredits()}</ul>
              </div>

              {/* Right section: Account Balance and Add Credit Form */}
              <div className="credit-content-right">
                <h1 className="account-balance">
                  <AccountBalance accountBalance={accountBalance} />
                </h1>
                {/* Add Credit Form */}
                <form onSubmit={handleSubmit} className="credit-form">
                  <div className="form-row">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      id="description"
                      value={description}
                      onChange={handleFieldChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="amount" className="form-label">
                      Amount
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
    </div>
  );
};

export default Credits;
