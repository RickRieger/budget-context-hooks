import React, { useContext } from 'react';
import { ListsContext } from '../../context/context';

function ExpenseList() {
  const { expenseArray, handleDeleteExpense } = useContext(ListsContext);
  return (
    <div>
      <h2>Expense</h2>
      <ul>
        {expenseArray.map((expense, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  handleDeleteExpense(index);
                }}
              >
                Delete
              </button>
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
