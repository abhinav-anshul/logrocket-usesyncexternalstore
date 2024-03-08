import store from "./store"
import { useState } from "react"
function TodoForm() {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    store.addTodo(text)
    setText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm
