import React, { useContext, useState } from 'react';
import { Checkbox, Grid, Button, Form } from 'semantic-ui-react';
import { TodosContext } from '../providers/TodosProvider';
import { COMPLETE_TODO, REMOVE_TODO, EDIT_TODO } from '../reducers/TodoReducer';

const TodoItem = ({ todo }) => {
  const [, dispatch] = useContext(TodosContext);
  const [editing, setEditing] = useState(false);
  const [todoName, setTodoName] = useState(todo.name);

  const getLabel = () => {
    return (
      <label className={todo.done ? 'strikethrough' : null}>
        {todo.name}
      </label>
    );
  };

  const editTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: EDIT_TODO,
      todo: todo.name,
      newName: todoName
    });
  };

  const renderTodo = () => {
    if (editing) {
      return (
        <Form onSubmit={editTodo}>
          <Form.Field>
            <input
              value={todoName}
              onChange={(e) => setTodoName(e.currentTarget.value)}
            />
          </Form.Field>
        </Form>
      );
    }

    return (
      <Checkbox
        onClick={() => dispatch({
          type: COMPLETE_TODO,
          todo: todo.name
        })}
        defaultChecked={todo.done}
        label={getLabel()}
      />
    );
  };

  return (
    <Grid.Row>
      <Grid.Column>
        {renderTodo()}
      </Grid.Column>
      <Grid.Column>
        <Button.Group floated='right'>
          <Button icon='edit' onClick={() => setEditing(!editing)} />
          <Button icon='delete' onClick={
            () => dispatch({ type: REMOVE_TODO, todo: todo.name })
          } />
        </Button.Group>
      </Grid.Column>
    </Grid.Row>
  );
};

export default TodoItem;