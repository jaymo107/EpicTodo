import React from 'react';
import { Card, Container, Grid } from 'semantic-ui-react'
import TodoList from './components/TodoList';
import './App.css';
import { TodosProvider } from './providers/TodosProvider';

function App() {
  return (
    <TodosProvider>
      <Container>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <Card fluid>
                <Card.Content header='My Todos' />
                <Card.Content>
                  <TodoList />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </TodosProvider>
  );
}

export default App;
