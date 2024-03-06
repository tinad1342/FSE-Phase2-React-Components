import React, { useState, useEffect } from 'react';
import { getAll, post, put, deleteById } from './memdb.js';
import './App.css';
import CustomerList from './components/CustomerList.js';
import CustomerAddUpdateForm from './components/CustomerAddUpdateForm.js';

function log(message){console.log(message);}


export function App(params) {
  let blankCustomer = { "id": -1, "name": "", "email": "", "password": "" };
  const [customers, setCustomers] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer);
  
  useEffect(() => { getCustomers() }, []);

  const getCustomers =  function(){
    log("in getCustomers()");
    setCustomers(getAll());
  }

  return (
    <div>
      <CustomerList customers={customers} blankCustomer = {blankCustomer} formObject={formObject} setFormObject={setFormObject} />
      <CustomerAddUpdateForm blankCustomer = {blankCustomer} formObject={formObject} setFormObject={setFormObject} />
    </div>
  );
}

export default App;
