import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getTodos,
  deleteTodo,
  updateTodo,
} from '../../../store/slices/todoSlice';
import TodoListItem from '../TodoListItem';
import styles from './TodoList.module.sass';

function TodosList ({ todos, isFetching, error, get, remove, update }) {
  useEffect(() => {
    get();
  }, []);

  const isDoneChangeHandler = (id, checked) => {
    update(id, { isDone: checked });
  };

  const valueChangeHandler = (id, value) => {
    update(id, { value });
  };

  return (
    <ul className={styles.list}>
      {isFetching && <div className={styles.loading}>Loading...</div>}
      {error && <div>!!!ERROR!!!</div>}
      {!error &&
        todos.map(t => (
          <TodoListItem
            key={t.id}
            t={t}
            remove={remove}
            isDoneChangeHandler={isDoneChangeHandler}
            valueChangeHandler={valueChangeHandler}
          />
        ))}
    </ul>
  );
}

const mapStateToProps = ({ todosData }) => todosData;

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(getTodos()),
  remove: id => dispatch(deleteTodo(id)),
  update: (id, values) => dispatch(updateTodo({ id, values })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
