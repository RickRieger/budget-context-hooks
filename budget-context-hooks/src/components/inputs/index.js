import React from 'react';

function Inputs() {
  return (
    <form>
      <select>
        <option value='+'>+</option>
        <option value='-'>-</option>
      </select>
      <input type='text' />
      <input type='number' />

      <input type='submit' value='add' />
    </form>
  );
}

export default Inputs;
