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
  const [description, setDescription] = useState(""); // Description of the credit
  const [amount, setAmount] = useState(""); // Amount of the credit

  // Handle form field changes
  const handleFieldChange = (event) => {
    const { name, value } = event.target; // Destructure name and value from the event target
    if (name === "description") {
      // If the name is description
      setDescription(value); // Set the description to the value
    } else if (name === "amount") {
      // If the name is amount
      setAmount(value); // Set the amount to the value
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior (refreshing the page)
    addCredits(description, amount); // Add the credit with the description and amount
    setDescription(""); // Reset the description
    setAmount(""); // Reset the amount
  };

  // Render credit history
  const renderCredits = () => {
    return credits.map(
      (
        credit // Map each credit to a list item
      ) => (
        <li key={credit.id}>
          {" "}
          {/* Set the key to the credit id */}
          <div className="credit-item">
            {" "}
            {/* Credit item */}
            <div className="credit-description">{credit.description}</div>{" "}
            {/* Credit description */}
            <div className="credit-amount">${credit.amount}</div>{" "}
            {/* Credit amount */}
          </div>
        </li>
      )
    );
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
