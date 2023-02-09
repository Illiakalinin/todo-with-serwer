import { useState } from 'react';
import styles from './TodoListItem.module.sass';

function TodoListItem ({ t, remove, isDoneChangeHandler, valueChangeHandler }) {
  const [isEdit, setIsEdit] = useState(false);
  const [body, setBody] = useState(t.value);

  const bodyChangeHandler = ({ target: { value } }) => {
    setBody(value);
  };

  const changeEditHandler = () => {
    if (isEdit) {
      valueChangeHandler(t.id, body);
    }
    setIsEdit(isEdit => !isEdit);
  };

  return (
    <li className={styles.items}>
      <input
        type='checkbox'
        checked={t.isDone}
        className={styles.check}
        onChange={({ target: { checked } }) =>
          isDoneChangeHandler(t.id, checked)
        }
      />
      {isEdit ? (
        <input
          className={styles.itemEdit}
          type='text'
          name='value'
          value={body}
          onChange={bodyChangeHandler}
        />
      ) : (
        <span className={styles.item}>{t.value}</span>
      )}
      <button className={styles.edit} onClick={changeEditHandler}>
        {isEdit ? 'Save' : 'Edit'}
      </button>

      <button
        className={styles.delete}
        onClick={() => {
          remove(t.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoListItem;
