import React, { useState, useContext } from 'react';
import { Form, Input } from 'semantic-ui-react';
import { TodosContext } from '../providers/TodosProvider';
import { ADD_TODO } from '../reducers/TodoReducer';

const CreateTodo = props => {
  const [todo, setTodo] = useState('');
  const [, dispatch] = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, todo });
    setTodo('');
  };

  return (
    <Form onSubmit={handleSubmit} centered>
      <Form.Group widths='equal'>
        <Form.Field>
          <Input
            value={todo}
            fluid
            placeholder='Go shopping...'
            onChange={(e, { value }) => setTodo(value)}
          />
        </Form.Field>
        <Form.Field>
          <Form.Button content='Add' />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default CreateTodo;