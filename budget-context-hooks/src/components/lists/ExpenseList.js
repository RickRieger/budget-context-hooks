import React, { useContext } from 'react';
import { ListsContext } from '../../context/context';
function ExpenseList() {
  const { expenseList } = useContext(ListsContext);
  console.log(expenseList);
  return (
    <div>
      <h2>Expense</h2>
      <ul>
        {expenseList.map((expense, index) => {
          return (
            <li key={index}>
              <button>Delete</button>
              <span>{expense.description}</span>
              <span>{expense.amount}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExpenseList;
