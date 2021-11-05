import React, { useState } from 'react';
import classes from './CreateTask.module.css';

type CreateTaskProps = {
  onSubmit: (todo: {
    title: string;
    description: string;
    isDone: boolean;
  }) => void;
};

function CreateTask({ onSubmit }: CreateTaskProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ title, description, isDone: false });
  }

  return (
    <form className={classes.form} onSubmit={(event) => handleSubmit(event)}>
      <label className={classes.label}>
        Task:{' '}
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className={classes.input}
        ></input>
      </label>
      <label className={classes.label}>
        Description:
        <input
          type="text"
          className={classes.input}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></input>
      </label>
      <button className={classes.buttonAdd}>add task</button>
    </form>
  );
}

export default CreateTask;
