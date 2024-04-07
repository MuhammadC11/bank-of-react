/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import other components
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/Login";
import Credits from "./components/Credits";
import Debits from "./components/Debits";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor() {
    // Create and initialize state
    super();
    this.state = {
      accountBalance: 1234567.89,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: "Joe Smith",
        memberSince: "11/22/99",
      },
    };
  }

  async componentDidMount() {
    try {
      // Fetch credit and debit data
      const creditsResponse = await fetch(
        "https://johnnylaicode.github.io/api/credits.json"
      );
      const debitsResponse = await fetch(
        "https://johnnylaicode.github.io/api/debits.json"
      );

      // Convert responses to JSON
      const credits = await creditsResponse.json();
      const debits = await debitsResponse.json();

      // Calculate total credits and debits using reduce
      const totalCredits = credits.reduce(
        (total, credit) => total + credit.amount,
        0
      );
      const totalDebits = debits.reduce(
        (total, debit) => total + debit.amount,
        0
      );

      // Update state with credit and debit data and calculate account balance
      this.setState({
        creditList: credits,
        debitList: debits,
        accountBalance: totalCredits - totalDebits,
      });
    } catch (error) {
      console.error("Error getting what you requested:", error);
    }
  }

  //Adding a new credit to the creditList state and update accountBalance
  addCredit = (credit) => {
    const newCreditList = [credit, ...this.state.creditList];
    this.setState({
      creditList: newCreditList,
      accountBalance: this.state.accountBalance + credit.amount,
    });
  };

  //Adding a new debit to the debitList state and update accountBalance
  addDebit = (debit) => {
    const newDebitList = [debit, ...this.state.debitList];
    this.setState({
      debitList: newDebitList,
      accountBalance: this.state.accountBalance - debit.amount,
    });
  };

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  // Create Routes and React elements to be rendered using React components
  render() {
    // Create React elements and pass input props to components

    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );
    const CreditsComponent = () => (
      <Credits
        credits={this.state.creditList}
        accountBalance={this.state.accountBalance}
        addCredit={this.addCredit}
      />
    );
    const DebitsComponent = () => (
      <Debits
        debits={this.state.debitList}
        accountBalance={this.state.accountBalance}
        addDebit={this.addDebit}
      />
    );

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/bank-of-react">
        <div>
          <Navbar />
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
