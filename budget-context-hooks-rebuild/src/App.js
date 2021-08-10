import React, { useState, useEffect } from 'react';
import { Header, Lists, Inputs } from './components';
import { HeaderContext, ListsContext, InputContext } from './context/context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [income, setIncome] = useState(getHeaderInitialValue('income'));
  const [expense, setExpense] = useState(getHeaderInitialValue('expense'));

  const [option, setOption] = useState('+');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const [incomeArray, setIncomeArray] = useState(
    getListInitialValue('incomeArray')
  );
  const [expenseArray, setExpenseArray] = useState(
    getListInitialValue('expenseArray')
  );

  function getListInitialValue(value) {
    return window.localStorage.getItem(value)
      ? JSON.parse(window.localStorage.getItem(value))
      : [];
  }
  function getHeaderInitialValue(value) {
    return window.localStorage.getItem(value)
      ? Number(window.localStorage.getItem(value))
      : 0;
  }
  useEffect(() => {
    setLocalStorage();
  }, [income, expense, incomeArray, expenseArray]);

  function setLocalStorage() {
    window.localStorage.setItem('income', income);
    window.localStorage.setItem('expense', expense);
    window.localStorage.setItem('incomeArray', JSON.stringify(incomeArray));
    window.localStorage.setItem('expenseArray', JSON.stringify(expenseArray));
  }
  function handleOption(value) {
    setOption(value);
  }
  function handleDescription(value) {
    setDescription(value);
  }
  function handleAmount(value) {
    setAmount(parseFloat(value));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (amount === 0 || description === '') {
      toast.error('Please enter a description and value!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (option === '+') {
      console.log(income);
      console.log(amount);
      setIncome(income + parseFloat(amount));
      setIncomeArray([...incomeArray, { description, amount }]);
      console.log();
    } else {
      setExpense(expense - parseFloat(amount));
      setExpenseArray([...expenseArray, { description, amount }]);
    }
  }

  function handleDeleteIncome(index) {
    let itemToBeDeleted = incomeArray[index];

    setIncome(income - itemToBeDeleted.amount);

    let newIncomeArray = [...incomeArray];

    newIncomeArray.splice(index, 1);

    setIncomeArray(newIncomeArray);
  }

  function handleDeleteExpense(index) {
    console.log('it works');
    let itemToBeDeleted = expenseArray[index];
    console.log(expense, 'expense');
    console.log(itemToBeDeleted.amount, 'amount');
    setExpense(expense + itemToBeDeleted.amount);

    let newExpenseArray = [...expenseArray];

    newExpenseArray.splice(index, 1);

    setExpenseArray(newExpenseArray);
  }

  function reset() {
    setAmount(0);
    setDescription('');
  }

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
    expenseArray,
    handleDeleteIncome,
    handleDeleteExpense,
  };
  const headerContextValue = {
    income,
    expense,
  };
  console.log(income);
  console.log(expense);
  return (
    <div className='App'>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
