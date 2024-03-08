let todos = []
let subscribers = new Set()

const store = {
  getTodos() {
    // getting all todos
    return todos
  },

  // subscribe and unsubscribe from the store using callback
  subscribe(callback) {
    subscribers.add(callback)
    return () => subscribers.delete(callback)
  },

  // adding todo to the state
  addTodo(text) {
    todos = [
      ...todos,
      {
        id: new Date().getTime(),
        text: text,
        completed: false,
      },
    ]

    subscribers.forEach((callback) => {
      callback()
    })
  },
  // toggle for todo completion using id
  toggleTodo(id) {
    todos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo
    })
    subscribers.forEach((callback) => callback())
  },
}

// exporting the default store state
export default store
