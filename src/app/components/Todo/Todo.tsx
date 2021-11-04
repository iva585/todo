import React, { useState } from 'react';
import classes from './Todo.module.css';

type TodoProps = {
  isDone?: boolean;
  title: string;
  description?: string;
};

function Todo({ title, description }: TodoProps): JSX.Element {
  const [isDone, setisDone] = useState(false);

  function handleClickDone() {
    setisDone(!isDone);
  }
  return (
    <div className={`${classes.wrapper}`}>
      <section
        className={`${classes.container}
        ${isDone ? classes['todo--isDone'] : classes['todo--notDone']}`}
        onClick={() => handleClickDone()}
      >
        <h2
          className={`${classes.heading} ${
            isDone ? classes['heading--isDone'] : classes['heading--notDone']
          }`}
        >
          {title}
        </h2>
        <p
          className={`${classes.text} ${
            isDone
              ? classes['paragraph--isDone']
              : classes['paragraph--notDone']
          }`}
        >
          {description}
        </p>
      </section>
    </div>
  );
}

export default Todo;
