import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://vvb7el.sse.codesandbox.io/',
});

export const createNewTodo = values => httpClient.post('/contacts', values);

export const getTodos = () => httpClient.get('/contacts');

export const deleteTodo = id => httpClient.delete(`/contacts/${id}`);

export const updateTodo = (id, values) =>
  httpClient.patch(`/contacts/${id}`, values);
