import React, { useState } from 'react';
import { Header, Lists, Inputs } from './components';

import { InputContext, HeaderContext, ListsContext } from './context/context';

import './App.css';

function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [option, setOption] = useState('+');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const [incomeArray, setIncomeArray] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  function handleOption(value) {
    setOption(value);
  }

  function handleDescription(value) {
    setDescription(value);
  }

  function handleAmount(value) {
    setAmount(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    //cannot submit if amount is empty
    if (amount === 0) return;

    //is it an expense or income?

    if (option === '+') {
      setIncome(income + parseFloat(amount));
      setIncomeArray([...incomeArray, { description, amount }]);
    } else {
      setExpense(expense - parseFloat(amount));
      setExpenseList([...expenseList, { description, amount }]);
    }
  }

  function handleDeleteIncome(index) {
    let incomeItemToDelete = incomeArray[index];

    setIncome(income - incomeItemToDelete.amount);

    let newIncomeArray = [...incomeArray];

    newIncomeArray.splice(index, 1);

    setIncomeArray(newIncomeArray);
  }

  function handleDeleteExpense(index) {

    let expenseItemToDelete = expenseList[index]

    setExpense(expense - expenseItemToDelete.amount)





  }

  function

  const inputContextValue = {
    option,
    description,
    amount,
    handleOption,
    handleDescription,
    handleAmount,
    handleSubmit,
  };

  const listContextValue = {
    incomeArray,
    expenseList,
    handleDeleteExpense,
    handleDeleteIncome,
  };

  const headerContextValue = {
    income,
    expense,
  };

  return (
    <div className='App'>
      <HeaderContext.Provider value={headerContextValue}>
        <Header />
      </HeaderContext.Provider>

      <InputContext.Provider value={inputContextValue}>
        <Inputs />
      </InputContext.Provider>

      <ListsContext.Provider value={listContextValue}>
        <Lists />
      </ListsContext.Provider>
    </div>
  );
}

export default App;
