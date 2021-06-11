# API (Application programming interface)

## Interface through which one application connect other application to get data

## Data Format

1. JSON(string) look like javascript object
2. XML

## Way of communication

1.  XMLHttpRequest(old -not used anymore)
2.  fetch

## How to deal asynchronous Data

1.  callback
2.  promise
3.  Async, Await(Benhind the scene it uses promise)

## Architectures

1. SOAP API(old)
2. REST API (modern approach)
3. GRAPHQL

> ## popularbooks.com/path(Domain/path)

## REST API Format

| Request   | Path       | Responsibility          |
| --------- | ---------- | ----------------------- |
| GET       | /books     | Get All Books           |
| GET       | /books/:id | Get Single book         |
| POST      | /books     | Adding book             |
| PUT/PATCH | /books/:id | update existing book    |
| DELETE    | /books/:id | Delete an existing Book |

### Asynchronous Actions Requires Time to get Results

1. Request (own application) - hit 3rd party API server - data back to our application
2. Reading file
3. writing file
4. saving data into database

## Code sample

```javascript
function getOne() {
  return 1
}

function getTwo() {
  return 2
}

function getThree(callback) {
  setTimeout(() => {
    callback(3)
  }, 2000)
}

function getFour(callback) {
  setTimeout(() => {
    callback(4)
  }, 2000)
}

console.log(getOne()) //1
console.log(getTwo()) //2

//callback hell, christmas tree
console.log(
  getThree(function (data) {
    console.log(data)
    getFour(function (data) {
      console.log(data)
    })
  })
) //undefined
console.log(
  getFour(function (data) {
    console.log(data)
  })
) //4

const myFunc = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hi')
  }, 2000)
})

myFunc
  .then(data => {
    return [Promise.resolve('Hello'), Promise.resolve('Hi')]
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
  })
  .then(data => console.log(data[0].then(data => console.log(data))))
  .catch(err => console.log(err))

function getOne() {
  return 1
}

function getTwo() {
  return 2
}

function getThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(3))
    }, 2000)
  })
}

function getFour() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4)
    }, 2000)
  })
}
function getFive() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5)
    }, 2000)
  })
}

console.log(getOne())
console.log(getTwo())

getThree()
  .then(data => {
    console.log(data)
    return getFour()
      .then(data => {
        return getFive()
      })
      .then(data => console.log(data))
      .catch(err => {
        console.log(err)
      })
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))

async function getAllAction() {
  try {
    const three = await getThree()
    console.log(three)
    const four = await getFour()
    console.log(four)
    const five = await getFive()
    console.log(five)
  } catch (err) {
    console.log(err)
  }
}

getAllAction()

//callback hell, christmas tree
console.log(
  getThree(function (data) {
    console.log(data)
    getFour(function (data) {
      console.log(data)
    })
  })
)

function addedTodo() {
  http
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'our Todo',
      completed: true
    })
    .then(data => {
      console.log('Added todo', data)
      return http.update('https://jsonplaceholder.typicode.com/todos', 2, {
        completed: true
      })
    })
    .then(data => {
      console.log('updated Todo', data)
      console.log(data)
    })
    .catch(err => console.log(err))
}
```
