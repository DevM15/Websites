import { useState, useEffect} from "react"
import TodoList from "./components/TodoList"
import Todoinput from "./components/TodoInput"

export default function App() {
  const [todo, setTodo] = useState(['Dev'])
  const [todoValue, setTodoValue] = useState()

  function persistData(newList) {
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  function handleAddTodo(todoValue) {
    const newTodo = [...todo, todoValue]
    persistData(newTodo)
    setTodo(newTodo)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todo.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodo(newTodoList)
  }

  function handleEditTodo(index) {
    const ValueToBeEdited = todo[index]
    setTodoValue(ValueToBeEdited)
    handleDeleteTodo(index)
  }

  function moveUpTodo(index) {
    if(index > 0) {
      const UpdatedTodo = [...todo];
      [UpdatedTodo[index],UpdatedTodo[index-1]] = [UpdatedTodo[index-1],UpdatedTodo[index]]
      persistData(UpdatedTodo)
      setTodo(UpdatedTodo);
    }
  }

  function moveDownTodo(index) {
    if(index < todo.length - 1) {
      const UpdatedTodo = [...todo];
      [UpdatedTodo[index+1],UpdatedTodo[index]] = [UpdatedTodo[index],UpdatedTodo[index+1]]
      persistData(UpdatedTodo)
      setTodo(UpdatedTodo);
    }
  }

  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

    localTodos=JSON.parse(localTodos).todos
    setTodo(localTodos)

  },[])

  return (
    <main>
      <h1>Todo App</h1>
      <div className="hero">
        <TodoList todo={todo} moveUpTodo={moveUpTodo} moveDownTodo={moveDownTodo} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
        <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo} />
      </div>
    </main>
  )
}

