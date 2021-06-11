// https://jsonplaceholder.typicode.com/todos
//Get All Todos

const http = {
  getAll(path) {
    return fetch(path)
      .then(res => res.json())
      .then(data => data)
      .catch(err => new Error(err))
  },
  getOne(path, id) {
    return fetch(`${path}/${id}`)
      .then(res => res.json())
      .then(data => data)
      .catch(err => new Error(err))
  },
  post(path, data) {
    return fetch(path, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(res => res.json())
      .then(data => data)
      .catch(err => new Error(err))
  },
  update(path, id, data) {
    return fetch(`${path}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(res => res.json())
      .then(data => data)
      .catch(err => new Error(err))
  },
  delete(path, id) {
    return fetch(`${path}/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => data)
      .catch(err => new Error(err))
  }
}

http
  .getAll('https://jsonplaceholder.typicode.com/todos')
  .then(data => console.log('Get ALl Todos', data))
  .catch(err => console.log(err))
http
  .getOne('https://jsonplaceholder.typicode.com/todos', 2)
  .then(data => console.log('Get single Todo', data))

// function addedTodo() {
//   http
//     .post('https://jsonplaceholder.typicode.com/todos', {
//       title: 'our Todo',
//       completed: true
//     })
//     .then(data => {
//       console.log('Added todo', data)
//       return http.update('https://jsonplaceholder.typicode.com/todos', 2, {
//         completed: true
//       })
//     })
//     .then(data => {
//       console.log('updated Todo', data)
//       console.log(data)
//     })
//     .catch(err => console.log(err))
// }
function addedTodo() {
  return new Promise((resolve, reject) => {
    http
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: 'our Todo',
        completed: true
      })
      .then(data => {
        resolve(data)
      })
      .catch(err => console.log(err))
  })
}

addedTodo().then(data => {
  console.log('Added Todo', data)
  http
    .update('https://jsonplaceholder.typicode.com/todos', 2, {
      completed: true
    })
    .then(data => {
      console.log('Updated Todo', data)
    })
    .catch(err => console.log(err))
})

const deletedTodo = http
  .delete('https://jsonplaceholder.typicode.com/todos', 2)
  .then(data => console.log('Deleted Todo', data))

// function getTodos() {
//   return fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

// //Get single todo
// function getTodo() {
//   return fetch('https://jsonplaceholder.typicode.com/todos/2')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

// //adding a todo
// //Get single todo
// function addTodo() {
//   return fetch('https://jsonplaceholder.typicode.com/todos', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'our Todo',
//       completed: true
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

// //update a existing todo
// function updateTodo() {
//   return fetch('https://jsonplaceholder.typicode.com/todos/2', {
//     method: 'PATCH',
//     body: JSON.stringify({
//       completed: true
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

// function deleteTodo() {
//   return fetch('https://jsonplaceholder.typicode.com/todos/2', {
//     method: 'DELETE'
//   })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

// getTodos()
// getTodo()
// addTodo()
// updateTodo()
// deleteTodo()
