import { configureStore } from '@reduxjs/toolkit';
import todosReducers from './slices/todoSlice';

const store = configureStore({
  reducer: {
    todosData: todosReducers,
  },
});

export default store;
