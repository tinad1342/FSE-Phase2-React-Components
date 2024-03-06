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

  // const handleInputChange = function (event) {
  //   log("in handleInputChange()");
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   let newFormObject = {...formObject}
  //   newFormObject[name] = value;
  //   setFormObject(newFormObject);
  // }

  // let onCancelClick = function () {
  //   log("in onCancelClick()");
  //   setFormObject(blankCustomer);
  // }

  // let onDeleteClick = function () {
  //   log("in onDeleteClick()");
  //   if (formObject.id >=0) {
  //     deleteById(formObject.id);
  //   }
  //   setFormObject(blankCustomer);
  // }

  // let onSaveClick = function () {
  //   log("in onSaveClick()");
  //   if (mode === "Add") {
  //     post(formObject);
  //   }
  //   if (mode === "Update") {
  //     put(formObject.id, formObject);
  //   }
  //   setFormObject(blankCustomer);
  // }

  return (
    <div>
      <CustomerList customers={customers} blankCustomer = {blankCustomer} formObject={formObject} setFormObject={setFormObject} />
      <CustomerAddUpdateForm blankCustomer = {blankCustomer} formObject={formObject} setFormObject={setFormObject} />
    </div>
  );
}

export default App;
