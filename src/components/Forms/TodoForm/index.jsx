import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../../store/slices/todoSlice';
import { TODO_VALIDATION_SCHEMA } from '../../../utils/validationSchemas';
import styles from './TodoForm.module.sass';

function TodoForm ({ create }) {
  const initialValues = { value: '' };

  const handleSubmit = (values, formikBag) => {
    create({ ...values, isDone: false });
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TODO_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <div className={styles.inputField}>
          <Field
            className={styles.input}
            name='value'
            type='text'
            placeholder='Add todo'
            autoFocus
          />
          <button className={styles.submit} type='submit'>
            Add
          </button>
        </div>
        <ErrorMessage className={styles.error} name='value' component='span' />
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  create: values => dispatch(createTodo(values)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
