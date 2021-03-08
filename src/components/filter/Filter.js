import React from 'react';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label>
      Фильтр по имени{' '}
      <input type="text" value={filter} onChange={onChangeFilter} />
    </label>
  );
};

export default Filter;
