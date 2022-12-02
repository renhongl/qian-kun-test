import { useCallback, useEffect, useReducer } from "react";
import { TodoItem } from "../models/todo";

const initialState: TodoItem[] = [];

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOAD':
            return action.payload;
        default:
            return [...state]
    }
}

export const useTodo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const load = useCallback(() => {
        fetch('http://localhost:5000/todos').then(async res => {
            const data = await res.json();
            dispatch({ type: 'LOAD', payload: data });
        })
    }, [])

    const addTodo = useCallback((text: string) => {
        const todoItem: Omit<TodoItem, 'id'> = {
            text,
            completed: false,
        }
        fetch('http://localhost:5000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(todoItem)
        }).then(load)
    }, [])

    const deleteTodo = useCallback((id: number) => {
        fetch(`http://localhost:5000/todos/${id}`, {
            method: 'DELETE'
        }).then(load)
    }, [])

    useEffect(() => {
        load();
    }, [])

    return {
        state,
        load,
        addTodo,
        deleteTodo
    }
}

