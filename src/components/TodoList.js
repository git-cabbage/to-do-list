import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) return

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    const updatedTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) return

        setTodos((prev) => prev.map((item) => (todoId ? newValue : item)))
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter((todo) => {
            if (todo.id !== id) {
                console.log(todo.id, id)
            }
        })

        setTodos(removeArr)
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>What are you planning to do today? </h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updatedTodo={updatedTodo}
            />
        </div>
    )
}

export default TodoList
