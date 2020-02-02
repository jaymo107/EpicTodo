export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

const getTodoIndex = (state, name) => {
  return state.findIndex(
    _todo => _todo.name === name
  );
};

const saveToStorage = (state) => {
  localStorage.setItem('todos', JSON.stringify(state));

  return [...state];
};

const isTodoValid = (state, name) => {
  return name.trim().length
    || getTodoIndex(state, name) > -1;
};

const addTodo = (state, { todo }) => {
  if (!isTodoValid(state, todo)) {
    return [...state];
  }

  return saveToStorage(
    [...state, { name: todo, done: false }]
  );
};

const completeTodo = (state, { todo }) => {
  const index = getTodoIndex(state, todo);
  const { name, done } = state[index];

  state[index] = { name, done: !done };

  return saveToStorage([...state]);
};

const removeTodo = (state, { todo }) => {
  const index = getTodoIndex(state, todo);

  state.splice(index, 1);

  return saveToStorage([...state]);
};

const editTodo = (state, { todo, newName} ) => {
  if (!isTodoValid(state, newName)) {
    return [...state];
  }

  const index = getTodoIndex(state, todo);
  const { done } = state[index];

  state[index] = { name: newName, done };

  return saveToStorage([...state]);
};

const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case COMPLETE_TODO:
      return completeTodo(state, action);
    case REMOVE_TODO:
      return removeTodo(state, action);
    case EDIT_TODO:
      return editTodo(state, action);
    default:
      throw new Error();
  }
};

export default TodoReducer;