import React, { createContext, useReducer, } from 'react';
import TodoReducer from '../reducers/TodoReducer';

export const TodosContext = createContext();

export const TodosProvider = props => {
  let stored = localStorage.getItem('todos');

  return (
    <TodosContext.Provider value={
      useReducer(TodoReducer, stored ? JSON.parse(stored) : [])
    }>
      {props.children}
    </TodosContext.Provider>
  );
};