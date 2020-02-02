import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { Grid, Message } from 'semantic-ui-react';
import { TodosContext } from '../providers/TodosProvider';
import CreateTodo from './CreateTodo';

const TodoList = props => {
  const [todos] = useContext(TodosContext);

  const renderTodos = () => {
    if (!todos.length) {
      return (
        <Grid.Row>
          <Grid.Column width={16}>
            <Message warning>
              <p>You have no todos!</p>
            </Message>
          </Grid.Column>
        </Grid.Row>
      );
    }

    return todos.map(
      todo => <TodoItem key={todo.name} todo={todo} />
    );
  };

  return (
    <Grid container columns={2}>
      <Grid.Row>
        <Grid.Column width={16}>
          <CreateTodo />
        </Grid.Column>
      </Grid.Row>
      {renderTodos()}
    </Grid>
  );
};

export default TodoList;