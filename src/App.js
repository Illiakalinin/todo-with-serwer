import styles from './App.module.sass';
import TodoForm from './components/Forms/TodoForm';
import TodosList from './components/Forms/TodoList';

function App () {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Todo List...</h1>
          <TodoForm />
        </div>
        <TodosList />
      </section>
    </div>
  );
}

export default App;
