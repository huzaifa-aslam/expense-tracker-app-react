import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { trnsaction } from "./transContext";
//import transReducer from './transReducer'
import "./Child1.css";
import "tachyons";

function Child1() {
  let transactions = useContext(trnsaction);

  //let { addTransaction } = useContext(trnsaction);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);
  const handleAddition = (event) => {
    event.preventDefault();

    if (Number(newAmount) === 0 || newDesc === "") {
      alert(`Please Add some amount And/Or Description !!`);

      return false;
    }
    transactions.addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });
    setAmount(0);
    setDesc("");
  };

  // getIncome function
  const getIncome = () => {
    let income = 0;

    for (var i = 0; i < transactions?.trnsaction.length; i++) {
      if (transactions?.trnsaction[i].amount > 0)
        income += transactions?.trnsaction[i].amount;
    }
    return income;
  };
  // getExpense function
  const getExpense = () => {
    let expense = 0;

    for (var i = 0; i < transactions?.trnsaction.length; i++) {
      if (transactions?.trnsaction[i].amount < 0)
        expense += transactions?.trnsaction[i].amount;
    }
    return expense;
  };

  return (
    <Container className="measure bg-light-gray pl-5 pr-5 pt-2 pb-3">
      <div className="tc">
        <h5 className="bg-white">
          Developed By
          <br /> Huzaifa Aslam
        </h5>
      </div>
      <div className="text-center text-white bg-income border-radius">
        <h5>YOUR CURRENT BALANCE</h5>
        <h2>{getIncome() + getExpense()}</h2>
      </div>
      <div className="flex justify-between text-white text-center ">
        <div className="bg-income round-div">
          <h5>INCOME</h5>
          <h2>{getIncome()}</h2>
        </div>
        <div className="bg-expensive round-div">
          <h5>EXPENSE</h5>
          <h2>{getExpense()}</h2>
        </div>
      </div>
      <div className="">
        <h5>history</h5>
        <hr />
      </div>
      <div className="history">
        {transactions?.trnsaction.map((transObj, ind) => {
          if (transObj.amount < 0) {
            return (
              <div
                className="flex justify-between pos-relative   m-2 pl-3 pr-3 pt-1 pb-1 bg-white  "
                key={ind}
              >
                <span>{transObj.desc}</span>
                <span>{transObj.amount}</span>
                <span className="indication bg-expensive"></span>
              </div>
            );
          } else {
            return (
              <div
                className="flex justify-between pos-relative m-2 pl-3 pr-3 pt-1 pb-1 bg-white"
                key={ind}
              >
                <span>{transObj.desc}</span>
                <span>{transObj.amount}</span>
                <span className="indication bg-income"></span>
              </div>
            );
          }
        })}
      </div>

      <div>
        <h5>Add new Transaction</h5>
        <hr />
      </div>
      <form onSubmit={handleAddition}>
        <label>
          Description
          <br />
          [e.x. Cash,Expense]
        </label>
        <br />
        <input
          required
          value={newDesc}
          className="w-100 p-2"
          type="text"
          onChange={(ev) => setDesc(ev.target.value)}
          placeholder="Enter Description..."
        />
        <br />
        <label>Amount</label>
        <br />
        <input
          required
          value={newAmount}
          className="w-100 p-2"
          type="number"
          onChange={(ev) => setAmount(ev.target.value)}
          placeholder="Enter amount..."
        />
        <br />
        <Button type="submit" className="w-100 mt-3">
          Add Transaction
        </Button>
      </form>
    </Container>
  );
}

export default Child1;
