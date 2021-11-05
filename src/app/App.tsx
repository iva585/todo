import React, { useState } from 'react';
import Todo from './components/Todo/Todo';
import Title from './components/Title/Title';
import classes from './App.module.css';
import CreateTask from './components/CreateTask/CreateTask';

function App(): JSX.Element {
  const [todos, setTodos] = useState([
    {
      title: 'Schuhe putzen',
      description: 'Alle Schuhe im Regal',
      isDone: false,
    },
    {
      title: 'Pflanzen gießen',
      description: 'Auch die in der Küche',
      isDone: false,
    },
    {
      title: 'Wäsche',
      description: 'waschen, bügeln, aufraumen',
      isDone: true,
    },
    {
      title: 'Rechnungen bezahlen',
      description: 'Baumschule und Zahnarzt',
      isDone: true,
    },
  ]);

  function handleSubmit(todo: {
    title: string;
    description: string;
    isDone: boolean;
  }) {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo);
    console.log(setTodos);
  }
  return (
    <div>
      <Title>To do today</Title>

      <CreateTask onSubmit={handleSubmit} />
      <main className={classes.toDos}>
        {todos.map((todo) => (
          <Todo
            title={todo.title}
            description={todo.description}
            isDone={todo.isDone}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
