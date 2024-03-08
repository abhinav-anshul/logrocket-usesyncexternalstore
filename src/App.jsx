"use client"
import "./App.css"
import { useSyncExternalStore } from "react"
import store from "./store"
import TodoForm from "./TodoForm"
import List from "./List"

function App() {
  const todos = useSyncExternalStore(store.subscribe, store.getTodos)

  console.log({ todos })
  return (
    <>
      <main className="container">
        <h1>Welcome to TODO</h1>
        <TodoForm />
        <List />
      </main>
    </>
  )
}

export default App
