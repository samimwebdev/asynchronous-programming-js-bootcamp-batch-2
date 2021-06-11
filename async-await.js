const http = {
  async getAll(path) {
    try {
      const res = await fetch(path)
      return await res.json()
    } catch (err) {
      return new Error(err)
    }
  },
  async getOne(path, id) {
    try {
      const res = await fetch(`${path}/${id}`)
      return res.json()
    } catch (err) {
      return new Error(err)
    }
  },
  async post(path, data) {
    try {
      const res = await fetch(path, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      return await res.json()
    } catch (err) {
      return new Error(err)
    }
  },
  async update(path, id, data) {
    try {
      const res = await fetch(`${path}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      return await res.json()
    } catch (err) {
      return new Error(err)
    }
  },
  async delete(path, id) {
    try {
      const res = await fetch(`${path}/${id}`, {
        method: 'DELETE'
      })
      return await res.json()
    } catch (err) {
      return new Error(err)
    }
  }
}

async function getTodos() {
  const todos = await http.getAll('https://jsonplaceholder.typicode.com/todos')
  console.log(todos)
}

console.log(getTodos())

async function getTodo() {
  const todo = await http.getOne(
    'https://jsonplaceholder.typicode.com/todos',
    2
  )
  console.log(todo)
}

getTodo()

async function updateTodo() {
  try {
    const addedTodo = await http.post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        title: 'our Todo',
        completed: true
      }
    )
    console.log('Added Todo', addedTodo)
    const updatedTodo = await http.update(
      'https://jsonplaceholder.typicode.com/todos',
      2,
      {
        completed: true
      }
    )
    console.log('updatedTodo', updatedTodo)
  } catch (err) {
    console.log(err)
  }
}

updateTodo()

async function deletedTodo() {
  try {
    const deletedTodo = await http.delete(
      'https://jsonplaceholder.typicode.com/todos',
      2
    )
    console.log(deletedTodo)
  } catch (err) {
    console.log(err)
  }
}

deletedTodo()
