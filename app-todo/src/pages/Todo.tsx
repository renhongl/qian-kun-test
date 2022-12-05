import React, { useEffect } from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { useTodo } from '../services/todo';

export default function Todo() {

    const { state, addTodo, deleteTodo, toggleTodo } = useTodo();

    return (
        <div>
            <TodoList data={state} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
            <AddTodo addTodo={addTodo}></AddTodo>
        </div>
    )
}
