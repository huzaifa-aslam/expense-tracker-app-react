import React,{useContext,useReducer,useState} from "react";
import { Button, Container } from "react-bootstrap";
//import {transaction} from './transContext'
import {trnsaction} from './transContext'

import transReducer from './transReducer'

import "tachyons";

function Child1() {

  let transaction=useContext(trnsaction)
console.log(transaction)
  //let addTransaction=useContext(trnsaction)
  let [newDesc,setDesc]=useState("");
  let [newAmount,setAmount]=useState(0)
  const handleAddition=(event)=>{
    event.preventDefault();
    // addTransaction({
    //   amount:newAmount,
    //   desc:newDesc
    // })

  }
  return (
    <Container className="measure bg-light-gray p-5">
      <div className="tc">
        <h3>Expense Tracker</h3>
      </div>
      <div>
        <h5>YOUR BALANCE</h5>
        <h1>$260.00</h1>
      </div>
      <div className="flex justify-content-around bg-white">
        <div>
          <h5>INCOME</h5>
          <h2>$260.00</h2>
        </div>
        <div>
          <h5>EXPENSE</h5>
          <h2>$260.00</h2>
        </div>
      </div>
      <div className="">
        <h5>history</h5>
        <hr />
      </div>
      <div className="history">

        {

transaction?.map((transObj, ind) => {
          return (
            <div className="flex justify-between bg-white m-2 p-2 "key={ind}>
              <span>{transObj.desc}</span>
              <span>{transObj.amount}</span>
            </div>
          );
        })}

      </div>

      <div>
        <h5>Add new Trasaction</h5>
        <hr />
      </div>
      <form onSubmit={handleAddition}>
        <label>Text</label>
        <br />
        <input className="w-100 p-2" type="text" onChange={(ev)=>setDesc(ev.target.value)} placeholder="Enter Text..." />
        <br />
        <label>Amount</label>
        <br />
        <input className="w-100 p-2" type="number" onChange={(ev)=>setAmount(ev.target.value)} placeholder="Enter amount..." />
        <br />
        <Button type="submit"   className="w-100 mt-3">Add Transaction</Button>
      </form>
    </Container>
  );
}

export default Child1;
