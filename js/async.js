const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// const getTodos = axios(url);
// const promise = new Promise((resolve, reject) => {
//   getTodos.then(todos => { resolve(todos.data) }).catch(err => reject(err));
// });
//
// promise.then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })



const getTodosOne = async () => {
  const { data } = await axios(url).catch(() => ({}));
  return data && data.id ? data : '';
}

getTodosOne().then((data) => { console.log(data) });
// getTodosOne2().then((data) => { console.log(data) });
