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
    const [todo, setTodo] = useState(initItemsTodo)
    return(
        <div className="container mx-auto px-4 mt-6">
          
          <TodoCreate />

          <TodoList todos={todo}/>

          <TodoComputado />

          <TodoActions />

        </div>
    )
}

export default TodoMain