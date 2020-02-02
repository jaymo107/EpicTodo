import React from 'react';
import { Card, Container, Grid, Segment } from 'semantic-ui-react'
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
              <Segment padded='very' color='teal'>
                <TodoList />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </TodosProvider>
  );
}

export default App;
