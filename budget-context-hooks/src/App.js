import React, { useState } from 'react';
import { Header, Lists, Inputs } from './components';
import './App.css';

function App() {
  const [income, setIncome] = useState(0);
  const [expense, setexpense] = useState(0);

  const [option, setOption] = useState('+');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const [incomeArray, setIncomeArray] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  return (
    <div className='App'>
      <Header />
      <Inputs />
      <Lists />
    </div>
  );
}

export default App;
