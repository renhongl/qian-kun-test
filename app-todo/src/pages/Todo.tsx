import React, { useEffect } from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { useTodo } from '../services/todo';

export default function Todo() {

    const { state, addTodo, deleteTodo } = useTodo();

    return (
        <div>
            <TodoList data={state} deleteTodo={deleteTodo}></TodoList>
            <AddTodo addTodo={addTodo}></AddTodo>
        </div>
    )
}
