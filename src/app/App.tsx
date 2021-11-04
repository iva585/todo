import React from 'react';
import Todo from './components/Todo/Todo';
import Title from './components/Title/Title';
import classes from './App.module.css';

function App(): JSX.Element {
  return (
    <div>
      <Title>To do today</Title>
      <main className={classes.toDos}>
        <Todo
          title={'Schuhe putzen'}
          description={'Alle Schuhe im Regal vor der Tür'}
        />
        <Todo title={'Pflanzen gießen'} description={'Auch die in der Küche'} />
        <Todo title={'Wäsche'} description={'waschen, bügeln, aufraumen'} />
        <Todo
          title={'Rechnungen bezahlen'}
          description={'Baumschule und Zahnarzt'}
        />
      </main>
    </div>
  );
}

export default App;
