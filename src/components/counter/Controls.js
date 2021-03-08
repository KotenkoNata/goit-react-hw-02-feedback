import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => (
  <div>
    <button type="button" onClick={onIncrement}>
      Увеличить
    </button>
    <button type="button" onClick={onDecrement}>
      Уменьшить
    </button>
  </div>
);

export default Controls;
