import { useState } from "react";
import TodoActions from "./TodoActions";
import TodoComputado from "./TodoComputado";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

const initItemsTodo:TodoItem[] = [
    {id: 1,title: "Ir al GYM",completed: true},
    {id: 2,title: "Leer Documentacion",completed: false},
    {id: 3,title: "Programar algo",completed: false},
    {id: 4,title: "Estudiar nuevas cosas",completed: false},
    {id: 5,title: "Estudiar servidores",completed: true},
]

function TodoMain() {
    const [todo, setTodo] = useState<TodoItem[]>(initItemsTodo)
    const [filter, setFilter] = useState<string>("All")
    
    const addTodo = (todoItem:TodoItem) => setTodo([...todo,todoItem])
    const removeTodo = (id:number) => setTodo(todo.filter(todo => todo.id !== id))
    const updateTodo = (id:number) => setTodo(todo.map(todo => todo.id == id ? {...todo,completed: !todo.completed} : todo))
    const removeTodos = () => setTodo(todo.filter(todo => todo.completed !== true))
    const getTodoForFilter = () : TodoItem[] => {
        if(filter == "Incompleted") return todo.filter(todo => todo.completed !== true)
        if(filter == "Completed") return todo.filter(todo => todo.completed !== false)
        return todo
    }
    const setTipOfFilter = (tipFilter:string) => setFilter(tipFilter)
    const getTotalTareas = ():string => {
        if(filter == "Incompleted") return String(todo.filter(todo => todo.completed !== true).length)
        if(filter == "Completed") return String(todo.filter(todo => todo.completed !== false).length)
        return String(todo.length)
    }
    return(
        <div className="container mx-auto px-4 mt-6">
          
          <TodoCreate addTodo={addTodo}/>

          <TodoList todos={getTodoForFilter()} removeTodo={removeTodo} updateTodo={updateTodo}/>

          <TodoComputado removeTodos={removeTodos} textCountTodos={getTotalTareas()}/>

          <TodoActions setTipOfFilter={setTipOfFilter} filter={filter}/>

        </div>
    )
}

export default TodoMain